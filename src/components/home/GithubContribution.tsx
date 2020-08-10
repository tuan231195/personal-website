import { ProfileSection } from '~/components/home/ProfileSection';
import React, { useEffect } from 'react';
import GithubCalendar from 'github-calendar';
import { styled } from 'twin.macro';

const Root = styled.div`
	.contrib-footer {
		display: none;
	}

	.wday {
		display: none;
	}
`;

export function GithubContribution({
	githubUsername,
}: {
	githubUsername: string;
}) {
	useEffect(() => {
		GithubCalendar('.github-calendar', githubUsername, {
			responsive: true,
			tooltips: true,
		});
	}, []);
	return (
		<ProfileSection header={'Github Contribution'}>
			<Root className={'github-calendar'} />
		</ProfileSection>
	);
}
