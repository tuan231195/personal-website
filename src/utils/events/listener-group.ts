export class ListenerGroup {
	private listeners: (() => void)[] = [];

	addEventListener(element, event, func) {
		element.addEventListener(event, func);
		this.listeners.push(() => {
			element?.removeEventListener(event, func);
		});
	}

	unregister() {
		this.listeners.forEach((listener) => listener());
		this.listeners = [];
	}
}
