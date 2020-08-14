import React, { useCallback, useEffect, useRef } from 'react';
import tw, { styled, theme } from 'twin.macro';
import { Icon } from '~/components/ui/icons/Icon';
import { Link } from 'gatsby';
import { Groups } from '~/components/ui/groups/Groups';
import cn from 'classnames';
import { useStateRef } from '~/utils/hooks/basic';
import { offsetToDocument } from '~/utils/dom/offset';
import { useWindowEvent } from '~/utils/hooks/events';

const links = [
	{
		name: 'Home',
		href: '/',
		icon: 'home',
	},
	{
		name: 'Projects',
		href: '/projects/',
		icon: 'bag',
	},
	{
		name: 'Contact',
		href: '/contact/',
		icon: 'mail',
	},
	{
		name: 'Blogs',
		href: '/blogs/',
		icon: 'document',
		partiallyActive: true,
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

export function Nav({ profile: { github, linkedin, facebook }, location }) {
	const [openGetter, setOpen] = useStateRef(false);
	const [stickyGetter, setSticky] = useStateRef(false);
	const navRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const content = document.getElementById('content');
		if (!content) {
			setSticky(false);
			return;
		}
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
	}, [location.pathname]);

	const clickEventCallback = useCallback((e) => {
		if (!openGetter()) {
			return;
		}
		if (navRef.current?.contains(e.target)) {
			return;
		}
		setOpen(false);
	}, []);

	useWindowEvent('click', clickEventCallback);

	return (
		<Root sticky={stickyGetter()} ref={navRef}>
			<div tw={'flex items-center justify-between'}>
				<Groups
					className={'flex p-2 items-center justify-center md:justify-start'}
					size={2}
				>
					<a
						href={github}
						target={'_blank'}
						aria-label='github'
						rel={'noreferrer'}
					>
						<Icon name={'github'} size={24} />
					</a>
					<a
						href={linkedin}
						target={'_blank'}
						aria-label='linkedin'
						rel={'noreferrer'}
					>
						<Icon name={'linkedin'} size={24} />
					</a>
					<a
						href={facebook}
						target={'_blank'}
						aria-label='facebook'
						rel={'noreferrer'}
					>
						<Icon name={'facebook'} size={24} />
					</a>
				</Groups>
				<HamburgerButton
					open={openGetter()}
					aria-label={'menu'}
					type='button'
					onClick={() => setOpen(!openGetter())}
				>
					<span />
					<span />
				</HamburgerButton>
			</div>

			<div
				tw={
					'self-stretch sm:flex bg-blue-600 flex-col sm:flex-row sm:items-center sm:w-auto z-10 absolute sm:static top-full w-full'
				}
				className={cn({
					hidden: !openGetter(),
				})}
			>
				{links.map((link, index) => {
					return (
						<NavLink
							to={link.href}
							key={index}
							onClick={() => setOpen(false)}
							partiallyActive={link.partiallyActive}
							activeClassName='bg-accent'
							className={'py-2 px-2'}
						>
							<Icon name={link.icon as any} className={'mr-2'} size={20} />
							{link.name}
						</NavLink>
					);
				})}
			</div>
		</Root>
	);
}
