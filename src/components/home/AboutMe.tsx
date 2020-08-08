import { ProfileSection } from '~/components/home/ProfileSection';
import React from 'react';

export function AboutMe() {
	return (
		<ProfileSection header={'About Me'}>
			Write a brief intro about yourself. It&apos;s a good idea to include your
			personal interests and hobbies as well. Lorem ipsum dolor sit amet,
			consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
			massa. Cum sociis natoque penatibus et magnis dis parturient montes,
			nascetur ridiculus mus. Donec quam felis, ultricies nec. Commodo ligula
			eget dolor. Aenean massa.
		</ProfileSection>
	);
}
