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
const Astro__ZILjTg = {"src":"/_astro/kite-screen1400x560.908c2718.png","width":1400,"height":560,"format":"png"};

const images = async function() {
					return {
						"assets/kite-screen1400x560.png": await getImage({src: Astro__ZILjTg})
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

				const html = await updateImageReferences("<p>For a brief moment, Netflix tested picture-in-picture on desktop. I was very fond of the feature and sad when it was gone shortly there after. That lead me to wonder how they pulled it off in the first place and was excited to see it’s part of the chrome api. Chrome provided their own extension but it’s more of a tech demo and I didn’t like that it chose the most focused video on the page. Since the magic part is more or less a one liner, it was the perfect opportunity to learn how to create browser extensions.</p>\n<p><img alt=\"Kite Screen picture-in-picture\" title=\"Kite Screen picture-in-picture\" __ASTRO_IMAGE_=\"assets/kite-screen1400x560.png\"></p>\n<p>I was not happy with the minimal amount of vanilla javascript so I started work on a template + npm library to help make the intercommunication and publishing fun again. More on that in another post.</p>");

				const frontmatter = {"title":"Kite Screen","date":"2019-12-05T00:00:00.000Z","description":null,"image":"assets/kite-screen440x280.png","tag":["chrome","extension","picture-in-picture","html","css","javascript"]};
				const file = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/kite-screen/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\nFor a brief moment, Netflix tested picture-in-picture on desktop. I was very fond of the feature and sad when it was gone shortly there after. That lead me to wonder how they pulled it off in the first place and was excited to see it's part of the chrome api. Chrome provided their own extension but it's more of a tech demo and I didn't like that it chose the most focused video on the page. Since the magic part is more or less a one liner, it was the perfect opportunity to learn how to create browser extensions.\r\n\r\n![Kite Screen picture-in-picture][pip]\r\n\r\n[pip]: assets/kite-screen1400x560.png 'Kite Screen picture-in-picture'\r\n\r\nI was not happy with the minimal amount of vanilla javascript so I started work on a template + npm library to help make the intercommunication and publishing fun again. More on that in another post.\r\n";
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
