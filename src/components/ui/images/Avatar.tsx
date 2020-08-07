import React, { HTMLAttributes } from 'react';

type Props = { size: number; src: string; rounded?: boolean } & HTMLAttributes<
	HTMLImageElement
>;

export function Avatar({ size, src, rounded = true, ...props }: Props) {
	return (
		<img
			{...props}
			src={src}
			alt={'avatar'}
			className={`h-${size} w-${size} ${
				rounded ? 'rounded-full' : ''
			} shadow-xs`}
		/>
	);
}
