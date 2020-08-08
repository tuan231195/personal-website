import React, { useMemo, useRef } from 'react';
import Portal from './Portal';
import { useBoundingClientRect } from '~/utils/hooks';

export function Popover({
	parentRef,
	children,
	offset = { left: '0', top: '0' },
}: {
	offset?: { left: string; top: string };
	children: any;
	parentRef: any;
}) {
	const childRef = useRef<any>();
	if (!parentRef?.current) {
		return null;
	}
	const parentRect = useBoundingClientRect(parentRef);
	const childRect = useBoundingClientRect(childRef);
	console.log(childRect);
	const styles = useMemo(() => {
		const translateX = toPx(parentRect.width, childRect.width, offset.left);
		const translateY = toPx(parentRect.height, childRect.height, offset.top);
		return {
			left: window.scrollX + parentRect.x,
			top: window.scrollY + parentRect.y,
			transform: `translate(${translateX}px, ${translateY}px)`,
		};
	}, [parentRect]);

	return (
		<Portal>
			<div className={'absolute box-content'} style={styles} ref={childRef}>
				{children}
			</div>
		</Portal>
	);
}

function toPx(parentDimension, childDimension, spec: string) {
	return eval(
		spec.replace(/(-?\d+)([cp])?/g, (_match, number, unit) => {
			number = Number(number);
			if (unit === 'p') {
				return (parentDimension * (number / 100)).toString();
			}
			if (unit === 'c') {
				return (childDimension * (number / 100)).toString();
			}
			return number.toString();
		})
	);
}
