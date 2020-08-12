import React from 'react';
import Headline from '~/components/home/Headline';
import HomeMain from '~/components/home/HomeMain';
import 'twin.macro';
import profile from '~/profile';
import { GreyBackground } from '~/components/ui/containers/Container';
import { SEO } from '~/components/common/SEO';

const IndexPage = () => (
	<>
		<SEO title='Home' />
		<Headline profile={profile.basic} />
		<GreyBackground id={'content'}>
			<HomeMain profile={profile} />
		</GreyBackground>
	</>
);

export default IndexPage;
