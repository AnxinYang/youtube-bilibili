import { useAsync, useStore } from 'ax-react-lib';
import Head from 'next/head'
import { useEffect } from 'react';
declare var YT: any;

export default function PageHead() {
    const [, setGAPI] = useStore('gapi')
    const [, setPlayer] = useStore('player')
    const [, setPlayeReady] = useStore('playerReady')
    const [, setPlayerStage] = useStore('playerState')
    const [apiKey] = useStore<string>('apiKey')
    useAsync(async () => {
        if (!gapi) {
            alert('Failed to load GAPI');
            return
        }
        gapi.load('client', async () => {
            await gapi.client.init({
                'apiKey': apiKey,
                'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
            });
            setGAPI(!!gapi.client.youtube)
        });
    }, []);

    useAsync(async () => {
        if (!YT) {
            alert('Failed to load YT');
            return
        }
        const player = new YT.Player('player', {
            height: '390',
            width: '640',
            // videoId: 'M7lc1UVf-VE',
            events: {
                'onReady': (e) => {

                },
                'onStateChange': (e) => {

                }
            }
        });
        setPlayer(player)
    }, [])

    return (
        <Head >
            <title>YouBili</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <script src="https://apis.google.com/js/api.js"></script>
            <script src="https://www.youtube.com/iframe_api"></script>
        </Head >
    )
}

