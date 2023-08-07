import {
  Badge,
  Button,
  Card,
  Container,
  Flex,
  Group,
  Image,
  Text
} from '@mantine/core'
import { Layout } from '../components/layout'

export default function Home() {
  return (
    <Layout title="Homepage" mah={"100vw"}>
      <Container>
        <Card
          shadow="sm"
          p="lg"
          radius="md"
          withBorder
          mih={'80vh'}
          miw={'50vw'}
        >
          <Flex
            p={'1rem'}
            gap="sm"
            justify="flex-start"
            align="center"
            direction="row"
            wrap="nowrap"
          >
            <Image
              src=".\avatar.png"
              height={255}
              width={255}
            ></Image>
            <Flex justify={'flex-start'}>
              <Text
                size={32}
                weight={700}
              >
                Ого, ебать, самая главная страница. И да, она стартовая
              </Text>
            </Flex>
          </Flex>
          <Text>Да, ебать, главная страница</Text>
        </Card>
      </Container>
    </Layout>
  )
}
