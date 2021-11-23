import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function MyApp({ Component, pageProps:{session,...pageProps} }) {
  return (
  <SessionProvider>
    <Component {...pageProps} />
  </SessionProvider>
  )
}

export default MyApp;
