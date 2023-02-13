import { Button, Container, Flex } from '@mantine/core'
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandSteam,
  IconBrandTelegram,
  IconBrandVk
} from '@tabler/icons'

export function Footer() {
  return (
    <Container>
      <Flex
        p={'1rem'}
        bottom={0}
        right={0}
        gap="xs"
        pos={'fixed'}
        justify="flex-end"
        align="flex-end"
        direction="row"
        wrap="wrap"
      >
        <Button
          w={60}
          component="a"
          href="https://t.me/le_xot"
          target="_blank"
        >
          <IconBrandTelegram w={'100%'} />
        </Button>
        <Button
          w={60}
          component="a"
          href="https://steamcommunity.com/id/le_xot/"
          target="_blank"
        >
          <IconBrandSteam w={'100%'} />
        </Button>
        <Button
          w={60}
          component="a"
          href="https://www.instagram.com/le_xot/"
          target="_blank"
        >
          <IconBrandInstagram size={'100%'} />
        </Button>
        <Button
          w={60}
          component="a"
          href="https://github.com/le-xot"
          target="_blank"
        >
          <IconBrandGithub size={'100%'} />
        </Button>
        <Button
          w={60}
          component="a"
          href="https://vk.com/le_xot"
          target="_blank"
        >
          <IconBrandVk size={'100%'} />
        </Button>
      </Flex>
    </Container>
  )
}
