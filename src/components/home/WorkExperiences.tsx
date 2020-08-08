import { ProfileSection } from '~/components/home/ProfileSection';
import { Groups } from '~/components/ui/groups/Groups';
import React from 'react';
import 'twin.macro';

export function WorkExperience() {
	return (
		<ProfileSection header={'Work Experience'}>
			<Groups size={5} orientation={'vertical'}>
				<div>
					<div tw={'flex items-center mb-2'}>
						<h6 tw={'font-semibold text-gray-600'}>Software Engineer - </h6>
						<span tw={'text-gray-600'}>
							&nbsp; Startup Hub (2014 - Present)
						</span>
					</div>

					<p>
						Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
						Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
						Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien
						ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
						eget eros faucibus tincidunt.
					</p>
				</div>
				<div>
					<div tw={'flex items-center mb-2'}>
						<h6 tw={'font-semibold text-gray-600'}>Web Developer - </h6>
						<span tw={'text-gray-600'}>&nbsp; Itree (2011 - 2014)</span>
					</div>

					<p>
						Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
						Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
						Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien
						ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
						eget eros faucibus tincidunt.
					</p>
				</div>
			</Groups>
		</ProfileSection>
	);
}
