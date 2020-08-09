import React, { HTMLAttributes } from 'react';

type Props = { size: number; src: string; circular?: boolean } & HTMLAttributes<
	HTMLImageElement
>;

export function Avatar({ size, src, circular = true, ...props }: Props) {
	return (
		<img
			{...props}
			src={src}
			alt={'avatar'}
			className={`h-${size} w-${size} ${
				circular ? 'rounded-full' : 'rounded'
			} shadow-xs`}
		/>
	);
}
