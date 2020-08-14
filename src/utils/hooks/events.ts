import { useEffect } from 'react';

const eventCache = {
	window: {},
};

function addWindowEvent(eventName, listener) {
	let cachedListeners: Array<Function> = eventCache.window[eventName];
	if (!cachedListeners) {
		cachedListeners = eventCache.window[eventName] = [];
		window.addEventListener(eventName, (e) => {
			cachedListeners.forEach((listener) => listener(e));
		});
	}
	cachedListeners.push(listener);
	return () => {
		cachedListeners = cachedListeners.filter((current) => current != listener);
	};
}

export function useWindowEvent(event, listener: Function) {
	useEffect(() => {
		return addWindowEvent(event, listener);
	}, [event, listener]);
}
