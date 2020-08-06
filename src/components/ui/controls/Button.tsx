import React from 'react';
import 'twin.macro';
import { Icon, SvgIcon } from '~/components/ui/icons/Icon';

type Props = {
	size?: 'sm' | 'lg';
	bgColor?: string;
	rounded?: boolean;
	textColor?: string;
	children: any;
	icon?: SvgIcon;
};
export const Button: React.FC<Props> = ({
	size = 'sm',
	bgColor = 'cta',
	textColor = 'white',
	children,
	rounded = true,
	icon,
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
			className={`${bgClass} text-${textColor} ${sizeClass} font-semibold flex items-center py-2 px-4 ${
				rounded ? 'rounded' : ''
			}`}
		>
			{!!icon && (
				<Icon size={12} className={'mr-2'} name={icon} color={'white'} />
			)}
			{children}
		</button>
	);
};
