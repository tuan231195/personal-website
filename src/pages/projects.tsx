import React from 'react';
import 'twin.macro';
import { ProjectMain } from '~/components/projects/ProjectMain';
import profile from '~/profile';
import { Helmet } from 'react-helmet';

const ProjectPage = () => (
	<>
		<Helmet title='Projects' defer={false} />
		<ProjectMain projects={profile.projects} />
	</>
);

export default ProjectPage;
