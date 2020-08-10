import React, { HTMLAttributes } from 'react';
import 'twin.macro';
import Img from 'gatsby-image';

type Props = {
	children: any;
} & HTMLAttributes<HTMLDivElement>;

function CardImage({
	className = '',
	alt = '',
	src,
	fluid,
	...props
}: {
	className?: string;
	alt?: string;
	src?: string;
	fluid?: any;
} & HTMLAttributes<HTMLImageElement>) {
	if (fluid) {
		return (
			<Img {...(props as any)} fluid={fluid} className={className} alt={alt} />
		);
	}
	return (
		<img
			{...props}
			src={src}
			tw={'w-full object-cover'}
			className={className}
			alt={alt}
		/>
	);
}

export function Card({ children, ...props }: Props) {
	const cardChildren: any[] = React.Children.toArray(children);
	const cardImage = cardChildren.find(({ type }) => type === CardImage);
	const otherChildren = cardChildren.filter(({ type }) => type !== CardImage);
	return (
		<div {...props} tw='rounded bg-white overflow-hidden shadow-lg'>
			{cardImage}
			<div tw={'p-5 flex flex-col'}>{otherChildren}</div>
		</div>
	);
}

Card.Image = CardImage;
