import React from 'react';
import { Container } from '~/components/ui/containers/Container';
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

export default function HomeMain({ profile }: { profile: typeof userProfile }) {
	return (
		<Container>
			<Grid smGap={3} mdGap={5} className={`sm:pt-4`} collapse={true}>
				<GridColumn md={7} lg={8} sm={12} className={'order-2 md:order-none'}>
					<AboutMe about={profile.about} />
				</GridColumn>
				<GridColumn md={5} lg={4} sm={12} className={'order-1 md:order-none'}>
					<GeneralInfo profile={profile.basic} />
				</GridColumn>
				<GridColumn md={7} lg={8} sm={12} className={'order-4 md:order-none'}>
					<WorkExperience experiences={profile.work} />
				</GridColumn>
				<GridColumn md={5} lg={4} sm={12} className={'order-3 md:order-none'}>
					<Skills skills={profile.skills} linkedin={profile.basic.linkedin} />
				</GridColumn>
				<GridColumn md={7} lg={8} sm={12} className={'order-6 md:order-none'}>
					<Awards awards={profile.awards} />
				</GridColumn>
				<GridColumn md={5} lg={4} sm={12} className={'order-5 md:order-none'}>
					<Education educationList={profile.education} />
				</GridColumn>
				<GridColumn md={7} lg={8} sm={12} className={'order-8 md:order-none'}>
					<GithubContribution githubUsername={profile.basic.githubUsername} />
				</GridColumn>
				<GridColumn md={5} lg={4} sm={12} className={'order-7 md:order-none'}>
					<Languages languages={profile.languages} />
				</GridColumn>
			</Grid>
		</Container>
	);
}
