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

const Root = tw.div`
	bg-gray-300  flex-grow
`;
export default function HomeMain() {
	return (
		<Root>
			<Container>
				<Grid gap={5} className={`pt-4`}>
					<GridColumn md={8} sm={12}>
						<AboutMe />
					</GridColumn>
					<GridColumn md={4} sm={12}>
						<GeneralInfo />
					</GridColumn>
					<GridColumn md={8} sm={12}>
						<WorkExperience />
					</GridColumn>
					<GridColumn md={4} sm={12}>
						<Education />
					</GridColumn>
					<GridColumn md={8} sm={12}>
						<Skills />
					</GridColumn>
					<GridColumn md={4} sm={12}>
						<Languages />
					</GridColumn>
					<GridColumn md={8} sm={12}>
						<Awards />
					</GridColumn>
				</Grid>
			</Container>
		</Root>
	);
}
