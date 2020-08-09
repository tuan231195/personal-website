import React from 'react';
import 'twin.macro';
import { ProfileSection } from '~/components/home/ProfileSection';
import { Groups } from '~/components/ui/groups/Groups';
import userProfile from '~/profile';

export function Awards({ awards }: { awards: typeof userProfile['awards'] }) {
	return (
		<ProfileSection header={'Awards'}>
			<Groups size={5} orientation={'vertical'}>
				{awards.map((award, index) => (
					<section key={index}>
						<div tw={'flex items-center mb-2'}>
							<h6 tw={'font-semibold text-gray-600'}>{award.name} - </h6>
							<span tw={'text-gray-600'}>&nbsp; {award.year}</span>
						</div>

						<p>{award.desc}</p>
					</section>
				))}
			</Groups>
		</ProfileSection>
	);
}
