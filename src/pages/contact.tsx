import React from 'react';
import 'twin.macro';
import { ContactMain } from '~/components/contact/ContactMain';
import { GreyBackground } from '~/components/ui/containers/Container';
import { SEO } from '~/components/common/SEO';

const ContactPage = () => (
	<GreyBackground>
		<SEO title='Contact me' />
		<ContactMain />
	</GreyBackground>
);

export default ContactPage;
