import React from 'react';
import { withTheme } from 'styled-components';
import get from 'lodash/get';

import { Button, Heading, Banner, Image, DropDownButton, Flex } from 'resin-components';
import { Link } from 'landr';
import background from '../images/red-background.svg';
import imagePic from '../images/etcherImg/image.svg'
import drivePic from '../images/etcherImg/drive.svg'
import flashPic from '../images/etcherImg/flash.svg'
import arrowPic from '../images/etcherImg/arrow.svg'

export default withTheme((props) => {
  const getter = key => get(props, key);
  const downloadAssets = [
    { key: 'Something', type: 'sometype', name: 'somename', browser_download_url: 'www.download.com' }
  ]

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
			<Flex width={1/2} direction='column' align='center' style={{ zIndex: 1 }}>
				<Heading.h1 align="center" my={3} style={{ fontSize: '72px'}}>
					{getter('settings.lead') ||
						getter('settings.description') ||
						getter('settings.name')}
				</Heading.h1>
				<Heading.h2 align="center" my={3} style={{ fontSize: '18px' }}>
					{getter('settings.description') ||
						getter('settings.name')}
				</Heading.h2>
				
			</Flex>
			<Flex style={{ backgroundColor: '#3F617D' }} width={1 / 2} py={27} px={75} mb='50px'>
        <Flex direction='column' justifyContent='space-between'>
          <Image src={imagePic} />
          <Heading.h5 color='#fff' mt={16}>Select image</Heading.h5>
        </Flex>
        <Flex direction='column' justifyContent='center' mx={25}>
          <Image src={arrowPic} />
        </Flex>
        <Flex direction='column' justifyContent='center' mx={25}>
          <Image src={drivePic} />
          <Heading.h5 color='#172c3d' mt={16}>Select drive</Heading.h5>
        </Flex>
        <Flex direction='column' justifyContent='center' mx={25}>
          <Image src={arrowPic} />
        </Flex>
        <Flex direction='column' justifyContent='center' mx={25}>
          <Image src={flashPic} />
          <Heading.h5 color='#172c3d' mt={16}>Flash!</Heading.h5>
        </Flex>
			</Flex>
      <Flex direction='row' width={1/2} justifyContent='center'>

        <DropDownButton mx={2} style={{ backgroundColor: '#a5de37' }} label='Download for MacOS'>
          <Link src='http://wp.pl'>Link1</Link>
          <Link src='http://wp.pl'>Link2</Link>
        </DropDownButton>

        <Button outline assets={downloadAssets} mx={10} assets={downloadAssets} width='210px' height='38px' style={{ color: 'white', borderRadius: '20px', border: 'solid 1px #a5de37' }}>
          <Heading.h6>Button2</Heading.h6>
        </Button>
        
      </Flex>
		</Banner>
	);
});
