import React from 'react';
import { Container } from '~/components/ui/containers/Container';
import { Card } from '~/components/ui/containers/Card';
import tw from 'twin.macro';
import { wrapRootElement } from '~/components/markdown/mdx';
import { useSiteMetadata } from '~/utils/hooks/site-metadata';
import { Helmet } from 'react-helmet';

const Root = tw.div`
	bg-gray-300  flex-grow py-10
`;

const PageTemplate = ({ children }) => {
	const { title } = useSiteMetadata();
	return wrapRootElement(
		<Root>
			<Helmet defer={false} title={title} />
			<Container>
				<Card>{children}</Card>
			</Container>
		</Root>
	);
};

export default PageTemplate;
