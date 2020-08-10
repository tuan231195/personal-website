import React from 'react';
import 'twin.macro';
import { ProjectMain } from '~/components/projects/ProjectMain';
import profile from '~/profile';
import { Helmet } from 'react-helmet';
import { GreyBackground } from '~/components/ui/containers/Container';

const ProjectPage = () => (
	<GreyBackground>
		<Helmet title='Projects' defer={false} />
		<ProjectMain projects={profile.projects} />
	</GreyBackground>
);

export default ProjectPage;
