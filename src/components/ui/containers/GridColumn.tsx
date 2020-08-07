import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

type Props = {
	sm?: number;
	md?: number;
	lg?: number;
	all?: number;
} & HTMLAttributes<HTMLDivElement>;

export function GridColumn({ sm, md, lg, all, className, ...props }: Props) {
	md = md || all;
	lg = lg || all;
	sm = sm || all;

	return (
		<div
			{...props}
			className={cn(className, {
				[`md:w-${getPercentage(md)}`]: !!md,
				[`lg:w-${getPercentage(lg)}`]: !!lg,
				[`w-${getPercentage(sm)}`]: !!sm,
			})}
		/>
	);
}

function getPercentage(size?: number) {
	if (!size) {
		return '';
	}
	if (size === 12) {
		return 'full';
	}
	return `${size}/12`;
}
