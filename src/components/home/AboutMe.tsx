import { ProfileSection } from '~/components/home/ProfileSection';
import React from 'react';

export function AboutMe({ about }: { about: string }) {
	return <ProfileSection header={'About Me'}>{about}</ProfileSection>;
}
