import React from 'react';
import { Container } from '~/components/ui/containers/Container';
import tw from 'twin.macro';
import { Grid } from '~/components/ui/containers/Grid';
import { GridColumn } from '~/components/ui/containers/GridColumn';
import { AboutMe } from '~/components/home/AboutMe';
import { GeneralInfo } from '~/components/home/GeneralInfo';
import { WorkExperience } from '~/components/home/WorkExperiences';
import { Education } from '~/components/home/Education';
import { Skills } from '~/components/home/Skills';
import { Languages } from '~/components/home/Languages';
import { Awards } from '~/components/home/Awards';
import userProfile from '~/profile';
import { GithubContribution } from '~/components/home/GithubContribution';

const Root = tw.div`
	bg-gray-300  flex-grow
`;
export default function HomeMain({ profile }: { profile: typeof userProfile }) {
	return (
		<Root>
			<Container>
				<Grid gap={5} className={`pt-4`}>
					<GridColumn md={8} sm={12}>
						<AboutMe about={profile.about} />
					</GridColumn>
					<GridColumn md={4} sm={12}>
						<GeneralInfo profile={profile.basic} />
					</GridColumn>
					<GridColumn md={8} sm={12}>
						<WorkExperience experiences={profile.work} />
					</GridColumn>
					<GridColumn md={4} sm={12}>
						<Skills skills={profile.skills} linkedin={profile.basic.linkedin} />
					</GridColumn>
					<GridColumn md={8} sm={12}>
						<Awards awards={profile.awards} />
					</GridColumn>
					<GridColumn md={4} sm={12}>
						<Education educationList={profile.education} />
					</GridColumn>
					<GridColumn md={8} sm={12}>
						<GithubContribution githubUsername={profile.basic.githubUsername} />
					</GridColumn>
					<GridColumn md={4} sm={12}>
						<Languages languages={profile.languages} />
					</GridColumn>
				</Grid>
			</Container>
		</Root>
	);
}
