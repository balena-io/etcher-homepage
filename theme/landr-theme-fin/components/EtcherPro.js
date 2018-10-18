import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Container, Heading, Flex, Text, Image } from 'resin-components';
import check from '../images/green-check.svg'


export default withTheme(props => {
  return (
    <Container>
      <Flex width={5/12} direction='column'>
        <Heading.h1 fontSize={[20, 25, 30, 34]} mb={40}>The Etcher you love, with the perfect hardware</Heading.h1>
        <Text>
          Etcher Pro is a stand-alone hardware device that allows you to write to multiple cards or usb disks at once, at extreme speeds.
        </Text>
        <Flex direction='row'>
          <Flex direction='row' alignItems='baseline'>
            <Image src={check} />
            <Heading.h6 mx={15}>Multi-Write</Heading.h6>
          </Flex>
          <Flex direction='row'>
            <Image src={check} />
            <Heading.h6 mx={15}>Insane Speeds</Heading.h6>
          </Flex>
          <Flex direction='row'>
            <Image src={check} />
            <Heading.h6 mx={15}>Modular Expansion</Heading.h6>
          </Flex>
        </Flex>
      </Flex>

    </Container>
  );
});
