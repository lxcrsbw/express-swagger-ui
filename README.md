# @lxsbw/express-swagger-ui [![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/@lxsbw/express-swagger-ui.svg
[npm-url]: https://npmjs.org/package/@lxsbw/express-swagger-ui

> Host swagger ui at a given directory from your express app

Inspired by:

- [koa2-swagger-ui](https://github.com/scttcper/koa2-swagger-ui)
- [swagger-injector](https://github.com/johnhof/swagger-injector) for serving on a specific route
- [hapi-swaggered-ui](https://github.com/z0mt3c/hapi-swaggered-ui) for serving files from node_modules using a handlebars driven index.html

## install

```
npm install @lxsbw/express-swagger-ui --save
```

## config

for more swaggerOptions see [swagger-ui](https://github.com/swagger-api/swagger-ui#swaggerui)
defaults:

```javascript
title: 'swagger', // page title
oauthOptions: {}, // passed to initOAuth
swaggerOptions: { // passed to SwaggerUi()
  dom_id: 'swagger-ui-container',
  url: 'http://petstore.swagger.io/v2/swagger.json', // link to swagger.json
  supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
  docExpansion: 'none',
  jsonEditor: false,
  defaultModelRendering: 'schema',
  showRequestHeaders: false,
  swaggerVersion: 'x.x.x' // read from package.json,
},
routePrefix: '/docs', // route where the view is returned
hideTopbar: false, // hide swagger top bar
favicon16: '/favicon-16x16.png', // default icon 16x16, set for self icon
favicon32: '/favicon-32x32.png', // default icon 32x32, set for self icon
```

## example

```javascript
import * as express from 'express';
import { expressSwagger } from '@lxsbw/express-swagger-ui';

const app = express();

app.use(
  expressSwagger({
    routePrefix: '/swagger', // host at /swagger instead of default /docs
    swaggerOptions: {
      url: 'http://petstore.swagger.io/v2/swagger.json', // example path to json
    },
  }),
);

app.listen(3000);
```

## Remarks

提供给express-joi-swagger-ts使用，修改了模块导出方式
