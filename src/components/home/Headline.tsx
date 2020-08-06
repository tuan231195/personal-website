import React from 'react';
import tw, { styled } from 'twin.macro';
import { Button } from '~/components/ui/controls/Button';

const Root = styled.header`
	${tw`bg-gray-200 py-5`}
`;

const Container = styled.div`
	${tw`container flex justify-between items-center`}
`;

export default function Headline() {
	return (
		<Root>
			<Container>
				<span>Here</span>
				<Button icon={'send'}>CONTACT ME</Button>
			</Container>
		</Root>
	);
}
