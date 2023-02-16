import { Container, ScrollArea } from '@mantine/core'

export function Body({ children }) {
  return (
    <ScrollArea>
      <Container maw={'100vw'}>{children}</Container>
    </ScrollArea>
  )
}
