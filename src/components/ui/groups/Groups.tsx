import React, { HTMLAttributes } from 'react';
import { css } from 'twin.macro';
type Props = {
	size: number;
	children: any;
} & HTMLAttributes<HTMLDivElement>;

export function Groups({ size, children, ...props }: Props) {
	return (
		<div
			{...props}
			css={css`
				> *:not(last-child) {
					margin-right: ${size}em;
				}
			`}
		>
			{children}
		</div>
	);
}
