import tw from 'twin.macro';
import React from 'react';
import { Card } from '~/components/ui/containers/Card';
import { Container } from '~/components/ui/containers/Container';
import { Grid } from '~/components/ui/containers/Grid';
import { GridColumn } from '~/components/ui/containers/GridColumn';
import { Badge } from '~/components/ui/misc/Badge';
import userProfile from '~/profile';
import { getRandomizedColor } from '~/utils/colors';
import { Groups } from '~/components/ui/groups/Groups';
import { Icon } from '~/components/ui/icons/Icon';

const Root = tw.div`
	bg-gray-300 py-10  flex-grow
`;

export function ProjectMain({
	projects,
}: {
	projects: typeof userProfile['projects'];
}) {
	return (
		<Root>
			<Container>
				<h4 tw={'type-h4 text-center mb-4'}>Projects</h4>
				<Grid gap={5} className={'mb-5'}>
					{projects.map((project, index) => {
						return (
							<GridColumn lg={4} md={6} sm={12} key={index}>
								<Card tw={'h-64 flex flex-col'}>
									<div tw={'flex justify-between'}>
										<h6 tw={'type-h6 text-gray-700 mb-4'}>{project.name}</h6>
										<span tw={'mt-1'}>
											<Groups size={2}>
												{!!project.link && (
													<a
														href={project.link}
														target={'_blank'}
														rel={'noreferrer'}
													>
														<Icon
															name={'external'}
															color={'gray-500'}
															size={16}
														/>
													</a>
												)}
												{!!project.source && (
													<a
														href={project.source}
														target={'_blank'}
														rel={'noreferrer'}
													>
														<Icon
															name={'github'}
															color={'gray-500'}
															size={16}
														/>
													</a>
												)}
											</Groups>
										</span>
									</div>
									<p tw={'flex-grow'}>{project.description}</p>
									<div tw={'flex flex-wrap items-center mt-3'}>
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
