import { ProfileSection } from '~/components/home/ProfileSection';
import { Groups } from '~/components/ui/groups/Groups';
import React from 'react';
import 'twin.macro';
import { Icon } from '~/components/ui/icons/Icon';
import userProfile from '~/profile';

export function Education({
	educationList,
}: {
	educationList: typeof userProfile['education'];
}) {
	return (
		<ProfileSection header={'Education'}>
			<Groups size={5} orientation={'vertical'}>
				{educationList.map((education, index) => (
					<section tw={'flex'} key={index}>
						<Icon name={'graduation-cap'} color={'gray-600'} size={22} />
						<div tw={'ml-2'}>
							<h6 tw={'font-semibold text-gray-600'}>{education.study}</h6>
							<span tw={'text-gray-600 text-xs font-semibold'}>
								{education.school} ({education.period})
							</span>
						</div>
					</section>
				))}
			</Groups>
		</ProfileSection>
	);
}
