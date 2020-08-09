import React from 'react';
import 'twin.macro';
import { ContactMain } from '~/components/contact/ContactMain';
import { Helmet } from 'react-helmet';

const ContactPage = () => (
	<>
		<Helmet title='Contact me' defer={false} />
		<ContactMain />
	</>
);

export default ContactPage;
