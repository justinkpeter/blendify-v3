import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import {SessionProvider} from "next-auth/react";
import {RecoilRoot} from "recoil";


const inter = Inter({ subsets: ['latin'] })
export default function App({ Component, pageProps: { session, ...pageProps} }: AppProps) {



    return(
        <SessionProvider  session={session}>
            <RecoilRoot>
            <Component {...pageProps} />
            </RecoilRoot>
        </SessionProvider>
  )

}
