import React from 'react';
import Headline from '~/components/home/Headline';
import HomeMain from '~/components/home/HomeMain';
import 'twin.macro';
import profile from '~/profile';
import { Nav } from '~/components/common/Nav';

const IndexPage = () => (
	<div tw={'min-h-screen flex flex-col'}>
		<Nav profile={profile.basic} />
		<Headline profile={profile.basic} />
		<HomeMain profile={profile} />
	</div>
);

export default IndexPage;
