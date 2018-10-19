import React from 'react';
import { withTheme } from 'styled-components';
import {
	Image,
	Box,
	Flex,
	Container,
	Text,
	DropDownButton,
} from 'resin-components';

import balenaLogo from '../images/balena.svg';
import etcherLogo from '../images/etcher-logo.svg';
import GitHubLogo from '../images/github.svg'

import { Link, assets } from 'landr';
import styled from 'styled-components';

const Brand = () => (
	<Box>
		<Image style={{ height: '40px' }} src={etcherLogo} />
	</Box>
);

const MenuLink = styled(Link)`
	&& {
		color: #fff;
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
			color: #fff;
			&:before {
				opacity: 1;
			}
		}
	}
`;

const StickyHeader = styled(Box)`
	&& {
		position: sticky;
		top: 0;
		background: #2a506f;
		z-index: 2;
	}
`;

const MobileNavigation = styled(DropDownButton)`
	display: none;
	@media all and (max-width: ${props => props.theme.breakpoints[2]}em) {
		display: block;
	}
`;

const DesktopNavigation = styled(Flex)`
	display: none;
	@media all and (min-width: ${props => props.theme.breakpoints[2]}em) {
		display: block;
	}
`;

const Nav = withTheme((props) => {
	return (
		<StickyHeader py={2}>
			<Container>
				<Flex justify="space-between" align="center" p={2}>
					<Box>
						<Flex alignItems='flex-end' mb={1}>
							<Text.span fontSize={'12px'} color='#fff'>Open source project by</Text.span>
							<Link target to="https://balena.io">
								<Image ml={2} style={{ height: '20px' }} src={balenaLogo} />
							</Link>
						</Flex>
						<Link to="/">
							<Brand />
						</Link>
					</Box>

					<MobileNavigation joined primary>
						<Flex direction="column">
							{props.settings.navigationLinks.map((entry, i) => (
								<MenuLink my={2} key={i} to={entry.link} blank={entry.isBlank}>
									{entry.text}
								</MenuLink>
							))}
						</Flex>
					</MobileNavigation>

					<DesktopNavigation align="center">
						{props.settings.navigationLinks.map((entry, i) => (
							<MenuLink
								underline
								mx={3}
								key={i}
								to={entry.link}
								blank={entry.isBlank}
							>
								{entry.text}
							</MenuLink>
						))}
					</DesktopNavigation>
				</Flex>
			</Container>
		</StickyHeader>
	);
});

export default Nav;
