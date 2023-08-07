import Link from 'next/link'
import { Button, Center, Container, Flex, Menu } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons'

export function Header() {
  return (
      <Container
        bg={'RGB(26,27,30)'}
        miw={'100%'}
      >
        <Flex
          p={'1rem'}
          gap="sm"
          justify="center"
          align="flex-start"
        >
          <Link href={'/'}>
            <Button
              variant="subtle"
              color="gray"
              radius="xs"
            >
              About me
            </Button>
          </Link>

          <Menu
            variant="subtle"
            color="gray"
            withArrow
            trigger="hover"
            openDelay={100}
            width={200}
          >
            <Menu.Target>
              <Button
                color="dark"
                radius="xs"
              >
                <Center>
                  Entertainment
                  <IconChevronDown size={18}></IconChevronDown>
                </Center>
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                component="a"
                href={'/games-blog'}
              >
                Games blog
              </Menu.Item>
              <Menu.Item
                component="a"
                href={'/movie-blog'}
              >
                Movie blog
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Link href={'/programming'}>
            <Button
              variant="subtle"
              color="gray"
              radius="xs"
            >
              Programming
            </Button>
          </Link>
          <Link href={'/content'}>
            <Button
              variant="subtle"
              color="gray"
              radius="xs"
            >
              Content
            </Button>
          </Link>
        </Flex>
      </Container>
  )
}
