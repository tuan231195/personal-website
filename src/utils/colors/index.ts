export function getRandomizedColor(text: string) {
	const randomColors = [
		'blue',
		'red',
		'green',
		'teal',
		'orange',
		'yellow',
		'purple',
	];
	let total = 0;
	for (const ch of text) {
		total += ch.charCodeAt(0);
	}
	return randomColors[total % randomColors.length];
}
