import Head from 'next/head'
import { Fragment } from 'react'
import { Footer } from './footer'
import { Header } from './header'

export function Layout({ title, children }) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}
