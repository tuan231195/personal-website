import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CodeBlock } from '~/components/markdown/CodeBlock';

const component = {
	pre: (props) => <div {...props} />,
	code: CodeBlock,
};
export const wrapRootElement = (element) => {
	return <MDXProvider components={component}>{element}</MDXProvider>;
};
