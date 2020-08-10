import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { styled } from 'twin.macro';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github';

export const Pre = styled.pre`
	text-align: left;
	margin: 1em 0;
	padding: 0.8em 0.5em;
	overflow: auto;
	font-size: 16px;
	font-family: sudo;

	& .token-line {
		line-height: 1.3em;
		height: 1.3em;
	}
`;

export const Line = styled.div`
	display: table-row;
`;

export const LineNo = styled.span`
	display: table-cell;
	text-align: right;
	padding-right: 1em;
	user-select: none;
	opacity: 0.5;
`;

export const LineContent = styled.span`
	display: table-cell;
`;

const component = {
	pre: (props) => {
		const className = props.children.props.className || '';
		const matches = className.match(/language-(?<lang>.*)/);
		return (
			<Highlight
				{...defaultProps}
				code={props.children.props.children}
				language={
					matches && matches.groups && matches.groups.lang
						? matches.groups.lang
						: ''
				}
				theme={theme}
			>
				{({ className, style, tokens, getLineProps, getTokenProps }) => (
					<Pre className={className} style={style}>
						{tokens.map((line, i) => {
							if (i === tokens.length - 1 && line[0] && line[0].empty) {
								return null;
							}
							return (
								<Line key={i} {...getLineProps({ line, key: i })}>
									<LineNo>{i + 1}</LineNo>
									<LineContent>
										{line.map((token, key) => (
											<span key={key} {...getTokenProps({ token, key })} />
										))}
									</LineContent>
								</Line>
							);
						})}
					</Pre>
				)}
			</Highlight>
		);
	},
};
export const wrapRootElement = (element) => {
	return <MDXProvider components={component}>{element}</MDXProvider>;
};
