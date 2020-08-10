import 'twin.macro';
import React from 'react';
import { Card } from '~/components/ui/containers/Card';
import { Container } from '~/components/ui/containers/Container';
import { Grid } from '~/components/ui/containers/Grid';
import { GridColumn } from '~/components/ui/containers/GridColumn';
import userProfile from '~/profile';
import { Groups } from '~/components/ui/groups/Groups';
import { Icon } from '~/components/ui/icons/Icon';
import { ColorBadge } from '~/components/ui/misc/ColorBadge';

export function ProjectMain({
	projects,
}: {
	projects: typeof userProfile['projects'];
}) {
	return (
		<Container className={'py-6'}>
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
													<Icon name={'github'} color={'gray-500'} size={16} />
												</a>
											)}
										</Groups>
									</span>
								</div>
								<p tw={'flex-grow'}>{project.description}</p>
								<Groups size={2} className={`mt-3`}>
									{project.tags.map((tag) => (
										<ColorBadge key={tag} text={tag} className={'mb-2'} />
									))}
								</Groups>
							</Card>
						</GridColumn>
					);
				})}
			</Grid>
		</Container>
	);
}
