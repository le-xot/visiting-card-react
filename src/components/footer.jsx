import { Avatar, Badge, Button, Container, Flex } from '@mantine/core'
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandSteam,
  IconBrandTelegram,
  IconBrandVk
} from '@tabler/icons'

export function Footer() {
  return (
    <Container
      miw={'100vw'}
      bg={'RGB(26,27,30)'}
    >
      <Flex
        align="center"
        h="inherit"
        justify="space-between"
      >
        <Flex
          justify="flex-start"
          align="center"
          gap="xs"
        >
          <Avatar src="./avatar.png"></Avatar>
          <Badge>le_xot</Badge>
        </Flex>
        <Flex
          p={'1rem'}
          m={0}
          bottom={0}
          right={0}
          gap="xs"
          justify="flex-end"
          align="flex-end"
          direction="row"
          wrap="wrap"
        >
          <Button
            variant="subtle"
            color="gray"
            w={60}
            component="a"
            href="https://t.me/le_xot"
            target="_blank"
          >
            <IconBrandTelegram w={'100%'} />
          </Button>
          <Button
            variant="subtle"
            color="gray"
            w={60}
            component="a"
            href="https://steamcommunity.com/id/le_xot/"
            target="_blank"
          >
            <IconBrandSteam w={'100%'} />
          </Button>
          <Button
            variant="subtle"
            color="gray"
            w={60}
            component="a"
            href="https://www.instagram.com/le_xot/"
            target="_blank"
          >
            <IconBrandInstagram size={'100%'} />
          </Button>
          <Button
            variant="subtle"
            color="gray"
            w={60}
            component="a"
            href="https://github.com/le-xot"
            target="_blank"
          >
            <IconBrandGithub size={'100%'} />
          </Button>
          <Button
            variant="subtle"
            color="gray"
            w={60}
            component="a"
            href="https://vk.com/le_xot"
            target="_blank"
          >
            <IconBrandVk size={'100%'} />
          </Button>
        </Flex>
      </Flex>
    </Container>
  )
}
