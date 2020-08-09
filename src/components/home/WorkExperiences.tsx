import { ProfileSection } from '~/components/home/ProfileSection';
import { Groups } from '~/components/ui/groups/Groups';
import React from 'react';
import 'twin.macro';
import userProfile from '~/profile';

export function WorkExperience({
	experiences,
}: {
	experiences: typeof userProfile['work'];
}) {
	return (
		<ProfileSection header={'Work Experience'}>
			<Groups size={5} orientation={'vertical'}>
				{experiences.map((experience, index) => (
					<section key={index}>
						<div tw={'flex items-center mb-2'}>
							<h6 tw={'font-semibold text-gray-600'}>{experience.role} - </h6>
							<span tw={'text-gray-600'}>
								&nbsp; {experience.company} ({experience.period})
							</span>
						</div>
						<p tw={'pl-5'}>{experience.description}</p>
					</section>
				))}
			</Groups>
		</ProfileSection>
	);
}
