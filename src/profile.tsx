import React from 'react';

export default {
	basic: {
		name: 'Tuan Nguyen',
		githubUsername: 'tuan231195',
		avatar:
			'https://ik.imagekit.io/emtg9z3bqr/tr:h-160,w-160/avatar_cubwNe2pI.jpeg',
		role: 'Software Developer',
		email: 'vdtn359@gmail.com',
		phone: '0450082978',
		location: 'Hurstville, NSW',
		website: 'https://vdtn359.com.au',
		github: 'https://github.com/tuan231195',
		linkedin: 'https://www.linkedin.com/in/van-do-tuan-nguyen/',
		facebook: 'https://www.facebook.com/vo.hoc.2311',
	},
	about:
		'An adaptable and highly motivated programmer with a Bachelor in Computer Science from the University of Wollongong looking for a Developer position. My ultimate goal is to develop high-quality applications that can facilitate people’s daily activities. I possess strong expertise in Java, SQL, and JavaScript and now looking to apply these skills to a new position within a dynamic\n' +
		'company.',
	education: [
		{
			study: 'Bachelor Of Computer Science',
			period: '2014-2016',
			school: 'University of Wollongong',
		},
		{
			study: 'Mathematics',
			period: '2010-2013',
			school: 'Hanoi Amsterdam High School',
		},
	],
	work: [
		{
			role: 'Software Engineer',
			company: 'Nine',
			period: '10/2019 - Present',
			description: (
				<ul className={'list-colored'}>
					<li>
						Maintaining a highly scalable single sign on system for 9Now apps
					</li>
					<li>
						Developing a dashboard app to help manage millions of users using
						serverless technologies
					</li>
					<li>Creating terraform stacks to provision AWS resources</li>
					<li>Improved a downstream system by 20 fold</li>
				</ul>
			),
		},
		{
			role: 'Full Stack Web Developer',
			company: 'Accelo',
			period: '8/2017 - 10/2019',
			description: (
				<ul className={'list-colored'}>
					<li>
						Debugged and resolving 2-3 issues a day accurately and in a timely
						manner using Jira
					</li>
					<li>
						{' '}
						Became one of the main JavaScript developers, responsible for
						developing and enhancing build tools{' '}
					</li>
					<li> Maintained a sophisticated back-end system written in Perl </li>
				</ul>
			),
		},
		{
			role: 'Software Engineer',
			company: 'Itree Pty Ltd',
			period: '7/2016 - 8/2017',
			description: (
				<ul className={'list-colored'}>
					<li>
						Engaged in various stages of the software development life-cycle
						including design, development, and testing
					</li>
					<li>
						Acquired advanced object-oriented skills by participating in the
						design and development of software components
					</li>
					<li>
						Gained a better understanding of customer expectations and how to
						meet their needs
					</li>
					<li>
						Demonstrated multi-tasking and problem-solving abilities by working
						on a range of tasks as required
					</li>
				</ul>
			),
		},
	],
	skills: [
		{
			name: 'JavaScript',
			value: 9,
		},
		{
			name: 'SQL',
			value: 8,
		},
		{
			name: 'Java',
			value: 8,
		},
		{
			name: 'Devops',
			value: 7,
		},
	],
	languages: [
		{
			name: 'English',
			desc: 'Professional Profiency',
			rating: 3.5,
		},
		{
			name: 'Vietnamese',
			desc: 'Native Speaker',
			rating: 5,
		},
	],
	awards: [
		{
			name: "Dean's Merit List",
			desc: 'Being in the top 5% of undergraduate students',
			year: '2015, 2016, 2017',
		},
		{
			name: 'Richard Miller Prize',
			desc:
				'For outstanding academic record in the third year of a Bachelor of Computer Science',
			year: '2017',
		},
		{
			name: 'Ross Nealon Prize',
			desc:
				'For outstanding academic record in the second year of a Bachelor of Computer Science',
			year: '2016',
		},
		{
			name: 'Golden Key Society Member',
			desc: 'Being in the top 15% of the university',
			year: 2015,
		},
	],
	projects: [
		{
			name: `Tuan's news`,
			description:
				'A simple PWA application that collects news from multiple sources and combines them into a single website',
			tags: ['React', 'AWS', 'NodeJS', 'ElasticSearch', 'Redis'],
			source: 'https://github.com/tuan231195/vdtn359-news',
			link: 'https://vdtn359.com',
		},
		{
			name: `Personal website`,
			description: 'My personal website and blog created using Gatsby',
			tags: ['React', 'Gatsby', 'Netlify', 'Algolia'],
			source: 'https://github.com/tuan231195/personal-website',
			link: 'https://vdtn359.com.au',
		},
		{
			name: 'Yup decorators',
			description:
				'An NPM package that adds TypeScript decorators support for the popular validation library Yup',
			tags: ['Yup', 'TypeScript'],
			source: 'https://github.com/tuan231195/yup-decorator',
		},
		{
			name: 'Sportywide Web',
			description:
				'A Web application that fetches sport data from multiple websites and allows users to make betting on player performances',
			tags: ['React', 'AWS', 'NestJS', 'PostgresQL', 'Redis'],
			source: 'https://github.com/sportywide/Sporty-Wide-Web',
		},
		{
			name: 'ACIS 2016',
			description: (
				<div>
					A mobile web application that was used by the &nbsp;
					<strong>Australasian Conferences on Information Systems</strong>{' '}
					(ACIS) 2016.
				</div>
			),
			tags: ['Java', 'PHP'],
			link: 'https://apkpure.com/ar/acis-2016/au.com.leremede.acis2016',
		},
		{
			name: 'Change Log Generator',
			description: (
				<div>
					A Java FX application that is used to generate Liquibase XML change
					logs and SQL DDL statements.
				</div>
			),
			source: 'https://github.com/tuan231195/change-log-generator-gui',
			tags: ['Java', 'JavaFX'],
		},
		{
			name: 'Money calculator',
			description:
				'A simple application that can used to calculate the expenses and money transfers',
			tags: ['Angular', 'Firebase'],
			source: 'https://github.com/tuan231195/money-calculator',
			link: 'https://overconfident-mailbox.surge.sh',
		},
	],
};
