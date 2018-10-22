import React from 'react';
import { Flex, Container, Text, } from 'resin-components';
import { Link } from 'landr';
import { withTheme } from 'styled-components';

const Footer = () => {
	return (
		<Flex pb={5} px={2}>
			<Container>
				<Flex justify="center" my={4}>
					<Text.span fontSize={3}>
						Need help? Check out the{' '}
						<Link blank to="https://forums.balena.io/c/etcher">
							community forums
						</Link>
					</Text.span>
				</Flex>
			</Container>
		</Flex>
	);
};

export default withTheme(Footer);
