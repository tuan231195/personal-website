import React from 'react';
import 'twin.macro';

export function Badge({ color, children, className = '', ...props }) {
	return (
		<span
			{...props}
			tw='flex text-xs justify-center items-center py-1 px-2 bg-white rounded-full border'
			className={`${className} border-${color}-300 bg-${color}-100 text-${color}-700`}
		>
			<div tw='leading-none flex-initial'>{children}</div>
		</span>
	);
}
