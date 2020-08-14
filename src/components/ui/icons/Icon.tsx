import React, { HTMLAttributes } from 'react';

const iconsContext = require.context('~/icons/', true, /svg$/);

type Props = {
	name: SvgIcon;
	width?: number;
	height?: number;
	size?: number;
	color?: string;
} & HTMLAttributes<SVGElement>;

export type SvgIcon =
	| 'close'
	| 'chevron-down'
	| 'send'
	| 'mail'
	| 'phone'
	| 'document'
	| 'github'
	| 'facebook'
	| 'linkedin'
	| 'location'
	| 'link'
	| 'graduation-cap'
	| 'external'
	| 'home'
	| 'web'
	| 'bag'
	| 'calendar'
	| 'arrow-narrow-left'
	| 'arrow-left'
	| 'arrow-right'
	| 'arrow-narrow-right'
	| 'sad'
	| 'rss'
	| 'check';

export function Icon({
	name,
	className,
	width,
	height,
	size,
	color,
	...props
}: Props) {
	if (size) {
		width = height = size;
	}
	const icon = iconsContext(`./${name}.svg`).default;
	return (
		<svg
			{...props}
			viewBox={icon.viewBox}
			width={width}
			height={height}
			className={`${className} text-${color}`}
		>
			<use xlinkHref={`#${icon.id}`} />
		</svg>
	);
}
