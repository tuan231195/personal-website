import React from 'react';

const iconsContext = require.context('~/icons/', true, /svg$/);

export type SvgIcon = 'close' | 'chevron-down' | 'send';

export function Icon({
	name,
	width,
	height,
	size,
	color,
	...props
}: {
	name: SvgIcon;
	width?: number;
	height?: number;
	size?: number;
	color?: string;
	className?: string;
}) {
	if (size) {
		width = height = size;
	}
	const icon = iconsContext(`./${name}.svg`).default;
	return (
		<svg
			viewBox={icon.viewBox}
			width={width}
			height={height}
			color={color}
			{...props}
		>
			<use xlinkHref={`#${icon.id}`} />
		</svg>
	);
}
