import NextLink from 'next/link'
import { 
  Container, 
  Box, 
  Heading, 
  Image, 
  useColorModeValue, 
  Button,
  List,
  Link,
  ListItem,
  Icon,
  chakra
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import {
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box 
          borderRadius="lg" 
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
          p={3} 
          mb={6} 
          align="center"
        >
      Hello, I&apos;m an aspiring front-end/full-stack developer based in Brooklyn, New York!
        </Box>

        <Box display={{md:'flex'}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jia Hou
            </Heading>
            <p>( Front-End / Full-Stack / Software ) Developer</p>
          </Box>
          <Box 
            flexShrink={0} 
            mt={{base: 4, md: 0}} 
            ml={{md: 6}} 
            align="center"
          >
            <Box
              borderColor="whiteAlpha.800" 
              borderWidth={2} 
              borderStyle="solid" 
              w="100px"
              h="100px" 
              display="inline-block" 
              borderRadius="full"
              overflow="hidden" 
            >
              <ProfileImage
                src="/images/jia.jpg"
                alt="Image of Jia"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <Paragraph>Jia is a recent graduate at the University at Buffalo and aspires to 
          become a web developer/software engineer. He has a passion for building software, 
          websites and solving problems. Offline, he spends his time playing volleyball and snowboarding. 
           In his senior year he focused on web 
          development courses and created{' '} 
            <NextLink href="/works/study-seeker">
              <Link>Study Seeker</Link>
            </NextLink> 
          {' '}in Applied Human Computer Interaction and Interface Design (CSE370) and 
          {' '}
            <NextLink href="/works/mosaic-maker">
              <Link>Mosaic Maker</Link>
            </NextLink>
          {' '}in Software Engineering (CSE442). These projects inspired 
          him to pursue a career in web/software development. 
          He is currently working as a Full-Stack Developer Intern at 
          <Link href="https://lightpathfiber.com/" target="_blank"> Lightpath</Link> and 
          working on his AWS certification.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Timeline
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Guangdong (广东), China.
          </BioSection>
          <BioSection>
            <BioYear>2003</BioYear>
            Immigrated to America.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Graduated from Brooklyn Technical High School after majoring in Architecture.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed Bachelors program for Computer Science in the Undergraduate School of Engineering and Applied Sciences 
            at the University at Buffalo.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Began work as an Full-Stack Developer Intern at Lightpath
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Began contract work as a Software Engineer at Lightpath via TEKsystems
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Volleyball, Bouldering, Weightlifting, Snowboarding, Music, Long walks on the beach 
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/jiahhou" target="_blank">
                <Button 
                  variant="ghost" 
                  colorScheme="teal" 
                  leftIcon={<Icon as={IoLogoGithub} 
                  />}>
                    @jiahhou
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://linkedin.com/in/jiahhou" target="_blank">
                <Button 
                  variant="ghost" 
                  colorScheme="teal" 
                  leftIcon={<Icon as={IoLogoLinkedin} 
                  />}>
                    @jiahhou
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'