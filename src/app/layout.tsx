import {ReactNode} from 'react'
import Head from "next/head";
import type {Metadata} from 'next'

import Providers from "@/providers";

import "@/helpers/scss/_global.scss"


export const metadata: Metadata = {
  title: 'Quiz App',
  description: 'Test Task Created By Sergey',
}

interface IRootProps {
  children: ReactNode
}

export default function RootLayout({children}: IRootProps) {
  
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <body>
        <Providers>
          {children}
       </Providers>
      </body>
    </html>
  )
}
