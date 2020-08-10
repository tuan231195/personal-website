import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';
import get from 'lodash.get';

const { theme } = resolveConfig(tailwindConfig);
export default theme;

export function getValue(property: keyof typeof theme, name: string) {
	const dotName = name.replace(/-/g, '.');
	return get(theme[property], dotName);
}
