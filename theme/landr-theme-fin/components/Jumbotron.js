import React from 'react';
import styled, { withTheme } from 'styled-components';
import get from 'lodash/get';

import { Heading, Banner, Image, Flex, Link, Text } from 'resin-components';
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

      <Flex alignItems='center' justifyContent='center' style={{ backgroundColor: '#3F617D', padding: '50px 26px', margin: '50px auto' }} >
        <Flex direction='column' >
          <Image src={imagePic} />
          <Text bold color='#fff' mt={16} align='center' style={{size: '16px'}}>Select image</Text>
        </Flex>
        <Flex mx={25}>
          <Image src={arrowPic} />
        </Flex>
        <Flex direction='column' mx={25}>
          <Image src={drivePic} />
          <Text bold color='#325069' mt={16} align='center' style={{ size: '16px' }}>Select drive</Text>
        </Flex>
        <Flex mx={25}>
          <Image src={arrowPic} />
        </Flex>
        <Flex direction='column' mx={25}>
          <Image src={flashPic} />
          <Text bold color='#325069' mt={16} align='center' style={{ size: '16px' }}>Flash!</Text>
        </Flex>
			</Flex>
      
      <Flex direction='row' justifyContent='center' alignItems='center'>
        <DownloadButton 
          mx={2} 
          color='#172c3d' 
          background='#a5de37' 
          borderColor='#a5de37' 
          releases={props.settings.releases}
          width='210px'
          style={{
            fontFamily: 'Nunito',
            fontWeight: 'bold'
          }}
        >
        {
          props.settings.releases.map((asset, index) => (
            <Link href={asset.href} color='#2a506f'>{asset.text}</Link>
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
          width='210px'
          style={{
            fontFamily: 'Nunito',
            fontWeight: 'bold'
          }}
          
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
