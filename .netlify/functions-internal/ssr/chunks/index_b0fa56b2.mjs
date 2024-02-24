import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro_1c12762c.mjs';
import './pages/__5bbd3823.mjs';
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
const images = async function() {
					return {
						
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

				const html = await updateImageReferences("<p>I needed some hard surface modeling practice and got really excited about after seeing some killer stuff by some peers. So why not choose something I’m also a big fan of. Thanks to this stuff I’ve eliminated soda from my diet. This is a near finished work in progress so I’ll update this post with some progress shots and wire-frames in a bit.</p>");

				const frontmatter = {"title":"MiO bottle product shot","date":"2013-09-11T00:00:00.000Z","description":null,"image":"assets/mio-18.jpg","tag":["z-brush","maya","photoshop","x-normal"]};
				const file = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/mio-bottle-product-shot/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\nI needed some hard surface modeling practice and got really excited about after seeing some killer stuff by some peers. So why not choose something I’m also a big fan of. Thanks to this stuff I’ve eliminated soda from my diet. This is a near finished work in progress so I’ll update this post with some progress shots and wire-frames in a bit.\r\n";
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
