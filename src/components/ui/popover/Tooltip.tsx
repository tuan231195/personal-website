import React, { Ref, useCallback, useMemo, useState } from 'react';
import { Popover } from '~/components/ui/popover/Popover';
import { ListenerGroup } from '~/utils/events/listener-group';
import { css, styled } from 'twin.macro';

export function Tooltip({ trigger, children, offset }) {
	const [ref, setRef] = useState<Ref<any>>(null);
	const [showPopover, setShowPopover] = useState(false);
	const listenerGroup = useMemo(() => new ListenerGroup(), []);
	if (!trigger) {
		return null;
	}

	const onRefChange = useCallback((node: HTMLElement) => {
		listenerGroup.unregister();
		setRef({
			current: node,
		});
		if (node) {
			listenerGroup.addEventListener(node, 'mouseenter', () => {
				setShowPopover(true);
			});
			listenerGroup.addEventListener(node, 'mouseleave', () => {
				setShowPopover(false);
			});
		}
	}, []);

	trigger = React.cloneElement(trigger, {
		ref: onRefChange,
	});
	return (
		<>
			{trigger}
			{showPopover && (
				<Popover parentRef={ref} offset={offset}>
					{children}
				</Popover>
			)}
		</>
	);
}

export function BasicTooltip({
	trigger,
	text,
	position,
}: {
	trigger: any;
	text: string;
	position: 'top' | 'right' | 'bottom' | 'left';
}) {
	const offset = {
		top: {
			top: '-8 - 100c',
			left: '50p - 50c',
		},
		bottom: {
			top: '8 + 100p',
			left: '50p - 50c',
		},
		right: {
			top: '50p - 50c',
			left: '8 + 100p',
		},
		left: {
			top: '50p - 50c',
			left: '-8 - 100c',
		},
	}[position];

	return (
		<Tooltip trigger={trigger} offset={offset}>
			<div tw={'relative rounded px-2 py-1 text-center bg-black text-white'}>
				<Tip position={position} />
				{text}
			</div>
		</Tooltip>
	);
}

const Tip = styled.span<{ position: string }>`
	${(p) => p.position === 'top' && triangleTop}
	${(p) => p.position === 'bottom' && triangleBottom}
	${(p) => p.position === 'left' && triangleLeft}
	${(p) => p.position === 'right' && triangleRight}
`;

const baseTriangle = css`
	border-color: transparent;
	border-bottom-color: black;
	position: absolute;
`;
const triangleBottom = css`
	${baseTriangle}
	border-width: 0 6px 6px;
	top: -6px;
	left: 50%;
	transform: translateX(-50%);
`;

const triangleTop = css`
	border-width: 0 6px 6px;
	${baseTriangle}
	bottom: -6px;
	transform: rotate(180deg) translateX(-50%);
	left: calc(50% - 12px);
`;

const triangleRight = css`
	border-width: 0 6px 6px;
	${baseTriangle}
	left: -6px;
	top: calc(50% - 3px);
	transform: rotate(270deg) translateY(-50%);
`;

const triangleLeft = css`
	border-width: 0 6px 6px;
	${baseTriangle}
	right: -6px;
	top: calc(50% - 3px);
	transform: rotate(90deg) translateY(-50%);
`;
