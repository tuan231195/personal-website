import React from 'react';
import tw, { styled } from 'twin.macro';

const HeadlineContainer = styled.div`
	${tw`flex justify-between`}
`;
export default function Headline() {
	return (
		<HeadlineContainer>
			<span>Here</span>
			<div>Another one</div>
		</HeadlineContainer>
	);
}
