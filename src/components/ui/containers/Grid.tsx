import React, { HTMLAttributes } from 'react';
import { GridColumn } from '~/components/ui/containers/GridColumn';
import cn from 'classnames';

type Props = {
	gap?: number;
	smGap?: number;
	mdGap?: number;
	lgGap?: number;
	collapse?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export function Grid({
	gap,
	smGap,
	mdGap,
	lgGap,
	collapse,
	children,
	className,
}: Props) {
	smGap = smGap || gap;
	mdGap = smGap || gap;
	lgGap = smGap || gap;

	return (
		<div className={`flex flex-wrap overflow-hidden min-w-full ${className}`}>
			{React.Children.map(children, (child: any, i) => {
				const {
					props: { className, ...props },
				} = child;
				return (
					<GridColumn
						key={i}
						className={cn(className, ` sm:py-${smGap}`, {
							'px-0': collapse,
							'py-0': collapse,
							[`px-${gap}`]: gap && !collapse,
							[`py-${gap}`]: gap && !collapse,
							[`sm:px-${smGap}`]: !!smGap,
							[`sm:py-${smGap}`]: !!smGap,
							[`md:px-${mdGap}`]: !!mdGap,
							[`md:py-${mdGap}`]: !!mdGap,
							[`lg:px-${lgGap}`]: !!lgGap,
							[`lg:py-${lgGap}`]: !!lgGap,
						})}
						{...props}
					/>
				);
			})}
		</div>
	);
}
