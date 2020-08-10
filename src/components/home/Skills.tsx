import { ProfileSection } from '~/components/home/ProfileSection';
import { Groups } from '~/components/ui/groups/Groups';
import React from 'react';
import 'twin.macro';
import { ProgressBar } from '~/components/ui/misc/ProgressBar';
import { Icon } from '~/components/ui/icons/Icon';
import userProfile from '~/profile';

export function Skills({
	skills,
	linkedin,
}: {
	skills: typeof userProfile['skills'];
	linkedin: string;
}) {
	return (
		<ProfileSection header={'Skills'}>
			<Groups size={5} orientation={'vertical'}>
				{skills.map((skill, index) => (
					<section key={index}>
						<div tw={'flex items-center justify-between'}>
							<div>{skill.name}</div>
							<div tw={'italic text-gray-700'}>
								{skill.value >= 9
									? 'Excellent'
									: skill.value >= 8
									? 'Good'
									: skill.value >= 7
									? 'Intermediate'
									: ''}
							</div>
						</div>
						<ProgressBar percent={skill.value * 10} />
					</section>
				))}
			</Groups>
			<a
				href={linkedin}
				target={'_blank'}
				rel={'noreferrer'}
				tw={'flex items-center text-gray-700'}
			>
				<Icon name={'external'} size={20} />
				<span tw={'pl-2'}>More on Linkedin</span>
			</a>
		</ProfileSection>
	);
}
