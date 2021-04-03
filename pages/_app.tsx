import { Store, useStore } from 'ax-react-lib';
import { useEffect } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


  return <Store
    defaultValues={{
      apiKey: 'AIzaSyDfT4s2tpTWmSFslxM7aJqwwXH1CsU2aWA'
    }}
  ><Component {...pageProps} /></Store>
}


export default MyApp

