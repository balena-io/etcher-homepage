import React from 'react'
import { Heading, Container, Flex, Box, Image, Text } from 'resin-components'
import { assets } from 'landr'

const ImageBox = Flex.extend`
  min-height: 100px;
`

export default props => {
  return (
    <Flex py={5}>
      <Container>
        <Heading.h2 mb={5} align="center">
          Testimonials
        </Heading.h2>
        <Flex wrap mb={5}>
          {props.items.map(feature => {
            return (
              <Box align="center" px={2} width={[1, 1 / 3]}>
                <ImageBox align="center" justify="center">
                  <Box>
                    <Image
                      m="auto"
                      mb={2}
                      h={['100px', '70px']}
                      w={['50px', '70px']}
                      src={assets[`${feature.image}`]}
                    />
                  </Box>
                </ImageBox>
                <Heading.h4 mb={2} align="center">
                  {feature.title}
                </Heading.h4>
                <Text.p
                  align="center"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                />
              </Box>
            )
          })}
        </Flex>
      </Container>
    </Flex>
  )
}
