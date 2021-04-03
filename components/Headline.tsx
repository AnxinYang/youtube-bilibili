import { useAsync, useStore } from 'ax-react-lib';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Headline.module.css';
export default function Headline() {
    const [isReady] = useStore<boolean>('gapi');
    const [items, setItems] = useState([]);
    useAsync(async () => {
        if (isReady) {
            try {
                const { result } = await gapi.client.youtube.search.list({
                    part: 'id,snippet',
                    q: '',
                    maxResults: 11
                })
                result.items[0].snippet.thumbnails.high.url
                setItems(result.items)
            } catch (e) {
                console.log(e)
            }
        }
    }, [isReady])
    if (items.length === 0) return <div></div>
    console.log(items[0]?.snippet?.thumbnails?.high?.ur)
    return (
        <div className={styles.container}>
            <section className={styles.recommend}>
                <Item data={items[0]} gridArea='a0' />
                <Item data={items[1]} gridArea='a1' />
                <Item data={items[2]} gridArea='a2' />
                <Item data={items[3]} gridArea='a3' />
                <Item data={items[4]} gridArea='a4' />

                <Item data={items[5]} gridArea='b0' />
                <Item data={items[6]} gridArea='b1' />
                <Item data={items[7]} gridArea='b2' />
                <Item data={items[8]} gridArea='b3' />
                <Item data={items[9]} gridArea='b4' />
            </section>
        </div>
    )
}


function Item(props: { data: any, gridArea?: string }) {
    const [, setPlayID] = useStore('playID')
    const { snippet, id } = props.data;

    return (
        <div className={styles.items} style={{ gridArea: props.gridArea }}
            onClick={() => {
                setPlayID(id.videoId)
            }}
        >
            <img src={snippet?.thumbnails?.medium?.url ?? '/404.png'} />

            <div className={styles.itemTitle}>
                {snippet.title}
            </div>
        </div>
    )
}