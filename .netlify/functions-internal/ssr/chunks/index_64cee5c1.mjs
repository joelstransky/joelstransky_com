import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro_1c12762c.mjs';
import { b as getImage } from './pages/__5bbd3823.mjs';
/* empty css                          */import './astro-assets-services_38b437f2.mjs';
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
/* empty css                              */
const Astro__tvcKu = {"src":"/_astro/hopone-1.67166c59.png","width":1750,"height":2504,"format":"png"};

const images = async function() {
					return {
						"assets/hopone-1.png": await getImage({src: Astro__tvcKu})
					}
				};

				async function updateImageReferences(html) {
					return images().then((images) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) =>
							spreadAttributes({
								src: images[imagePath].src,
								...images[imagePath].attributes,
							})
						);
					});
				}

				const html = await updateImageReferences("<p>This was my first custom WordPress theme for a production site that featured anything other than custom styles and templates. It started out as simple UI update and became something much bigger. At one point we used the WordPress cli to create posts extracted from google docs. This was my introduction to Advanced Custom Fields as well.</p>\n<p><img alt=\"Hopone.net\" __ASTRO_IMAGE_=\"assets/hopone-1.png\"></p>");

				const frontmatter = {"title":"Hopone.net","date":"2015-04-15T00:00:00.000Z","description":null,"image":"assets/hopone-2.png","tag":["wordpress","php","mySQL","html","css","javascript"]};
				const file = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/hopone/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\nThis was my first custom WordPress theme for a production site that featured anything other than custom styles and templates. It started out as simple UI update and became something much bigger. At one point we used the WordPress cli to create posts extracted from google docs. This was my introduction to Advanced Custom Fields as well.\r\n\r\n![Hopone.net](assets/hopone-1.png)\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
