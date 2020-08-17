export function getRandomizedColor(text: string) {
	const randomColors = [
		'blue',
		'red',
		'green',
		'teal',
		'indigo',
		'pink',
		'orange',
		'yellow',
		'purple',
	];
	let total = 0;
	Array.from(text).forEach((ch, index) => {
		total += ch.charCodeAt(0) * Math.pow(2, index);
	});
	return randomColors[total % randomColors.length];
}
