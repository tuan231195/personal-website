import { Formik } from 'formik';
import React from 'react';
import { FormField } from '~/components/input/FormField';
import { TextField } from '~/components/input/TextField';
import { Button } from '~/components/ui/controls/Button';
import tw from 'twin.macro';
import { Container } from '../ui/containers/Container';
import { Card } from '~/components/ui/containers/Card';
import { TextAreaField } from '~/components/input/TextAreaField';
import { contactSchema } from '~/schemas/contact';
import { clientApi } from '~/http/api';

const Root = tw.div`
	bg-gray-300  flex-grow py-10
`;

export function ContactMain() {
	return (
		<Root>
			<Container className={'flex'}>
				<h4 tw={'type-h4 text-center mb-4'}>Contact Me</h4>
				<Card tw={'sm:w-2/3 w-full max-w-2xl m-auto'}>
					<Formik
						initialValues={{
							name: '',
							email: '',
							subject: '',
							enquiry: '',
						}}
						enableReinitialize={true}
						isInitialValid={false}
						validationSchema={contactSchema}
						onSubmit={async (values, { setSubmitting }) => {
							try {
								setSubmitting(true);
								await clientApi.post('/contact', values);
							} finally {
								setSubmitting(false);
							}
						}}
					>
						{(formik) => (
							<form onSubmit={formik.handleSubmit}>
								<FormField
									name={'name'}
									component={TextField}
									componentProps={{
										label: 'Name',
										placeholder: 'Name',
									}}
								/>
								<FormField
									name={'email'}
									component={TextField}
									componentProps={{
										label: 'Email',
										placeholder: 'Email',
									}}
								/>
								<FormField
									name={'subject'}
									component={TextField}
									componentProps={{
										label: 'Subject',
										placeholder: 'Subject',
									}}
								/>
								<FormField
									name={'enquiry'}
									component={TextAreaField}
									componentProps={{
										label: 'Enquiry',
										placeholder: 'Enquiry',
										rows: 8,
									}}
								/>
								<div tw={'mt-5'}>
									<Button
										type='submit'
										disabled={!formik.isValid || formik.isSubmitting}
									>
										Submit
									</Button>
								</div>
							</form>
						)}
					</Formik>
				</Card>
			</Container>
		</Root>
	);
}
