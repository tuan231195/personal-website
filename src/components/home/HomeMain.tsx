import React from 'react';
import { Container } from '~/components/ui/containers/Container';
import tw from 'twin.macro';
import { Grid } from '~/components/ui/containers/Grid';
import { GridColumn } from '~/components/ui/containers/GridColumn';
import { ProfileSection } from '~/components/home/ProfileSection';
import { AboutMe } from '~/components/home/AboutMe';
import { GeneralInfo } from '~/components/home/GeneralInfo';

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
						<ProfileSection>
							<GeneralInfo />
						</ProfileSection>
					</GridColumn>
				</Grid>
			</Container>
		</Root>
	);
}
