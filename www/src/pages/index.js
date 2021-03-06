import React from 'react'
import { graphql, Link as GLink } from 'gatsby'
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Link,
} from 'rebass'
import { NavLink, Pre, LiveCode } from '@rebass/gatsby-theme-docs'
import pkg from 'rebass/package.json'
import Logo from '../Logo'

const Container = props =>
  <Box
    {...props}
    px={4}
    mx='auto'
    css={{
      maxWidth: '1024px'
    }}
  />

const demo = `<Flex
  px={4}
  py={4}
  alignItems='center'>
  <Heading
    fontSize={[ 4, 5 ]}
    color='blue'>
    Live Demo
  </Heading>
  <Box mx='auto' />
  <Button>
    Beep
  </Button>
  <Button ml={2}>
    Boop
  </Button>
</Flex>`

const badges = (
  <Flex
    mt={3}
    flexWrap='wrap'
    alignItems='center'
    width={1}>
    <Link
      mr={2}
      py={1}
      href='https://github.com/rebassjs/rebass'>
      <Image
        src='https://flat.badgen.net/github/stars/rebassjs/rebass?color=33e'
      />
    </Link>
    <Link
      mr={2}
      py={1}
      href='https://travis-ci.org/rebassjs/rebass'>
      <Image
        src='https://flat.badgen.net/travis/rebassjs/rebass/master?color=33e'
      />
    </Link>
    <Link
      mr={2}
      py={1}
      href='https://npmjs.com/package/rebass'>
      <Image
        src='https://flat.badgen.net/npm/dw/rebass?color=33e'
      />
    </Link>
    <Link
      mr={2}
      py={1}
      href='https://codecov.io/github/rebassjs/rebass'>
      <Image
        src='https://flat.badgen.net/codecov/c/github/rebassjs/rebass?color=33e'
      />
    </Link>
  </Flex>
)

export default props => {
  const {
    description,
    install,
    features,
    quotes,
    github,
  } = props.data.site.siteMetadata

  return (
    <>
      <Flex
        px={3}
        py={[ 4, 5 ]}
        color='white'
        bg='black'
        alignItems='center'
        css={{
          minHeight: '90vh',
          WebkitFontSmoothing: 'antialiased'
        }}>
        <Container width={1}>
          <Logo
            text
            size={[ 256, null, 320, 384 ]}
          />
          <Text
            my={3}
            fontSize={3}
            fontWeight='bold'>
            {description}
          </Text>
          <Flex
            my={3}
            flexWrap='wrap'
            alignItems='center'>
            <Button
              as={GLink}
              to='/getting-started'
              variant='primary'
              children='Docs'
            />
            <Box mx={2} />
            <Button
              as='a'
              href='https://github.com/rebassjs/rebass'
              children='GitHub'
              variant='outline'
            />
            <Pre
              color='magenta'
              bg='transparent'
              mx={3}
              my={3}>
              {install}
            </Pre>
          </Flex>
          <Pre p={0} bg='transparent' color='inherit'>
            v{pkg.version}
          </Pre>
        </Container>
      </Flex>
      <Container>
        {badges}
        <Flex flexWrap='wrap' mx={-3} py={5}>
          {features.map(feat => (
            <Box
              key={feat}
              width={[ 1, null, 1/2 ]}
              px={3}
              my={2}
              fontSize={3}
              css={{
                fontWeight: 'bold'
              }}>
              {feat}
            </Box>
          ))}
        </Flex>
        <Flex flexWrap='wrap' mx={-3} py={5}>
          {quotes.map(({ text, name, href }) => (
            <Box
              key={name}
              width={[ 1, null, 1/2 ]}
              px={3}
              my={3}>
              <Text
                mb={2}
                fontSize={3}
                fontWeight='bold'>
                {text}
              </Text>
              <Link fontSize={1} href={href}>{name}</Link>
            </Box>
          ))}
        </Flex>
        <Box id='demo' py={4}>
          <LiveCode code={demo} />
        </Box>
        <Flex
          alignItems='center'
          py={6}>
          <Heading fontSize={5}>Get Started</Heading>
          <Box mx='auto' />
          <Button
            as={GLink}
            to='/getting-started'
            py={3}
            variant='primary'>
            Read the Docs
          </Button>
        </Flex>
      </Container>
      <Box as='footer' py={5} bg='lightgray'>
        <Container>
          <Flex mx={-3} flexWrap='wrap'>
            <Box width={[ 1/2, null, 1/4 ]}>
              <NavLink href='/getting-started'>Docs</NavLink>
              <NavLink href={github}>
                GitHub
              </NavLink>
              <NavLink href='https://rebass-v2.now.sh'>v2 Docs</NavLink>
            </Box>
            <Box width={[ 1/2, null, 1/4 ]}>
              <NavLink href='https://github.com/rebassjs/grid'>Rebass Grid</NavLink>
              <NavLink href='https://github.com/jxnblk/styled-system'>Styled System</NavLink>
              <NavLink href='https://jxnblk.com'>Made by Jxnblk</NavLink>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  )
}

export const query = graphql`
  query HomePage {
    site {
      siteMetadata {
        description
        install
        github
        features
        quotes {
          text
          name
          href
        }
      }
    }
  }
`
