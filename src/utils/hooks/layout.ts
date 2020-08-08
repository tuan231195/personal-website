import { useEffect, useState } from 'react';

export function useMeasure(node, onMeasure) {
	const ResizeObserver = (window as any).ResizeObserver;
	if (ResizeObserver) {
		const ro = new ResizeObserver(() => onMeasure(node));
		ro.observe(node);
		return () => {
			ro.disconnect();
		};
	} else {
		const cachedSize = { width: 0, height: 0 };
		function handleMutate() {
			const { width, height } = node.getBoundingClientRect();
			if (cachedSize.width !== width || cachedSize.height !== height) {
				cachedSize.width = width;
				cachedSize.height = height;
				onMeasure(node);
			}
		}
		const mob = new MutationObserver(handleMutate);
		const mutationObserverOption = {
			subtree: true,
			childList: true,
			attributes: true,
			characterData: true,
		};
		mob.observe(node, mutationObserverOption);
		return () => {
			mob.disconnect();
		};
	}
}

export function useBoundingClientRect(target) {
	const [rect, setRect] = useState(getRect(target.current));
	useEffect(() => {
		if (!target.current) {
			return;
		}
		setRect(getRect(target.current));
		return useMeasure(target.current, (node) => {
			setRect(getRect(node));
		});
	}, [target]);
	return rect;
}

function getRect(target) {
	return target?.getBoundingClientRect() || { width: 0, height: 0, x: 0, y: 0 };
}
