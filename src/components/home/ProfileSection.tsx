import React from 'react';
import 'twin.macro';
import { Card } from '~/components/ui/containers/Card';

export function ProfileSection({ children, header = '' }) {
	return (
		<Card>
			{!!header && <h5 tw={'type-h6 text-gray-700 mb-4'}>{header}</h5>}
			<span>{children}</span>
		</Card>
	);
}
