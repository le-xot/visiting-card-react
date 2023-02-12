import { Box, Text } from '@mantine/core'
import Link from 'next/link'

export default function About() {
  return (
    <Box>
      <Text>About</Text>
      <Link href="/">Go to home</Link>
    </Box>
  )
}