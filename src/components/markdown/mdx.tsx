import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CodeBlock } from '~/components/markdown/CodeBlock';
import 'twin.macro';

const component = {
	pre: (props) => <div {...props} />,
	code: CodeBlock,
	inlineCode: (props) => (
		<span tw={'bg-inline-code p-1 rounded-sm'} {...props} />
	),
};
export const wrapRootElement = (element) => {
	return <MDXProvider components={component}>{element}</MDXProvider>;
};
