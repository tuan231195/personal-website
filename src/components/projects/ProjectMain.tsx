import tw from 'twin.macro';
import React from 'react';
import { Card } from '~/components/ui/containers/Card';
import { Container } from '~/components/ui/containers/Container';
import { Grid } from '~/components/ui/containers/Grid';
import { GridColumn } from '~/components/ui/containers/GridColumn';
import { Badge } from '~/components/ui/misc/Badge';
import userProfile from '~/profile';
import { getRandomizedColor } from '~/utils/colors';

const Root = tw.div`
	bg-gray-300  flex-grow
`;

export function ProjectMain({
	projects,
}: {
	projects: typeof userProfile['projects'];
}) {
	return (
		<Root id={'content'}>
			<Container>
				<h4 tw={'type-h4 text-center p-5'}>Projects</h4>
				<Grid gap={5} className={'mb-5'}>
					{projects.map((project, index) => {
						return (
							<GridColumn lg={4} md={6} sm={12} key={index}>
								<Card className={'h-64 flex flex-col'}>
									<h6 tw={'type-h6 text-gray-700 mb-4'}>{project.name}</h6>
									<p tw={'flex-grow'}>{project.description}</p>
									<div className={'flex flex-wrap items-center mt-3'}>
										{project.tags.map((tag) => (
											<Badge key={tag} color={getRandomizedColor(tag)}>
												{' '}
												{tag}{' '}
											</Badge>
										))}
									</div>
								</Card>
							</GridColumn>
						);
					})}
				</Grid>
			</Container>
		</Root>
	);
}
