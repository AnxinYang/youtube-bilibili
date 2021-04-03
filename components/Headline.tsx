import { useAsync, useStore, If } from 'ax-react-lib';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Headline.module.css';
import { MockupData } from '../utils/data';
export default function Headline() {
    const [isReady] = useStore<boolean>('gapi');
    const [items, setItems] = useState([]);
    const [windowWidth] = useStore('windowWidth', 0)
    useAsync(async () => {
        if (isReady) {
            try {
                const cache = localStorage.getItem('headline');
                if (cache) {
                    setItems(JSON.parse(cache));
                    return
                }
                const { result } = await gapi.client.youtube.search.list({
                    part: 'id,snippet',
                    q: '',
                    maxResults: 11
                })
                result.items[0].snippet.thumbnails.high.url
                setItems(result.items);
                localStorage.setItem('headline', JSON.stringify(result.items))
            } catch (e) {
                setItems(MockupData)
            }
        }
    }, [isReady])
    if (items.length === 0) return <div></div>
    let index = 0
    return (
        <div className={styles.container}>
            <section className={styles.gallery}>
                <Item data={items[index++]} div={0.96} />
            </section>
            <section className={styles.recommend}>
                <div>
                    <Item data={items[index++]} />
                    <Item data={items[index++]} />
                    <If condition={windowWidth > 1500}>
                        <Item data={items[index++]} />
                        <Item data={items[index++]} />
                    </If>
                    {/* <Item data={items[index++]} /> */}
                </div>
                <div>
                    <Item data={items[index++]} />
                    <Item data={items[index++]} />
                    <If condition={windowWidth > 1500}>
                        <Item data={items[index++]} />
                        <Item data={items[index++]} />
                    </If>
                    {/* <Item data={items[9]} /> */}
                </div>
            </section>
        </div>
    )
}


function Item(props: { data: any, div?: number }) {
    const [, setPlayID] = useStore('playID')
    const { snippet, id } = props.data;
    const div = props.div ?? 2
    return (
        <div className={styles.items} style={{
            width: snippet?.thumbnails?.high?.width / div,
            height: snippet?.thumbnails?.high?.height / div,
        }}

            onClick={() => {
                setPlayID(id.videoId)
            }}
        >
            <img src={snippet?.thumbnails?.high?.url ?? '/404.png'} width={snippet?.thumbnails?.high?.width / div} />

            <div className={styles.itemTitle}>
                {snippet.title}
            </div>
        </div>
    )
}