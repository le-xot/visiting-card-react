import Link from 'next/link'
import { Button, Center, Container, Flex, Menu } from '@mantine/core'
import { IconChevronDown, IconHome } from '@tabler/icons'

export function Header() {
  return (
    <>
      <Container>
        <Flex
          p={'1rem'}
          mih={50}
          gap="sm"
          justify="center"
          align="flex-start"
          direction="row"
          wrap="nowrap"
        >
          <Link href={'/'}>
            <Button
              color="gray"
              variant="outline"
              radius="xs"
              size="lg"
              w="80px"
            >
              <IconHome w={'100%'} />
            </Button>
          </Link>

          <Menu
            color="gray"
            variant="outline"
            withArrow
            trigger="hover"
            openDelay={100}
            width={200}
          >
            <Menu.Target>
              <Button
                color="dark"
                radius="xs"
                size="lg"
                w="200px"
              >
                <Center>
                  Entertainment
                  <IconChevronDown></IconChevronDown>
                </Center>
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Steam profile</Menu.Item>
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
              color="gray"
              variant="outline"
              radius="xs"
              size="lg"
              w="200px"
            >
              Programming
            </Button>
          </Link>
          <Button
            color="gray"
            variant="outline"
            radius="xs"
            size="lg"
            w="200px"
          >
            Content
          </Button>
        </Flex>
      </Container>
    </>
  )
}
