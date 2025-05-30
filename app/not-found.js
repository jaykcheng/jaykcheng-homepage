'use client'

import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

export default function NotFound() {
  return (
    <Container>
      <Heading as="h1">404: Not Found</Heading>
      <Text>The page you&apos;re looking for was not found or is under development </Text>
      <Divider my={6} />
      
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to Home</Button>
        </NextLink>
      </Box>
    </Container>
  )
} 