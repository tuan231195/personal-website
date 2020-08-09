import React, { useState } from 'react';
import tw, { styled, theme } from 'twin.macro';
import { Icon } from '~/components/ui/icons/Icon';
import { Link } from 'gatsby';
import { Groups } from '~/components/ui/groups/Groups';
import cn from 'classnames';

const Root = styled.nav`
	${tw`bg-blue-600 flex flex-col sm:flex-row sm:items-center justify-between text-white relative`}
	min-height: 2rem;
`;

const NavLink = styled(Link)`
	${tw`h-full block flex items-center px-3`}
`;

const HamburgerButton = styled.button<{ open: boolean }>`
	${tw`block sm:hidden focus:outline-none mr-2`}
	cursor: pointer;
	width: 48px;
	height: 48px;
	transition: all 0.25s;

	> span {
		content: '';
		position: absolute;
		width: 24px;
		background: ${theme('colors.white')};
		height: 2px;
		transform: rotate(0);
		transition: all 0.2s;
	}

	> span:first-child {
		transform: translateY(-5px);

		${({ open }) =>
			open &&
			`
			 transform: rotate(45deg)
   		 translateY(0px);
		`}
	}

	> span:last-child {
		transform: translateY(3px);

		${({ open }) =>
			open &&
			`
			 transform: rotate(-45deg)
   		 translateY(0px);
		`}
	}

	.hamburger:hover > span {
		background: #333;
	}
`;

export function Nav({ profile: { github, linkedin, facebook } }) {
	const [open, setOpen] = useState(false);
	return (
		<Root>
			<div tw={'flex items-center justify-between'}>
				<Groups
					className={'flex p-2 items-center justify-center md:justify-start'}
					size={2}
				>
					<a href={github} target={'_blank'} rel={'noreferrer'}>
						<Icon name={'github'} size={24} />
					</a>
					<a href={linkedin} target={'_blank'} rel={'noreferrer'}>
						<Icon name={'linkedin'} size={24} />
					</a>
					<a href={facebook} target={'_blank'} rel={'noreferrer'}>
						<Icon name={'facebook'} size={24} />
					</a>
				</Groups>
				<HamburgerButton
					open={open}
					type='button'
					onClick={() => setOpen(!open)}
				>
					<span />
					<span />
				</HamburgerButton>
			</div>

			<div
				tw={
					'self-stretch sm:flex flex-col sm:flex-row sm:items-center sm:w-auto absolute sm:static top-full w-full'
				}
				className={cn({
					hidden: !open,
				})}
			>
				<NavLink to='/' activeClassName='bg-accent' className={'sm:p-0 p-2 '}>
					<Icon name={'home'} className={'mr-2'} size={20} /> Home
				</NavLink>
			</div>
		</Root>
	);
}
