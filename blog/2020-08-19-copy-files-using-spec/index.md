---
templateKey: blog-post
title: Copy files using spec
date: 2020-08-19T02:19:12.617Z
image: ./sebastian-unrau-cod2q92uaeg-unsplash.jpg
tags:
  - NodeJS
  - JavaScript
---
Copy files during the build is a common task in every project. `Webpack` already has a common plugin [CopyWebpackPlugin ](https://webpack.js.org/plugins/copy-webpack-plugin/)to handle that. Highly inspired by this plugin, I created this [cpyspec](https://github.com/tuan231195/cpyspec) package to copy files using a specific set of instructions for non `Webpack` projects.

The usage is really simple. You just need to create a `copySpec`field inside your `package.json:`

```
"copySpec": {
  verbose: true,
  progress: true,
  files: [
      {
          from: 'package.json',
          to: 'build/package.json'
      },
      {
          from: '**/*.js',
          to: 'build',
          context: 'src'
      }
  ]
}
```

The options you can specify are:

* **verbose:** Whether to display all copied files. Default to false
* **progress:** Whether to show progress bar while copying
* **files:** The files to be copied

Each file configuration contains one of the following fields:

* **from**: The glob pattern that specifies the files to be copied
* **to**: The destination of the copy operation
* **context**: Where to look for the source files
* **exclude**: Which files to be excluded
* **flatten**: Whether to flatten the source files

Here is a sample usage of the tool:

```typescript
"copySpec": {
    "verbose": true,
    "files": [
        {
            "from": ".npmrc",
            "context": "../..",
            "to": "package"
        },
        {
            "from": "package-lock.json",
            "context": "../..",
            "to": "package"
        },
        {
            "from": ".ebextensions",
            "to": "package"
        },
        {
            "from": "config",
            "to": "package"
        },
        {
            "from": "**/*",
            "context": "build",
            "to": "package"
        }
	]
}
```

Upon running `cpyspec`, it will copy all the listed files to the specified folder:

```shell
❯ npx cpyspec
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/.npmrc
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/package-lock.json
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/.ebextensions/00-disable-npm.config
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/.ebextensions/01-monitor-memory-usage.config
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/.ebextensions/02-elk-logging.config
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/config/default.js
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/config/development.js
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/config/production.js
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/config/staging.js
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/config/test.js
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/config/uat.js
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/app.js
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/env.js
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/setup.js
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/builders/builder.js
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/builders/identity.js
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/builders/index.js
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/builders/setting.js
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/builders/user.js
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/lib/decrypt.js
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/lib/jsonpaths.js
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/lib/limiter.js
Copied /home/vdtn359/Work/sso/app/sso-piierre/package/lib/utils.js
Copied 23 in 66ms
Completed!

❯ tree
.
├── app.js
├── builders
│   ├── builder.js
│   ├── identity.js
│   ├── index.js
│   ├── setting.js
│   └── user.js
├── config
│   ├── default.js
│   ├── development.js
│   ├── production.js
│   ├── staging.js
│   ├── test.js
│   └── uat.js
├── env.js
├── lib
│   ├── decrypt.js
│   ├── jsonpaths.js
│   ├── limiter.js
│   └── utils.js
├── package-lock.json
└── setup.js
```

Hope you will find it useful

**Happy coding!**
