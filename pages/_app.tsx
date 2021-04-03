import { Store, useStore } from 'ax-react-lib';
import { useEffect } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


  return <Store
    defaultValues={{
      apiKey: 'AIzaSyDSeCBIYYVKzNaaQq-vodJAznnH7wUqR1w'
    }}
  ><Component {...pageProps} /></Store>
}


export default MyApp

