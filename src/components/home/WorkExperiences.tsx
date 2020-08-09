import { ProfileSection } from '~/components/home/ProfileSection';
import React from 'react';
import 'twin.macro';
import userProfile from '~/profile';
import { Timeline } from '~/components/ui/containers/Timeline';

export function WorkExperience({
	experiences,
}: {
	experiences: typeof userProfile['work'];
}) {
	return (
		<ProfileSection header={'Work Experience'}>
			<Timeline>
				{experiences.map((experience, index) => (
					<section key={index}>
						<div
							tw={
								'flex md:flex-row flex-col md:justify-between md:items-center mb-2'
							}
						>
							<h6 tw={'font-semibold text-gray-600'}>{experience.role}</h6>
							<span tw={'text-gray-600'}>
								{experience.company} ({experience.period})
							</span>
						</div>
						<p tw={'pl-5'}>{experience.description}</p>
					</section>
				))}
			</Timeline>
		</ProfileSection>
	);
}
