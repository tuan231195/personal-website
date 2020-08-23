---
templateKey: blog-post
title: Extend popular libraries with ES6 Proxy
date: 2020-08-13T08:29:42.176Z
image: ./josefin-ws5yjfjycny-unsplash.jpg
tags:
  - JavaScript
---
Sometimes, I find myself constrained by the limited functionalities provided by a third-party library. In these situations, I utilize the proxy method to easily extend the API of the library classes without breaking them.

Let's define a few utility functions

```typescript
export function wrap<W extends object, B>(wrapper: W, base: B): W & B {
	const proxy = new Proxy(wrapper, {
		get(target, property) {
			if (property in target) {
				return getProperty(target, property, proxy);
			}

			return getProperty(base, property, proxy);
		},
	});
	return proxy;
}

export function getProperty(object, property, proxy) {
	if (typeof object[property] === 'function' && !object[property].__proxy) {
		const oldFunction = object[property];
		object[property] = function (...args) {
			const value = oldFunction.apply(object, args);
			return value === object ? proxy : value;
		};

		(object[property] as any).__proxy = true;
	}
	return object[property];
}

```

The `wrap` method takes in 2 arguments: a wrapper object and a base object. It returns a proxy object that upon a property access will first check the property against the wrapper object. If not found, it will try to fall back to the base object to look for the property.

A sample use case where I extend the IORedis library:

```typescript
import IORedis from 'ioredis';
import { from, interval, Observable } from 'rxjs';
import { concatMap, filter, flatMap } from 'rxjs/operators';
import { proxy } from '@vdtn359/news-utils';

export type Redis = RedisWrapper & IORedis.Redis;

export class RedisWrapper {
	constructor(private readonly redis: IORedis.Redis) {}

	readStream({
		group,
		consumer,
		stream,
	}: {
		group: string;
		consumer: string;
		stream: string;
	}): Observable<any> {
		// omitted implementation
	}
}


export function connectRedis(connectOptions: IORedis.RedisOptions): Redis {
	const redis = new IORedis(connectOptions);
	const redisWrapper = new RedisWrapper(redis);
	return proxy.wrap(redisWrapper, redis);
}

const redis = connectRedis({ host: 'localhost', port: 6379 });
// redis.get('key')
// redis.readStream(...)
```

The `connectRedis` method will first attempt to create the base `ioredis` object that we want to wrap using the `connectOptions`. It will then pass the `ioredis` instance into a wrapper. After that, the `wrap` method is used to create a proxy object, which encompass all the properties and methods from the `ioredis` instance and also the `RedisWrapper` extension class that we define. 

You can find the full source code in this [github](https://github.com/tuan231195/vdtn359-news/blob/develop/packages/schema/src/redis/redis.ts).

**Happy coding!**
