import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_ff1fa04d.mjs';
import './chunks/astro_1c12762c.mjs';
import './chunks/pages/image-endpoint_5efa8f26.mjs';
import './chunks/astro-assets-services_38b437f2.mjs';
import 'stream';
import 'assert';
import 'tty';
import 'util';
import 'fs';
import 'net';
import 'http';
import 'https';
import 'url';
import 'os';
import 'path';
import 'crypto';
import 'querystring';
import 'string_decoder';
import 'buffer';
import 'node:os';
import 'node:url';
import 'node:worker_threads';
import 'module';
import 'worker_threads';
import './chunks/pages/__5bbd3823.mjs';
/* empty css                                 *//* empty css                                     */
const _page0  = () => import('./chunks/image-endpoint_e2be3713.mjs');
const _page1  = () => import('./chunks/index_a637ba4a.mjs');
const _page2  = () => import('./chunks/_.._958a7842.mjs');
const _page3  = () => import('./chunks/_.._71bb6ee8.mjs');
const _page4  = () => import('./chunks/admin_773b511f.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.1.2/node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/article/[...slug].astro", _page2],["src/pages/project/[...slug].astro", _page3],["src/pages/admin.astro", _page4]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"48fede56-3e8e-467a-8bf3-ea137246c8df"};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
