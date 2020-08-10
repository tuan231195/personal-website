import React from 'react';
import 'twin.macro';
import { Badge } from '~/components/ui/misc/Badge';
import { getRandomizedColor } from '~/utils/colors';

export function ColorBadge({ text, ...props }) {
	return (
		<Badge {...props} color={getRandomizedColor(text)}>
			{text}
		</Badge>
	);
}
