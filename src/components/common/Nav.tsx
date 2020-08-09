import React from 'react';
import tw, { styled } from 'twin.macro';
import { Icon } from '~/components/ui/icons/Icon';
import { Link } from 'gatsby';
import { Groups } from '~/components/ui/groups/Groups';

const Root = styled.nav`
	${tw`bg-blue-600 text-white flex items-center justify-between`}
	min-height: 2rem;
`;

const NavLink = styled(Link)`
	${tw`h-full block flex items-center px-3`}
`;

export function Nav({ profile: { github, linkedin, facebook } }) {
	return (
		<Root>
			<div>
				<Groups
					className={'flex p-2 items-center justify-center md:justify-start'}
					size={2}
				>
					<a href={github}>
						<Icon name={'github'} size={24} />
					</a>
					<a href={linkedin}>
						<Icon name={'linkedin'} size={24} />
					</a>
					<a href={facebook}>
						<Icon name={'facebook'} size={24} />
					</a>
				</Groups>
			</div>
			<div tw={'self-stretch'}>
				<NavLink to='/' activeClassName='bg-accent'>
					<Icon name={'home'} className={'mr-2'} size={20} /> Home
				</NavLink>
			</div>
		</Root>
	);
}
