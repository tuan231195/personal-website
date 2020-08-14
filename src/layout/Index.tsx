import { Nav } from '~/components/common/Nav';
import profile from '~/profile';
import React from 'react';
import 'twin.macro';
import { Footer } from '~/components/common/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children, location }) {
	if (location.pathname === '/offline-plugin-app-shell-fallback') return null;
	return (
		<div tw={'min-h-screen flex flex-col'}>
			<ToastContainer hideProgressBar={true} autoClose={2000} />
			<Nav profile={profile.basic} location={location} />
			<div tw={'flex-grow flex flex-col'}>{children}</div>
			<Footer name={profile.basic.name} />
		</div>
	);
}
