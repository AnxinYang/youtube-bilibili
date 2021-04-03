import { useStore } from "ax-react-lib";
import { useEffect, useState } from "react"

export default function Player() {
    const [playID, setID] = useStore('playID', '');
    const [player] = useStore<any>('player');
    useEffect(() => {
        playID && player.loadVideoById(playID)
        !playID && player.stopVideo()
    }, [playID])
    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                backgroundColor: 'rgba(0,0,0,0.3)',
                position: 'fixed',
                top: 0,
                display: !!playID ? '' : 'none'
            }}
            onClick={() => {
                setID('')
            }}
        >
            <div
                id='player'
                style={{
                    position: 'fixed',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: 'auto'
                }}
            ></div>
        </div>

    )
}