import Category from "./Category";
import PageHead from "./Head";
import Header from "./Header";
import Headline from "./Headline";
import Player from "./Player";
import styles from '../styles/Layout.module.css'
import { useEffect } from "react";
import { useAsync, useStore } from "ax-react-lib";
import Footer from "./Footer";


export default function Layout({ children }) {
    const [, setWindowWidth] = useStore('windowWidth')

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        const listener = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', listener)
        return () => {
            window.removeEventListener('resize', listener)
        }
    }, [])

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



    return (
        <div className={styles.container}>
            <PageHead />
            <Header />
            <div className={styles.content}>
                <Category />
                {children}
                <Player />
            </div>
            <Footer />
        </div>
    )
}