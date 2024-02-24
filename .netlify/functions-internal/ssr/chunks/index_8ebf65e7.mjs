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
const Astro__Z1ArLG7 = {"src":"/_astro/griffon-breakdown.a19a24af.jpg","width":1203,"height":1920,"format":"jpg"};

const images = async function() {
					return {
						"assets/griffon-breakdown.jpg": await getImage({src: Astro__Z1ArLG7})
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

				const html = await updateImageReferences("<p>This is the last project I did for school. The concept is courtesy of Gary Shuko. I sculpted, retopologized, UV’d and painted this from scratch.</p>\n<p><img alt=\"alt text\" title=\"The Griffon Breakdown\" __ASTRO_IMAGE_=\"assets/griffon-breakdown.jpg\"></p>");

				const frontmatter = {"title":"The Griffon","date":"2013-07-17T00:00:00.000Z","description":null,"image":"assets/griffon.jpg","tag":["z-brush","maya","photoshop","x-normal"]};
				const file = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/the-griffon/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\nThis is the last project I did for school. The concept is courtesy of Gary Shuko. I sculpted, retopologized, UV’d and painted this from scratch.\r\n\r\n![alt text][logo]\r\n\r\n[logo]: assets/griffon-breakdown.jpg 'The Griffon Breakdown'\r\n";
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
