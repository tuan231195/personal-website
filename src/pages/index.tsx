import React from 'react';
import Headline from '~/components/home/Headline';
import HomeMain from '~/components/home/HomeMain';
import 'twin.macro';
import profile from '~/profile';

const IndexPage = () => (
	<>
		<Headline profile={profile.basic} />
		<HomeMain profile={profile} />
	</>
);

export default IndexPage;
