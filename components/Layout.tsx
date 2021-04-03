import Category from "./Category";
import PageHead from "./Head";
import Header from "./Header";
import Headline from "./Headline";
import Player from "./Player";
import styles from '../styles/Layout.module.css'
import { useEffect } from "react";
import { useStore } from "ax-react-lib";

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
    return (
        <div className={styles.container}>
            <PageHead />
            <Header />
            <div className={styles.content}>
                <Category />
                {children}
                <Player />
            </div>

        </div>
    )
}