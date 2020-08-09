import { ProfileSection } from '~/components/home/ProfileSection';
import { Groups } from '~/components/ui/groups/Groups';
import React from 'react';
import 'twin.macro';
import { Stars } from '~/components/ui/misc/Star';
import userProfile from '~/profile';

export function Languages({
	languages,
}: {
	languages: typeof userProfile['languages'];
}) {
	return (
		<ProfileSection header={'Languages'}>
			<Groups size={4} orientation={'vertical'}>
				{languages.map((language, index) => (
					<section key={index}>
						<div>
							<span tw={'font-semibold'}>{language.name}: </span>
							<span>{language.desc}</span>
						</div>
						<Stars value={language.rating} readonly={true} color={'success'} />
					</section>
				))}
			</Groups>
		</ProfileSection>
	);
}
