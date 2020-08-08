import React, { HTMLAttributes } from 'react';
import { useMonitoring } from '~/utils/hooks/basic';
import { noop } from '~/utils/functions';
import { styled } from 'twin.macro';
import { getValue } from '~/theme';

export const Star = styled.div<
	{
		readonly: boolean;
		color: string;
		half: boolean;
		checked: boolean;
		size: number;
	} & HTMLAttributes<HTMLDivElement>
>`
	position: relative;
	display: inline-block;
	
	&:before, &:after {
		font-size: ${(p) => p.size}rem;
		color: ${getValue('colors', 'gray-500')};
	}
	
	&:before {
		content:'\\2605';
	}
	
	${({ readonly, color }) =>
		!readonly &&
		`
			&:hover ~ &:before {
				color: ${getValue('colors', color)};
			}
		`}
	
	
	
	${({ half, color }) =>
		half &&
		`
			&:after {
				content: '\\2605';
				position: absolute;
				margin-left: -100%;
				width: 50%;
				overflow: hidden;
				color: ${getValue('colors', color)};
			}
		`}
	
	${({ checked, color }) =>
		checked &&
		`
			&:before {
				color: ${getValue('colors', color)};
			}
		`}
`;

interface Props {
	maxStars?: number;
	value?: number;
	size?: number;
	color?: string;
	onChange?: (event, { value }: { value: number }) => void;
	readonly?: boolean;
}

export const Stars: React.FC<Props> = ({
	maxStars = 5,
	value = 0,
	size = 2,
	color = 'yellow-500',
	onChange = noop,
	readonly = false,
}) => {
	const [currentStars, setCurrentStar] = useMonitoring({ value });
	return (
		<>
			<div onMouseLeave={() => onMouseLeave()}>
				{Array.from({ length: maxStars })
					.map((_val, index) => index)
					.map((star, index) => {
						return (
							<Star
								color={color}
								size={size}
								readonly={readonly}
								key={star}
								half={index + 1 > currentStars && index < currentStars}
								checked={index + 1 <= currentStars}
								onMouseMove={
									readonly ? noop : (event) => onMouseMove(event, index)
								}
								onClick={readonly ? noop : (event) => onMouseClick(event)}
							/>
						);
					})}
			</div>
		</>
	);

	function onMouseMove(e: React.MouseEvent, index) {
		if (isWithinFirstHalf(e)) {
			setCurrentStar(index + 1 - 0.5);
		} else {
			setCurrentStar(index + 1);
		}
	}

	function onMouseLeave() {
		setCurrentStar(value);
	}

	function onMouseClick(e) {
		onChange(e, { value: currentStars });
	}

	function isWithinFirstHalf(event: React.MouseEvent) {
		return (
			event.nativeEvent.offsetX <= (event.currentTarget as any).offsetWidth / 2
		);
	}
};
