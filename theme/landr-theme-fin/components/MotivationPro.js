import React from 'react';
import { withTheme } from 'styled-components';
import { Flex, Box, Container, Text, Heading } from 'resin-components';
import Button from '../components/Button';

function createMarkup(html) {
  return { __html: html };
}

export default withTheme(props => {
  console.log('MotivationPro: ', props)
  return (
    <Box style={{ marginTop: '120px' }}>
    <Container>
        <Heading.h5
          fontSize={14}
          mb={16}
          color={props.theme.colors.primary.main}
        >
          SOLUTION
				</Heading.h5>
        <Flex wrap width={1/2}>
          <Heading.h1 fontSize={34} mb={24}>
            Write to multiple cards or usb disks at once, at extreme speeds.
          </Heading.h1>
        </Flex>
        <Flex wrap mx={-20}>
          {props.settings.motivationPro.paragraphs.map((p, index) => (
            <Box px={20} width={[1, 1, 1 / 2]} key={index}>
              <Text.p
                fontSize={14}
                align="left"
                dangerouslySetInnerHTML={createMarkup(p)}
              />
            </Box>
          ))}
        </Flex>
      </Container>
      </Box>
  );
});