import React, { HTMLAttributes } from 'react';
import { css } from 'twin.macro';
import { Icon, SvgIcon } from '~/components/ui/icons/Icon';

type Props = {
	size?: 'sm' | 'lg';
	bgColor?: string;
	rounded?: boolean;
	textColor?: string;
	children: any;
	icon?: SvgIcon;
} & HTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({
	size = 'sm',
	bgColor = 'cta',
	textColor = 'white',
	children,
	rounded = true,
	icon,
	className,
	...props
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
			{...props}
			className={`${bgClass} text-${textColor} ${sizeClass} focus:outline-none font-semibold flex items-center py-2 px-4 ${
				rounded ? 'rounded' : ''
			} ${className}`}
			css={css`
				&:hover,
				&:active {
					transform: translateY(1px);
				}
			`}
		>
			{!!icon && (
				<Icon
					size={size === 'lg' ? 16 : 12}
					className={'mr-2'}
					name={icon}
					color={'white'}
				/>
			)}
			{children}
		</button>
	);
};
