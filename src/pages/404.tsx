import tw from 'twin.macro';
import { Helmet } from 'react-helmet';
import { Container } from '~/components/ui/containers/Container';
import { Icon } from '~/components/ui/icons/Icon';
import React from 'react';
import { ErrorHeader, ErrorStatusText } from '~/components/ui/errors/ErrorPage';
import { Card } from '~/components/ui/containers/Card';
import { Link } from 'gatsby';
import { Button } from '~/components/ui/controls/Button';

const Root = tw.div`
	bg-gray-300  flex-grow py-10
`;

export default function NotFoundPage() {
	return (
		<Root>
			<Helmet defer={false} title={'Not Found'} />
			<Container className={'items-center'}>
				<Card tw={'max-w-4xl sm:w-2/3 w-full p-10'}>
					<div
						tw={
							'flex flex-col items-center justify-center transform -translate-y-5'
						}
					>
						<ErrorStatusText>404</ErrorStatusText>
						<ErrorHeader>Page Not Found</ErrorHeader>
						<Link to={'/'}>
							<Button>
								<Icon name='arrow-narrow-left' size={16} className={'mr-2'} />
								<span>Home Page</span>
							</Button>
						</Link>
					</div>
				</Card>
			</Container>
		</Root>
	);
}
