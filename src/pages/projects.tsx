import React from 'react';
import 'twin.macro';
import { ProjectMain } from '~/components/projects/ProjectMain';
import profile from '~/profile';

const ProjectPage = () => (
	<>
		<ProjectMain projects={profile.projects} />
	</>
);

export default ProjectPage;
