import React, { HTMLAttributes } from 'react';
import 'twin.macro';

type Props = {
	color?: string;
	percent: number;
} & HTMLAttributes<HTMLDivElement>;

export function ProgressBar({
	color = 'success',
	percent,
	className,
	...props
}: Props) {
	return (
		<div
			{...props}
			tw={'shadow w-full text-xs text-white rounded overflow-hidden h-5'}
		>
			<div
				tw={'text-xs h-full py-1'}
				className={`${className} bg-${color}`}
				style={{ width: `${percent}%` }}
			/>
		</div>
	);
}
