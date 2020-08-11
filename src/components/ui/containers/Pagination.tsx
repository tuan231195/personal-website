import React, { HTMLAttributes, useState } from 'react';
import 'twin.macro';
import { Icon } from '~/components/ui/icons/Icon';
import cn from 'classnames';
import { range } from '~/utils/array/range';
import { noop } from '~/utils/functions';

export function Pagination({
	numPages,
	onSelect = noop,
	current,
	marginPagesDisplayed = 3,
	pageRangeDisplayed = 3,
}: {
	numPages: number;
	current: number;
	onSelect?: (number) => void;
	marginPagesDisplayed?: number;
	pageRangeDisplayed?: number;
}) {
	const [middlePage, setMiddlePage] = useState(current);
	console.log(middlePage);
	const pagesToShow: Set<any> = new Set();
	for (const page of range(1, Math.min(1 + marginPagesDisplayed, numPages))) {
		pagesToShow.add(page);
	}

	for (const page of range(
		numPages,
		Math.max(numPages - marginPagesDisplayed + 1, 1) - 1,
		-1
	)) {
		pagesToShow.add(page);
	}

	for (const page of range(
		Math.max(1, middlePage - (pageRangeDisplayed - 1) / 2),
		Math.min(middlePage + (pageRangeDisplayed - 1) / 2, numPages) + 1
	)) {
		pagesToShow.add(page);
	}

	const pageArray = Array.from(pagesToShow).sort((a, b) => a - b);
	let index = 0;
	while (index < pageArray.length - 1) {
		if (pageArray[index] + 1 < pageArray[index + 1]) {
			// there is a gap, insert ...
			pageArray.splice(index + 1, 0, '...');
			index++;
		}
		index++;
	}

	return (
		<div tw='flex flex-col items-center my-12'>
			<div tw='flex text-gray-700'>
				<div
					tw='h-10 w-10 ml-1 flex justify-center items-center rounded-full bg-gray-200'
					className={cn({
						'cursor-pointer': isInRange(current - 1, 1, numPages),
						'opacity-50': !isInRange(current - 1, 1, numPages),
						'cursor-not-allowed': !isInRange(current - 1, 1, numPages),
					})}
					onClick={() => {
						if (!isInRange(current - 1, 1, numPages)) {
							return;
						}
						onSelect(current - 1);
					}}
				>
					<Icon name={'arrow-left'} size={20} />
				</div>
				<div tw='flex h-10 font-medium rounded-full bg-gray-200'>
					{pageArray.map((page, index) => (
						<Page
							text={page}
							key={`${page}-${index}`}
							selected={page === current}
							onClick={() => {
								if (page !== '...') {
									onSelect(page);
								} else {
									if (!pageArray.slice(index + 1).includes('...')) {
										// first occurence of ..., show next page
										setMiddlePage(pageArray[index - 1] + 1);
									} else {
										// second occurence of ..., show previous page
										setMiddlePage(pageArray[index + 1] - 1);
									}
								}
							}}
						/>
					))}
				</div>
				<div
					tw='h-10 w-10 ml-1 flex justify-center items-center rounded-full bg-gray-200'
					className={cn({
						'cursor-pointer': isInRange(current + 1, 1, numPages),
						'opacity-75': !isInRange(current + 1, 1, numPages),
						'cursor-not-allowed': !isInRange(current + 1, 1, numPages),
					})}
					onClick={() => {
						if (!isInRange(current + 1, 1, numPages)) {
							return;
						}
						onSelect(current + 1);
					}}
				>
					<Icon name={'arrow-right'} size={20} />
				</div>
			</div>
		</div>
	);
}

function isInRange(page, start, end) {
	return page >= start && page <= end;
}

function Page({
	text,
	selected,
	...props
}: { text: string; selected: boolean } & HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={cn({
				'bg-accent': selected,
				'text-white': selected,
			})}
			tw='w-10 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full'
		>
			{text}
		</div>
	);
}
