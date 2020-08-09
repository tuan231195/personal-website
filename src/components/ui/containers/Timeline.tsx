import React from 'react';
import { Icon } from '~/components/ui/icons/Icon';

export function Timeline({ children }) {
	return (
		<div className='relative m-8'>
			<div className='border-r-2 border-green-500 absolute h-full top-0 -mx-px' />
			<ul className='list-none m-0 p-0'>
				{React.Children.map(children, ({ props: { className, ...props } }) => {
					return (
						<li className='mb-2 relative'>
							<div
								className='bg-green-500 absolute top-0 text-white rounded-full'
								style={{ transform: 'translateX(-50%) translateY(8px)' }}
							>
								<Icon name={'check'} size={15} />
							</div>
							<div {...props} className={`${className} pl-6`} />
						</li>
					);
				})}
			</ul>
		</div>
	);
}
