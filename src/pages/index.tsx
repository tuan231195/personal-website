import React from 'react';
import Headline from '~/components/home/Headline';
import HomeMain from '~/components/home/HomeMain';
import 'twin.macro';
import profile from '~/profile';
import { Helmet } from 'react-helmet';
import { GreyBackground } from '~/components/ui/containers/Container';

const IndexPage = () => (
	<>
		<Helmet title='Home' defer={false} />
		<Headline profile={profile.basic} />
		<GreyBackground id={'content'}>
			<HomeMain profile={profile} />
		</GreyBackground>
	</>
);

export default IndexPage;
