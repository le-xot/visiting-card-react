import Head from 'next/head'
import { Fragment } from 'react'
import { Stack } from '@mantine/core'
import { Body } from './body'
import { Footer } from './footer'
import { Header } from './header'

export function Layout({ title, children }) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Stack
        bg={'dark'}
        h="100vh"
        align="center"
        justify="space-between"
        spacing="xs"
      >
        <Header />
        <Body>{children}</Body>
        <Footer />
      </Stack>
    </Fragment>
  )
}
