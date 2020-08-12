import React from 'react';
import 'twin.macro';
import { ProjectMain } from '~/components/projects/ProjectMain';
import profile from '~/profile';
import { GreyBackground } from '~/components/ui/containers/Container';
import { SEO } from '~/components/common/SEO';

const ProjectPage = () => (
	<GreyBackground>
		<SEO title='Projects' />
		<ProjectMain projects={profile.projects} />
	</GreyBackground>
);

export default ProjectPage;
