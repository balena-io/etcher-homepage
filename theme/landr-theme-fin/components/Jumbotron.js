import React from 'react';
import { withTheme } from 'styled-components';
import get from 'lodash/get';

import { Link, Heading, Banner, Image, Flex } from 'resin-components';
import DownloadButton from './DownloadButton'
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
			<Flex width={1/2} direction='column' justifyContent='center' style={{ zIndex: 1 }}>
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

			<Flex style={{ backgroundColor: '#3F617D' }} width={1 / 2} py={27} my={50} ml={50} mr={49} justifyContent='center'>
        <Flex direction='column' >
          <Image src={imagePic} />
          <Heading.h5 color='#fff' mt={16} align='center'>Select image</Heading.h5>
        </Flex>
        <Flex mx={25}>
          <Image src={arrowPic} />
        </Flex>
        <Flex direction='column' mx={25}>
          <Image src={drivePic} />
          <Heading.h5 color='#325069' mt={16} align='center'>Select drive</Heading.h5>
        </Flex>
        <Flex mx={25}>
          <Image src={arrowPic} />
        </Flex>
        <Flex direction='column' mx={25}>
          <Image src={flashPic} />
          <Heading.h5 color='#325069' mt={16} align='center'>Flash!</Heading.h5>
        </Flex>
			</Flex>
      
      <Flex direction='row' width={1/2} justifyContent='center'>

        <DownloadButton 
          mx={2} 
          color='#172c3d' 
          background='#a5de37' 
          borderColor='#a5de37' 
          releases={props.settings.releases}
        >
        {
          props.settings.releases.map((asset, index) => (
            <Link href={asset.href} color='#2a506f'>{asset.href}</Link>
          ))   
        }
        </DownloadButton>

        <DownloadButton 
          mx={2} 
          color='white' 
          background='transparent' 
          borderColor='#a5de37' 
          label='Install experimental CLI'
          releases={props.settings.cliDownloads}
          whiteCaretStyle
        >
          {
            props.settings.cliDownloads.map((asset) => (
              <Link href={asset.href} color='#2a506f' blank>{asset.text}</Link>
            ))
          }
        </DownloadButton>
        
      </Flex>
		</Banner>
	);
});
