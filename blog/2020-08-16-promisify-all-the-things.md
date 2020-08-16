---
templateKey: blog-post
title: Promisify all the things
date: 2020-08-16T06:18:07.481Z
image: /img/fabrizio-conti-fsri38auqry-unsplash.jpg
tags:
  - NodeJS
  - JavaScript
  - TypeScript
---
`Promise` is a great solution to the callback hell problem in NodeJS. Unfortunately, most of the core NodeJS APIs are still using the callback style. One simple way to get around this is to use the function  `util.promisify` provided by the `util` module.

```
const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile.bind(fs));

const textContent = await readFileAsync('file.txt', { encoding: 'utf8' });
```

However, it might be tedious to promisify all the functions inside a module. In that case, this small `promisifyAll` function will come in handy.

```
const util = require('util');
const CALLBACKS = ['cb', 'callback', 'callback_', 'done'];

export function promisifyAll(module, test = defaultTest) {
	const proxy = new Proxy(module, {
		get(target: any, property: string | number | symbol): any {
			if (
				!test({ module: target, property }) ||
				typeof target[property] !== 'function'
			) {
				return target[property];
			}
			return util.promisify(target[property].bind(target));
		},
	});
	return proxy;
}

function defaultTest({ module, property }) {
	const method = module[property];
	if (typeof method !== 'function') {
		return false;
	}

	const args = getArguments(method);
	return args && CALLBACKS.includes(args[args.length - 1]);
}

function getArguments(func) {
	const args = func.toString().match(/([^(])*\(([^)]*)\)/)[2];

	// Split the arguments string into an array comma delimited.
	return args
		.split(',')
		.map((arg) => {
			// Ensure no inline comments are parsed and trim the whitespace.
			return arg.replace(/\/\*.*\*\//, '').trim();
		})
		.filter(function (arg) {
			// Ensure no undefineds are added.
			return arg;
		});
};

```

The promisifyAll function will return a promise object that wraps around the module that we want to promisify. Upon a property access, it will first check if the property is referencing a method inside the module. If it is, a simple arguments check is performed (`defaultTest`). The test will get all argument names from the method, check if the last argument matches one of the provided callback names and then call the `util.promisify` function to return the 'promise' version of that method. You can even customise the test function to suit your needs. The full source code can be found in this  [Github](https://github.com/tuan231195/vdtn359-news/blob/develop/packages/core/src/promises/promisify.ts).

You can even add the TypeScript friendly module definition after promisifying the module (Source: [Github issue](https://github.com/microsoft/TypeScript/issues/26048#issuecomment-409938947))

```
export type Callback<T> = (err: Error | null, reply: T) => void;

export type PromisifyOne<T extends any[]> = T extends [Callback<infer U>?]
	? () => Promise<U>
	: T extends [infer T1, Callback<infer P>?]
	? (arg1: T1) => Promise<P>
	: T extends [infer T1, infer T2, Callback<infer U>?]
	? (arg1: T1, arg2: T2) => Promise<U>
	: T extends [infer T1, infer T2, infer T3, Callback<infer U>?]
	? (arg1: T1, arg2: T2, arg3: T3) => Promise<U>
	: T extends [infer T1, infer T2, infer T3, infer T4, Callback<infer U>?]
	? (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<U>
	: never;

export type GetOverloadArgs<T> = T extends {
	(...o: infer U): void;
	(...o: infer U2): void;
	(...o: infer U3): void;
	(...o: infer U4): void;
	(...o: infer U5): void;
	(...o: infer U6): void;
	(...o: infer U7): void;
}
	? U | U2 | U3 | U4 | U5 | U6 | U7
	: T extends {
			(...o: infer U): void;
			(...o: infer U2): void;
			(...o: infer U3): void;
			(...o: infer U4): void;
			(...o: infer U5): void;
			(...o: infer U6): void;
	  }
	? U | U2 | U3 | U4 | U5 | U6
	: T extends {
			(...o: infer U): void;
			(...o: infer U2): void;
			(...o: infer U3): void;
			(...o: infer U4): void;
			(...o: infer U5): void;
	  }
	? U | U2 | U3 | U4 | U5
	: T extends {
			(...o: infer U): void;
			(...o: infer U2): void;
			(...o: infer U3): void;
			(...o: infer U4): void;
	  }
	? U | U2 | U3 | U4
	: T extends {
			(...o: infer U): void;
			(...o: infer U2): void;
			(...o: infer U3): void;
	  }
	? U | U2 | U3
	: T extends {
			(...o: infer U): void;
			(...o: infer U2): void;
	  }
	? U | U2
	: T extends {
			(...o: infer U): void;
	  }
	? U
	: never;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
	k: infer I
) => void
	? I
	: never;

export type Promisify<T> = UnionToIntersection<
	PromisifyOne<GetOverloadArgs<T>>
>;

export type PromisifyAll<T extends {}> = { [J in keyof T]: Promisify<T[J]> };

```

Let's see `promisifyAll `in action:

```
import { default as nodeFs } from 'fs';

const fsPromise: PromisifyAll<typeof nodeFs> = promisifyAll(nodeFs);

fsPromise.readFile('text.txt', { encoding: 'utf-8' }) // Promise<string>
fsPromise.exists('text.txt') // Promise<boolean>
```

**Happy coding!**
