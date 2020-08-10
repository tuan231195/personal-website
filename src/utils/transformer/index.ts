export function slug(title: string) {
	return title.trim().toLowerCase().split(/\s+/).join('-');
}
