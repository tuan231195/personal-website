import tw, { styled } from 'twin.macro';

export const ErrorHeader = styled.h2`
	${tw`text-2xl font-semibold uppercase mb-8 mt-1`}
`;

export const ErrorStatusText = styled.h1<{ color?: string }>`
	${tw`text-orange-500 uppercase`}
	font-size: 145px;
`;
