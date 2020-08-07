import React from 'react';
import tw, { styled } from 'twin.macro';
import { Button } from '~/components/ui/controls/Button';
import { Avatar } from '~/components/ui/images/Avatar';
import { Icon } from '~/components/ui/icons/Icon';
import { Groups } from '~/components/ui/groups/Groups';

const Root = styled.header`
	${tw`bg-primary py-5 shadow-xs text-white`}
`;

const Container = styled.div`
	${tw`container flex justify-between items-center px-6`}
`;

export default function Headline() {
	return (
		<Root>
			<Container>
				<div tw={'flex items-center'}>
					<Avatar
						rounded={false}
						src={
							'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
						}
						size={48}
					/>
					<div tw={'ml-6'}>
						<h4 className={'type-h4'}> Tuan Nguyen</h4>
						<h6 className={'text-2xl'}> Software Developer </h6>
						<div tw={'flex items-center pt-2'}>
							<Icon name={'mail'} size={24} color={'white'} />
							<span tw={'pl-1'}> vdtn359@gmail.com </span>
						</div>
						<div tw={'flex items-center pt-2'}>
							<Icon name={'phone'} size={24} color={'white'} />
							<span tw={'pl-1'}> 0450082978 </span>
						</div>
						<Groups className={'flex items-center pt-2'} size={0.5}>
							<Icon name={'github'} size={24} />
							<Icon name={'linkedin'} size={24} />
							<Icon name={'facebook'} size={24} color={'white'} />
						</Groups>
					</div>
				</div>
				<Button icon={'send'} size={'sm'}>
					CONTACT ME
				</Button>
			</Container>
		</Root>
	);
}
