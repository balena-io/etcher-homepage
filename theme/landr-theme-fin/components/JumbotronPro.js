import React from 'react';
import styled, { withTheme } from 'styled-components';
import get from 'lodash/get';
import { assets } from 'landr';

import { Heading, Banner, Image, Flex, Link, Text, Input, Box, Button } from 'resin-components';
import background from '../images/bgPro.svg';
import etcherPro from '../images/etcherPro/full.png'
import etcherProLogo from '../images/balena-etcher-pro.svg'


export const Card = styled(Box)`
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 11px 0 rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const EtcherProComponent = styled(Flex)`
  background-image: url(${etcherPro});
  background-repeat: no-repeat;
  background-position: right;
  background-size: auto;
`

export default withTheme((props) => {
  const getter = key => get(props, key);
  const imageSet = `${assets[`${etcherPro.icon}`]},
		${assets[`${etcherPro.icon}`]} 1x,
		${assets[`${etcherPro.icon}@2x`]} 2x,
		${assets[`${etcherPro.icon}@3x`]} 3x`;

  return (
    <Banner
      py={3}
      backgroundImage={background}
      color="white"
      style={{
        minHeight: 'auto',
        height: 640,
        position: 'relative',
      }}
    >
      <Flex justifyContent='center' width={2/3}>
        <Heading.h1 align="center" my={3} style={{ fontSize: '68px' }}>
          {getter('settings.proLead')}
        </Heading.h1>
      </Flex>

      <Flex style={{justifyContent: 'space-evenly', alignItems: 'center', marginTop: '68px'}}>

        <Image src={etcherPro} imgSet={imageSet} width={[1, 1, 1, 1 / 2]} style={{ height: '100%'}}/>

        <Flex width={1 / 4} direction='column'>
          <Box style={{
            fontSize: '14px',
            width: '120px',
            height: '29px',
            borderTopLeftRadius: '14px',
            borderTopRightRadius: '14px',
            backgroundColor: '#2a506f',
            color: '#c8f178',
            textAlign: 'center',
            marginLeft: '25px',
            padding: '6px'
          }}>
            Coming soon
        </Box>
          <Box width={2 / 3}>
            <Card style={{ width: '386px', height: '320px'}} p={50} align='center'>
              <Image src={etcherProLogo} />
              <Text mt={30} align='center' size='14px' color='#2a506f'>Keep up with our progress and sign up on our mailing list.</Text>
              <Input emphasized m={2} placeholder='Email'
                style={{
                  backgroundColor: '#f6f6f6', color: '#979797',
                  marginTop: '13px',
                  border: 'transparent',
                  align: 'center'
                }} />
              <Button
                mt={20}
                mb={28}
                primary
                style={{
                  borderRadius: '20px',
                  width: '220px',
                  height: '38px'
                }}>
                <Link href='/etcher/subscribe' style={{ color: '#fff', fontSize: '14px' }}>Subscribe now </Link>
              </Button>
            </Card>
          </Box>
        </Flex>
      </Flex>

    </Banner>
  );
});
