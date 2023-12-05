import {ReactNode} from 'react'
import type {Metadata} from 'next'

import Providers from "@/providers";

import "@/helpers/scss/_global.scss"


export const metadata: Metadata = {
  icons: {
    icon:'public/favicon.ico'
  },
  title: 'Quiz App',
  description: 'Test Task Created By Sergey',
}

interface IRootProps {
  children: ReactNode
}

export default function RootLayout({children}: IRootProps) {
  
  return (
    <html lang="en">
      <body>
         <Providers>
           {children}
         </Providers>
      </body>
    </html>
  )
}
