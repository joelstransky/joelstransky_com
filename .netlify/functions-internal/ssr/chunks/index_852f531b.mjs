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
const Astro__ZfdLM9 = {"src":"/_astro/sehra-breakdown.5578fa42.jpg","width":1200,"height":1893,"format":"jpg"};

const images = async function() {
					return {
						"assets/sehra-breakdown.jpg": await getImage({src: Astro__ZfdLM9})
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

				const html = await updateImageReferences("<p>This is the 2nd of 3 portfolio assignments that will finish off my game art degree. I created this from scratch based on a concept painting I found on deviant art courtesy of <a href=\"https://www.pinterest.com/pin/543598617494433781/\">Zephyri</a>.</p>\n<p><a href=\"https://vimeo.com/65010171\" title=\"Game Resolution Bust\"><img alt=\"Game Resolution Bust\" __ASTRO_IMAGE_=\"assets/sehra-breakdown.jpg\"></a></p>");

				const frontmatter = {"title":"Game Resolution Bust","date":"2013-10-06T00:00:00.000Z","description":null,"image":"assets/sehra-breakdown.jpg","tag":["z-brush","maya","photoshop","x-normal"]};
				const file = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/game-resolution-bust/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\nThis is the 2nd of 3 portfolio assignments that will finish off my game art degree. I created this from scratch based on a concept painting I found on deviant art courtesy of [Zephyri](https://www.pinterest.com/pin/543598617494433781/).\r\n\r\n[![Game Resolution Bust](assets/sehra-breakdown.jpg)](https://vimeo.com/65010171 'Game Resolution Bust')\r\n";
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
