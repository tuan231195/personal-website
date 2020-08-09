import React from 'react';
import tw, { styled } from 'twin.macro';

const Root = styled.nav`
	${tw`bg-black p-4 flex justify-center items-center text-white`}
`;

export function Footer({ name }) {
	return <Root>Designed and developed by {name} @ 2020</Root>;
}
