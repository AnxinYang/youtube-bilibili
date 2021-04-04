import { useStore } from "ax-react-lib";
import { useEffect, useState } from "react"
declare var YT: any;

export default function Player() {
    const [playID, setID] = useStore('playID', '');
    const [player, setPlayer] = useState<any>(undefined);
    useEffect(() => {
        try {
            if (player) {
                playID && player.loadVideoById(playID)
            } else {
                const newPlayer = new YT.Player('player', {
                    height: '390',
                    width: '640',
                    events: {
                        'onReady': (e) => {

                        },
                        'onStateChange': (e) => {

                        }
                    }
                });
                playID && newPlayer.loadVideoById(playID);
                setPlayer(newPlayer)
            }
            !playID && player.stopVideo()
        } catch (e) {

        }
    }, [playID, player])
    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                backgroundColor: 'rgba(0,0,0,0.3)',
                position: 'fixed',
                top: 0,
                left: 0,
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