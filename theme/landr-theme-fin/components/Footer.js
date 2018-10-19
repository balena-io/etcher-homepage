import React from 'react'
import { Flex, Box, Text, Image, Heading, Input, Button, Link as RLink } from 'resin-components'
import { Link } from 'landr'
import { withTheme } from 'styled-components'
import resinLogo from '../images/resin.svg'
import styled from 'styled-components'
import balena from '../images/balena-dark.svg'
import balenaEtcher from '../images/balena-etcher-dark.svg'

const MenuLink = styled(Link)`
	&& {
		color: #2a506f;
		position: relative;
		transition: color .1s ease-in;

		&:before {
			content: ${props => (props.underline ? ' ' : 'none')};
			position: absolute;
			left: 0;
			right: 0;
			bottom: -4px;
			opacity: 0;
			transition: opacity .1s ease-in;
		}
		&:hover {
			color: #2a506f;
			&:before {
				opacity: 1;
			}
		}
	}
`;

const ToSLink = styled(Link)`
  color: #527699;
  transition: color .1s ease-in;
  font-size: 13px;
  padding: 3px;
  &:hover {
    color: #527699;
  }
`;

export const Card = styled(Box)`
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 2px 11px 0 rgba(0, 0, 0, 0.05);
  text-align: center;
  align-items: center;
`;

const Footer = ({ repository, ...props }) => {
  return (
    <Flex direction='row' bg={props.theme.colors.quartenary.main} color={props.theme.colors.tertiary.main}>
      <Flex align="center" direction='column' width={2 / 3} py='60px'>
        <Flex>
          {props.settings.navigationLinks.map((entry, i) => (
            <MenuLink
              mx={3}
              key={i}
              to={entry.link}
            >
              {entry.text}
            </MenuLink>
          ))}
        </Flex>
        <Flex mt='60px' mb='60px' align='center' direction='row'>
          <Image src={balenaEtcher} />
          <Flex  align='center'>
            <Text.span fontSize='12px'>An open source project by</Text.span>
            <Link target to="https://balena.io">
              <Image src={balena} ml='5px'/>
            </Link>
          </Flex>
        </Flex>
        <Flex alignItems='center'>
          {props.settings.ToSLinks.map((entry, i) => (
            <ToSLink
              key={i}
              to={entry.link}
              color='#527699'
              fontSize='13px'
              p='3px'
            >
              {entry.text}
            </ToSLink>
          ))}
        </Flex>
      </Flex>
      <Flex width={1/3}>
        <Card style={{width: '275px', height: '189px', marginTop: '30px', marginBottom: '66px', marginRight: '200px', padding: '30px'}}>
          <Heading.h6>Subscribe to our mailing list</Heading.h6>
          <Input emphasized m={2} placeholder='Email' 
            style={{ backgroundColor: '#f6f6f6', color: '#979797',
            marginTop: '13px',
            border: 'transparent',
            align: 'center' }}/>
          <Button
            mt={20}
            mb={28}
            primary
            style={{
              borderRadius: '20px',
              width: '220px',
              height: '38px'
            }}>
            <RLink href='/etcher/subscribe' style={{ color: '#fff', fontSize: '14px' }}>Subscribe now </RLink>
          </Button>
          
        </Card>
      </Flex>
    </Flex>
  );
}

export default withTheme(Footer)
