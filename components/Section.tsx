import { useStore, useAsync } from 'ax-react-lib';
import { useState } from 'react';
import styles from '../styles/Section.module.css';
export default function Section(props: {
    title: string,
    keyword: string,
}) {
    const [isReady] = useStore<boolean>('gapi');
    const [items, setItems] = useState([]);
    useAsync(async () => {
        if (isReady) {
            try {
                const { result } = await gapi.client.youtube.search.list({
                    part: 'id,snippet',
                    q: props.keyword,
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
    return (
        <section className={styles.container}>
            <h2>{props.title}</h2>
            <div className={styles.content}>
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
            </div>
        </section>
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