import { Center, Text } from '@mantine/core'
import { Layout } from '../components/layout'

export default function Home() {
  return (
    <Layout title="Homepage">
      <Center>
        <Text
          size={'lg'}
          p={'100px'}
        >
          This is Home Page
        </Text>
      </Center>
    </Layout>
  )
}
