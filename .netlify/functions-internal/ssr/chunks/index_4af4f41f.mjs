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
const Astro__wVbqy = {"src":"/_astro/lip-sync.91d569fb.jpg","width":480,"height":360,"format":"jpg"};

const images = async function() {
					return {
						"assets/lip-sync.jpg": await getImage({src: Astro__wVbqy})
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

				const html = await updateImageReferences("<p>This is a lip syncing project I did for school. I found it fascinating that the process of laying out key frames is as much an acting performance as it is technical know how.</p>\n<p><a href=\"https://www.youtube.com/watch?v=7GlXELuugZU\" title=\"Lip Sync Animation Test\"><img alt=\"Lip Sync Animation Test\" __ASTRO_IMAGE_=\"assets/lip-sync.jpg\"></a></p>");

				const frontmatter = {"title":"Lip Sync Animation Test","date":"2013-07-17T00:00:00.000Z","description":null,"image":"assets/lip-sync.jpg","tag":["z-brush","maya","photoshop","x-normal"]};
				const file = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/lip-sync-animation-test/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\nThis is a lip syncing project I did for school. I found it fascinating that the process of laying out key frames is as much an acting performance as it is technical know how.\r\n\r\n[![Lip Sync Animation Test](assets/lip-sync.jpg)](https://www.youtube.com/watch?v=7GlXELuugZU 'Lip Sync Animation Test')\r\n";
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
