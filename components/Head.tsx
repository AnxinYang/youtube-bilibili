import { useAsync, useStore } from 'ax-react-lib';
import Head from 'next/head'
import { useEffect } from 'react';

export default function PageHead() {
    return (
        <Head >
            <title>YouBili</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <script src="https://apis.google.com/js/api.js"></script>
            <script src="https://www.youtube.com/iframe_api"></script>
        </Head >
    )
}

