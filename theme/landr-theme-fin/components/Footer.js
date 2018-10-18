import React from 'react'
import { Flex, Box, Text, Image } from 'resin-components'
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

const Footer = ({ repository, ...props }) => {
  return (
    <Flex py='60px' bg={props.theme.colors.quartenary.main} color={props.theme.colors.tertiary.main} align="center" direction='column'>
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
      <Flex align="center" mt='60px' mb='60px' alignItems='center' direction='row'>
        <Image src={balenaEtcher} />
        <Flex align="center" alignItems='flex-end'>
          <Text.span fontSize='12px'>An open source project by</Text.span>
          <Link target to="https://balena.io">
            <Image src={balena} ml='6px'/>
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
  );
}

export default withTheme(Footer)
