import { Center, Text } from '@mantine/core'
import { Layout } from '../components/layout'

export default function MovieBlog() {
  return (
    <Layout title="Movie blog">
      <Center>
        <Text
          size={'lg'}
          p={'100px'}
        >
          This is Movie blog
        </Text>
      </Center>
    </Layout>
  )
}
