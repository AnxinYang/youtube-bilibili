import { useStore, useAsync, If } from 'ax-react-lib';
import { useEffect, useState } from 'react';
import styles from '../styles/Section.module.css';
import { MockupData } from '../utils/data';

export default function Section(props: {
    title: string,
    keyword: string,
}) {
    const [isReady] = useStore<boolean>('gapi');
    const [items, setItems] = useState([]);
    const [windowWidth] = useStore('windowWidth', 0)
    const [isMockup, setIsMockup] = useState(false);
    useAsync(async () => {
        if (isReady) {
            try {
                const cache = localStorage.getItem(props.title);
                if (cache) {
                    setItems(JSON.parse(cache));
                    return
                }
                const { result } = await gapi.client.youtube.search.list({
                    part: 'id,snippet',
                    q: props.keyword,
                    maxResults: 30
                })
                setItems(result.items)
                localStorage.setItem(props.title, JSON.stringify(result.items))
            } catch (e) {
                setIsMockup(true)
                setItems(MockupData)
            }
        }
    }, [isReady])


    // if (items.length === 0) return <div></div>
    let index = 0;
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.main}>
                    <h2>
                        {props.title}
                        <If condition={isMockup}>
                            <span style={{
                                fontSize: '1rem',
                                fontWeight: 'normal',
                                marginLeft: '12px'
                            }}>No enough API quota, showing mockup data</span>
                        </If>
                    </h2>

                    <section>
                        <Item data={items[index++]} />
                        <Item data={items[index++]} />
                        <Item data={items[index++]} />
                        <Item data={items[index++]} />
                        <If condition={windowWidth > 1500}>
                            <Item data={items[index++]} />
                            <Item data={items[index++]} />
                        </If>
                    </section>
                    <section>
                        <Item data={items[index++]} />
                        <Item data={items[index++]} />
                        <Item data={items[index++]} />
                        <Item data={items[index++]} />
                        <If condition={windowWidth > 1500}>
                            <Item data={items[index++]} />
                            <Item data={items[index++]} />
                        </If>
                    </section>
                </div>
                <div className={styles.rank}>
                    <h2>{'More'}</h2>
                    <section>
                        <RankItem data={items[index++]} />
                        <RankItem data={items[index++]} />
                        <RankItem data={items[index++]} />
                        <RankItem data={items[index++]} />
                        <RankItem data={items[index++]} />
                        <RankItem data={items[index++]} />
                        <RankItem data={items[index++]} />
                        <RankItem data={items[index++]} />
                        <RankItem data={items[index++]} />
                        <RankItem data={items[index++]} />
                    </section>
                </div>
            </div>
        </section>
    )
}

function Item(props: { data: any }) {
    const [, setPlayID] = useStore('playID')
    const { snippet, id } = props.data ?? {};

    if (!snippet) {
        return (
            <div className={styles.items} >
                <div className='placeholder' style={{ width: '180px', height: '100px', marginBottom: '1rem' }} />
                <div className='placeholder' style={{ width: '180px', height: '2rem' }} >
                </div>
            </div>
        )
    }

    return (
        <div className={styles.items} style={{ width: snippet?.thumbnails?.medium?.width / 2 }}
            onClick={() => {
                setPlayID(id.videoId)
            }}
        >
            <img src={snippet?.thumbnails?.medium?.url ?? '/404.png'} width={snippet?.thumbnails?.medium?.width / 2} />

            <div className={styles.itemTitle}>
                <span className={styles.title} title={snippet?.title}>{snippet?.title}</span>
                <br />
                <span className={styles.author}>{snippet?.channelTitle}</span>
            </div>
        </div>
    )
}

function RankItem(props: { data: any }) {
    const [, setPlayID] = useStore('playID')
    const { snippet, id } = props.data ?? {};
    return (
        <div className={styles.rankItems}>
            <span
                className={styles.title}
                onClick={() => {
                    setPlayID(id.videoId)
                }}
                title={snippet?.title}>
                {snippet?.title ?? '-'}
            </span>
        </div>
    )
}