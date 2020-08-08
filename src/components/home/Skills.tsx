import { ProfileSection } from '~/components/home/ProfileSection';
import { Groups } from '~/components/ui/groups/Groups';
import React from 'react';
import 'twin.macro';
import { ProgressBar } from '~/components/ui/misc/ProgressBar';
import { Icon } from '~/components/ui/icons/Icon';

export function Skills() {
	return (
		<ProfileSection header={'Skills'}>
			<Groups size={5} orientation={'vertical'}>
				<section>
					<div tw={'flex items-center justify-between'}>
						<div>JavaScript</div>
						<div tw={'italic text-gray-500'}>Good</div>
					</div>
					<ProgressBar percent={90} />
				</section>
				<section>
					<div tw={'flex items-center justify-between'}>
						<div>SQL</div>
						<div tw={'italic text-gray-500'}>Good</div>
					</div>
					<ProgressBar percent={80} />
				</section>
				<section>
					<div tw={'flex items-center justify-between'}>
						<div>Java</div>
						<div tw={'italic text-gray-500'}>Good</div>
					</div>
					<ProgressBar percent={80} />
				</section>
				<section>
					<div tw={'flex items-center justify-between'}>
						<div>Devops</div>
						<div tw={'italic text-gray-500'}>Intermediate</div>
					</div>
					<ProgressBar percent={70} />
				</section>
			</Groups>
			<a href={'#'} tw={'flex items-center text-gray-700'}>
				<Icon name={'external'} size={20} />
				<span tw={'pl-2'}>More on Linkedin</span>
			</a>
		</ProfileSection>
	);
}
