import React, { ChangeEvent, HTMLAttributes } from 'react';
import 'twin.macro';
import cn from 'classnames';
import { noop } from '~/utils/functions';

type Props = Omit<HTMLAttributes<HTMLTextAreaElement>, 'onChange'> & {
	label?: string;
	error?: string;
	name?: string;
	onChange?: (e: ChangeEvent<HTMLTextAreaElement>, { value: any }) => void;
};

export function TextAreaField({
	label,
	error,
	name,
	onChange = noop,
	...props
}: Props) {
	return (
		<div>
			{!!label && (
				<label
					tw='block text-sm font-bold mb-1'
					htmlFor={name}
					className={cn({
						'text-red-600': !!error,
						' text-gray-700': !error,
					})}
				>
					{label}
				</label>
			)}
			<textarea
				{...props}
				onChange={(e) => {
					onChange(e, { value: e.target.value });
				}}
				name={name}
				className={cn({
					'border-red-700': !!error,
					'text-red-600': !!error,
					'text-gray-700': !error,
					'placeholder-red-300': !!error,
				})}
				tw='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none'
			/>
			{!!error && (
				<span tw={'text-red-600 text-sm  font-bold mt-2'}>{error}</span>
			)}
		</div>
	);
}
