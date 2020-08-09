import React from 'react';
import Headline from '~/components/home/Headline';
import HomeMain from '~/components/home/HomeMain';
import 'twin.macro';
import profile from '~/profile';
import { Helmet } from 'react-helmet';

const IndexPage = () => (
	<>
		<Helmet title='Home' defer={false} />
		<Headline profile={profile.basic} />
		<HomeMain profile={profile} />
	</>
);

export default IndexPage;
