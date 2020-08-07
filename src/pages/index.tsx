import React from 'react';
import Headline from '~/components/home/Headline';
import HomeMain from '~/components/home/HomeMain';
import 'twin.macro';

const IndexPage = () => (
	<div tw={'min-h-screen flex flex-col'}>
		<Headline />
		<HomeMain />
	</div>
);

export default IndexPage;
