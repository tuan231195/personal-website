import { ProfileSection } from '~/components/home/ProfileSection';
import { Groups } from '~/components/ui/groups/Groups';
import React from 'react';
import 'twin.macro';
import { Icon } from '~/components/ui/icons/Icon';

export function Education() {
	return (
		<ProfileSection header={'Education'}>
			<Groups size={5} orientation={'vertical'}>
				<section tw={'flex mb-2'}>
					<Icon name={'graduation-cap'} color={'gray-600'} size={22} />
					<div tw={'ml-2'}>
						<h6 tw={'font-semibold text-gray-600'}>
							Bachelor of Computer Science
						</h6>
						<span tw={'text-gray-600 text-xs font-semibold'}>
							University Of Wollongong (2014 - 2016)
						</span>
					</div>
				</section>
				<section tw={'flex mb-2'}>
					<Icon name={'graduation-cap'} color={'gray-600'} size={22} />
					<div tw={'ml-2'}>
						<h6 tw={'font-semibold text-gray-600'}>Mathematics</h6>
						<span tw={'text-gray-600 text-xs font-semibold'}>
							Hanoi Amsterdam High School (2010 - 2013)
						</span>
					</div>
				</section>
			</Groups>
		</ProfileSection>
	);
}
