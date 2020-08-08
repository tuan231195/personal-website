import React from 'react';
import 'twin.macro';
import { ProfileSection } from '~/components/home/ProfileSection';
import { Groups } from '~/components/ui/groups/Groups';

export function Awards() {
	return (
		<ProfileSection header={'Awards'}>
			<Groups size={5} orientation={'vertical'}>
				<section>
					<div tw={'flex items-center mb-2'}>
						<h6 tw={'font-semibold text-gray-600'}>Richard Miller Prize - </h6>
						<span tw={'text-gray-600'}>&nbsp; 2017</span>
					</div>

					<p>
						For outstanding academic record in the third year of a Bachelor of
						Computer Science
					</p>
				</section>
				<section>
					<div tw={'flex items-center mb-2'}>
						<h6 tw={'font-semibold text-gray-600'}>Ross Nealon Prize - </h6>
						<span tw={'text-gray-600'}>&nbsp; 2017</span>
					</div>

					<p>
						For outstanding academic record in the second year of a Bachelor of
						Computer Science
					</p>
				</section>
			</Groups>
		</ProfileSection>
	);
}
