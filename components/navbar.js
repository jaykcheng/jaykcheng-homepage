'use client'

import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link as ChakraLink,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  
  if (target === '_blank') {
    return (
      <ChakraLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        {...props}
      >
        {children}
      </ChakraLink>
    )
  }

  return (
    <NextLink href={href} passHref legacyBehavior>
      <ChakraLink
        as="span"
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        {...props}
      >
        {children}
      </ChakraLink>
    </NextLink>
  )
}

const Navbar = ({ path, ...props }) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{backdropFilter:'blur(10px'}}
      zIndex={1}
      {...props}
    >
      <Container 
        display="flex" 
        p={2} 
        maxW="container.md" 
        wrap="wrap" 
        align="center" 
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{base: 'column', md: 'row'}}
          display={{base: 'none', md: 'flex'}}
          width={{base: 'full', md: 'auto'}}
          alignItems="center"
          flexGrow={1}
          mt={{base: 4, nmd: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer" 
            path={path}
          >
            Resume
          </LinkItem>
          <LinkItem
            href="https://github.com/jaykcheng/jaykcheng-homepage"
            target="_blank"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
            <Menu>
              <MenuButton 
                as={IconButton} 
                icon={<HamburgerIcon />} 
                variant="outline" 
                aria-label="Options" 
              />
              <MenuList>
                <NextLink href="/" passHref legacyBehavior>
                  <MenuItem as={ChakraLink}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref legacyBehavior>
                  <MenuItem as={ChakraLink}>Works</MenuItem>
                </NextLink>
                <NextLink href="/resume.pdf" passHref legacyBehavior>
                  <MenuItem as={ChakraLink}>Resume</MenuItem>
                </NextLink>
                <MenuItem
                  as={ChakraLink}
                  href="https://github.com/jaykcheng/jaykcheng-homepage"
                  target="_blank"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar