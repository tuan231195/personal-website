import React, { HTMLAttributes } from 'react';
import { GridColumn } from '~/components/ui/containers/GridColumn';

type Props = {
	gap: number;
} & HTMLAttributes<HTMLDivElement>;

export function Grid({ gap, children, className }: Props) {
	return (
		<div className={`flex flex-wrap overflow-hidden min-w-full ${className}`}>
			{React.Children.map(children, (child: any, i) => {
				const { props } = child;
				return (
					<GridColumn key={i} className={`px-${gap} py-${gap}`} {...props} />
				);
			})}
		</div>
	);
}
