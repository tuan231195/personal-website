import React, { useEffect, useState } from 'react';
import tw, { styled, theme } from 'twin.macro';
import { Icon } from '~/components/ui/icons/Icon';
import { Link } from 'gatsby';
import { Groups } from '~/components/ui/groups/Groups';
import cn from 'classnames';
import { useStateRef } from '~/utils/hooks/basic';
import { offsetToDocument } from '~/utils/dom/offset';

const links = [
	{
		name: 'Home',
		href: '/',
		icon: 'home',
	},
	{
		name: 'Projects',
		href: '/projects',
		icon: 'bag',
	},
	{
		name: 'Contact',
		href: '/contact',
		icon: 'mail',
	},
];
const Root = styled.nav<{ sticky: boolean }>`
	${tw`bg-blue-600 flex flex-col sm:flex-row sm:items-center justify-between text-white relative`}
	min-height: 2rem;
	${({ sticky }) =>
		sticky &&
		`
		    position: fixed!important;
			min-width: 100%;
			top: 0;
			box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
			transition: all .25s ease-in;
			z-index: 1;
	`}
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
	const [stickyGetter, setSticky] = useStateRef(false);

	useEffect(() => {
		const content = document.getElementById('content');
		const { top: bodyTop } = offsetToDocument(content);
		function listener() {
			if (window.scrollY >= bodyTop) {
				if (!stickyGetter()) {
					setSticky(true);
				}
			} else {
				if (stickyGetter()) {
					setSticky(false);
				}
			}
		}
		window.addEventListener('scroll', listener);
		return () => {
			window.removeEventListener('scroll', listener);
		};
	}, []);
	return (
		<Root sticky={stickyGetter()}>
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
					'self-stretch sm:flex bg-blue-600 flex-col sm:flex-row sm:items-center sm:w-auto absolute sm:static top-full w-full'
				}
				className={cn({
					hidden: !open,
				})}
			>
				{links.map((link, index) => {
					return (
						<NavLink
							to={link.href}
							key={index}
							activeClassName='bg-accent'
							className={'py-2 px-2'}
						>
							<Icon name={link.icon as any} className={'mr-2'} size={20} />{' '}
							{link.name}
						</NavLink>
					);
				})}
			</div>
		</Root>
	);
}
