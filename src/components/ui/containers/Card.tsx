import React, { HTMLAttributes } from 'react';
import 'twin.macro';

type Props = {
	children: any;
} & HTMLAttributes<HTMLDivElement>;

export function Card({ children, ...props }: Props) {
	return (
		<div {...props} tw='rounded bg-white p-4 overflow-hidden shadow-lg'>
			{children}
		</div>
	);
}
