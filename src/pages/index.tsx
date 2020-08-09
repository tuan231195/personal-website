import React from 'react';
import Headline from '~/components/home/Headline';
import HomeMain from '~/components/home/HomeMain';
import 'twin.macro';
import profile from '~/profile';

const IndexPage = () => (
	<div tw={'min-h-screen flex flex-col'}>
		<Headline profile={profile.basic} />
		<HomeMain profile={profile} />
	</div>
);

export default IndexPage;
