import { ProfileSection } from '~/components/home/ProfileSection';
import { Groups } from '~/components/ui/groups/Groups';
import React from 'react';
import 'twin.macro';
import { Stars } from '~/components/ui/misc/Star';

export function Languages() {
	return (
		<ProfileSection header={'Languages'}>
			<Groups size={4} orientation={'vertical'}>
				<section>
					<div>
						<span tw={'font-semibold'}>English: </span>
						<span>Professional Proficiency</span>
					</div>
					<Stars value={3.5} readonly={true} color={'success'} />
				</section>
				<section>
					<div>
						<span tw={'font-semibold'}>Vietnamese: </span>
						<span>Native Speaker</span>
					</div>
					<Stars value={5} readonly={true} color={'success'} />
				</section>
			</Groups>
		</ProfileSection>
	);
}
