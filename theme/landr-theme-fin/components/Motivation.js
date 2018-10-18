import React from 'react';
import { withTheme } from 'styled-components';
import { Flex, Box, Container, Text, Link, Heading } from 'resin-components';
import Button from '../components/Button';

function createMarkup(html) {
	return { __html: html };
}

export default withTheme(props => {
  console.log('Motivation: ',props)
	return (
		<Box px={3} mb={5}>
			<Container>
				<Heading.h5
					fontSize={14}
					mb={16}
					color={props.theme.colors.primary.main}
				>
					SOLUTION
				</Heading.h5>
				<Heading.h1 fontSize={34} mb={24}>
					Why {props.settings.title}?
				</Heading.h1>
				<Flex wrap mx={-20}>
					{props.settings.motivation.paragraphs.map((p, index) => (
						<Box px={20} width={[1, 1, 1 / 2]} key={index}>
							<Text.p
								fontSize={14}
								align="left"
								dangerouslySetInnerHTML={createMarkup(p)}
							/>
						</Box>
					))}
				</Flex>
        <Button round outline primary mt={16}>
          <Link blank href={props.settings.motivation.blogPost} mx={3} color={props.theme.colors.tertiary.main} >
            Read more on our blog
						</Link>
        </Button>
			</Container>
		</Box>
	);
});