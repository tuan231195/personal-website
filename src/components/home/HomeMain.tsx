import React from 'react';
import { Container } from '~/components/ui/containers/Container';
import tw from 'twin.macro';
import { Grid } from '~/components/ui/containers/Grid';
import { GridColumn } from '~/components/ui/containers/GridColumn';
import { Card } from '~/components/ui/containers/Card';

const Root = tw.div`
	bg-gray-300  flex-grow
`;
export default function HomeMain() {
	return (
		<Root>
			<Container>
				<Grid gap={5} className={`pt-4`}>
					<GridColumn md={8} sm={12}>
						<Card>Test</Card>
					</GridColumn>
					<GridColumn md={4} sm={12}>
						<Card>Test</Card>
					</GridColumn>
				</Grid>
			</Container>
		</Root>
	);
}
