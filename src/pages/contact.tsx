import React from 'react';
import 'twin.macro';
import { ContactMain } from '~/components/contact/ContactMain';
import { Helmet } from 'react-helmet';
import { GreyBackground } from '~/components/ui/containers/Container';

const ContactPage = () => (
	<GreyBackground>
		<Helmet title='Contact me' defer={false} />
		<ContactMain />
	</GreyBackground>
);

export default ContactPage;
