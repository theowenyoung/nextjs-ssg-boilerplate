import React from 'react'
import Head from 'next/head'
import I18n from '../lib/i18n'
import {contentLanguageMap } from '../lib/i18n'

export default function MyApp({ Component, pageProps }) {
  return (
    <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
      <Head>
        <meta
          httpEquiv="content-language"
          content={contentLanguageMap[pageProps.lng]}
        />
      </Head>
      <Component {...pageProps} />
    </I18n>
  )
}
