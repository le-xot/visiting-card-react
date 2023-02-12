import Head from 'next/head'
import Link from 'next/link'
import { Box, Text } from '@mantine/core'

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Home Page</title>
      </Head>
      <Text>Home</Text>
      <Link href="/about">Go to about</Link>
    </Box>
  )
}
