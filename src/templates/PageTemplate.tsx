import React from 'react';
import 'twin.macro';
import {
	Container,
	GreyBackground,
} from '~/components/ui/containers/Container';
import { Card } from '~/components/ui/containers/Card';
import { wrapRootElement } from '~/components/markdown/mdx';
import { useSiteMetadata } from '~/utils/hooks/site-metadata';
import { SEO } from '~/components/common/SEO';

const PageTemplate = ({ children }) => {
	const { title } = useSiteMetadata();
	return wrapRootElement(
		<GreyBackground>
			<SEO title={title} />
			<Container tw={'sm:py-6'}>
				<Card>{children}</Card>
			</Container>
		</GreyBackground>
	);
};

export default PageTemplate;
