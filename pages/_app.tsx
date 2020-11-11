import * as React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Fabric } from '@fluentui/react'

import 'modern-normalize'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fabric>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js + Fluent UI Example</title>
      </Head>
      <Component {...pageProps} />
    </Fabric>
  )
}
