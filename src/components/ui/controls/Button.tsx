import React from 'react';
import 'twin.macro';

type Props = {
	size?: 'sm' | 'lg';
	bgColor?: string;
	rounded?: boolean;
	textColor?: string;
	children: any;
};
export const Button: React.FC<Props> = ({
	size = 'sm',
	bgColor = 'cta',
	textColor = 'white',
	children,
	rounded = true,
}) => {
	const sizeClass =
		{
			sm: 'text-xs',
			lg: 'text-xl',
		}[size] || '';

	let bgClass = '';
	if (bgColor) {
		bgClass = `bg-${bgColor}`;
	}

	return (
		<button
			className={`${bgClass} text-${textColor} ${sizeClass} font-semibold py-2 px-4 ${
				rounded ? 'rounded' : ''
			}`}
		>
			{children}
		</button>
	);
};
