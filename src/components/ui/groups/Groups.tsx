import React, { HTMLAttributes } from 'react';
import { css } from 'twin.macro';
import theme from '~/theme';
type Props = {
	size: number;
	children: any;
	orientation?: 'vertical' | 'horizontal';
} & HTMLAttributes<HTMLDivElement>;

export function Groups({
	size,
	orientation = 'horizontal',
	children,
	...props
}: Props) {
	const resolvedSize = theme.spacing[size];
	const horizontal = orientation === 'horizontal';
	return (
		<div
			{...props}
			css={css`
				display: flex;
				align-items: ${horizontal ? 'center' : 'stretch'};
				flex-direction: ${horizontal ? 'row' : 'column'};
				
				> *:not(last-child) {
					margin-${horizontal ? 'right' : 'bottom'}: ${resolvedSize};
				}
			`}
		>
			{children}
		</div>
	);
}
