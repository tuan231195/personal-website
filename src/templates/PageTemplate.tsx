import React from 'react';
import 'twin.macro';
import {
	Container,
	GreyBackground,
} from '~/components/ui/containers/Container';
import { Card } from '~/components/ui/containers/Card';
import { wrapRootElement } from '~/components/markdown/mdx';
import { useSiteMetadata } from '~/utils/hooks/site-metadata';
import { Helmet } from 'react-helmet';

const PageTemplate = ({ children }) => {
	const { title } = useSiteMetadata();
	return wrapRootElement(
		<GreyBackground>
			<Helmet defer={false} title={title} />
			<Container>
				<Card>{children}</Card>
			</Container>
		</GreyBackground>
	);
};

export default PageTemplate;
