import { Nav } from '~/components/common/Nav';
import profile from '~/profile';
import React from 'react';
import 'twin.macro';
import { Footer } from '~/components/common/Footer';

export default function Layout({ children, location }) {
	return (
		<div tw={'min-h-screen flex flex-col'}>
			<Nav profile={profile.basic} location={location} />
			<div tw={'flex-grow flex flex-col'}>{children}</div>
			<Footer name={profile.basic.name} />
		</div>
	);
}
