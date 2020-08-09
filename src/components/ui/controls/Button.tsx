import React, { HTMLAttributes } from 'react';
import { css } from 'twin.macro';
import { Icon, SvgIcon } from '~/components/ui/icons/Icon';

type Props = {
	size?: 'sm' | 'lg';
	bgColor?: string;
	disabled?: boolean;
	type?: any;
	rounded?: boolean;
	textColor?: string;
	children: any;
	icon?: SvgIcon;
} & HTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({
	size = 'sm',
	type,
	disabled,
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
			disabled={disabled}
			type={type}
			css={css`
				${!disabled &&
				`
					&:hover,
					&:active {
						transform: translateY(1px);
					}
				`}

				${disabled &&
				`
					cursor: not-allowed;
					opacity: 0.45;
				`}
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
