import React from 'react';

export default {
	basic: {
		name: 'Tuan Nguyen',
		githubUsername: 'tuan231195',
		avatar:
			'https://media-exp1.licdn.com/dms/image/C5103AQGbaWNuZzFiXg/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=aN91iPo88eeXRzYz5C-v-J2zzoLoS2UmmXCCKc5qqw8',
		role: 'Software Developer',
		email: 'vdtn359@gmail.com',
		phone: '0450082978',
		location: 'Hurstville, NSW',
		website: 'https://vdtn359.com',
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
				<ul className={'list-disc'}>
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
				<ul className={'list-disc'}>
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
				<ul className={'list-disc'}>
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
};
