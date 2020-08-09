import React from 'react';
import tw, { styled } from 'twin.macro';
import { Button } from '~/components/ui/controls/Button';
import { Avatar } from '~/components/ui/images/Avatar';
import { Icon } from '~/components/ui/icons/Icon';
import { Groups } from '~/components/ui/groups/Groups';
import { Container } from '~/components/ui/containers/Container';

const Root = styled.header`
	${tw`bg-primary py-5 text-white`}
`;

export default function Headline({ profile }) {
	const {
		name,
		email,
		avatar,
		role,
		phone,
		github,
		linkedin,
		facebook,
	} = profile;
	return (
		<Root>
			<Container className={'md:justify-between'}>
				<div tw={'flex items-center flex-col md:flex-row justify-center'}>
					<Avatar rounded={false} src={avatar} size={48} />
					<div
						tw={
							'md:ml-6 pt-2 md:pt-0 flex flex-col md:items-start items-center'
						}
					>
						<h4 className={'type-h4'}>{name}</h4>
						<h6 className={'text-2xl'}>{role}</h6>
						<div>
							<div tw={'flex items-center pt-2'}>
								<Icon name={'mail'} size={24} color={'white'} />
								<span tw={'pl-1'}>{email}</span>
							</div>
							<div tw={'flex items-center pt-2'}>
								<Icon name={'phone'} size={24} color={'white'} />
								<span tw={'pl-1'}>{phone}</span>
							</div>
							<Groups
								className={
									'flex items-center pt-2 justify-center md:justify-start'
								}
								size={2}
							>
								<a href={github}>
									<Icon name={'github'} size={24} />
								</a>
								<a href={linkedin}>
									<Icon name={'linkedin'} size={24} />
								</a>
								<a href={facebook}>
									<Icon name={'facebook'} size={24} color={'white'} />
								</a>
							</Groups>
						</div>
					</div>
				</div>
				<Button icon={'send'} size={'sm'} className={'md:mt-0 mt-4'}>
					CONTACT ME
				</Button>
			</Container>
		</Root>
	);
}
