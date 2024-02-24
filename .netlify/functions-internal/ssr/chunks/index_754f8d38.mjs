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

				const html = await updateImageReferences("<p>My career started just out of high-school and I’m proud to say has been on a constant incline ever since. I’m exponentially more talentaned than I was back then but few experiences compare to the sense of conquest that came with making my own way in the world as a young t-shirt designer.</p>\n<p>After being hired by my mentor, I joined a studio he started and later purchased it from him. I merged that with a fellow designer when our first web design requests started rolling in. We quickly became in demand and were later absorbed by a local advertising agency.</p>\n<p>I’m happy to finally toss a stack of CD’s I’ve been lugging around the world for some reason and now offer the complete works of ArtSource1 for public consumption.</p>\n<p><a href=\"https://drive.google.com/drive/folders/1dvbqWBL5DwMl0M1sRwQ6czr4-Nx4XrEh?usp=sharing\">https://drive.google.com/drive/folders/1dvbqWBL5DwMl0M1sRwQ6czr4-Nx4XrEh?usp=sharing</a></p>");

				const frontmatter = {"title":"The Early Years 1995 - 2004","date":"2004-01-01T00:00:00.000Z","description":null,"image":"assets/living-glass.jpg","tag":["Illustrator","Photoshop","illustration","pre-press"]};
				const file = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/the-early-years/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\nMy career started just out of high-school and I'm proud to say has been on a constant incline ever since. I'm exponentially more talentaned than I was back then but few experiences compare to the sense of conquest that came with making my own way in the world as a young t-shirt designer.\r\n\r\nAfter being hired by my mentor, I joined a studio he started and later purchased it from him. I merged that with a fellow designer when our first web design requests started rolling in. We quickly became in demand and were later absorbed by a local advertising agency.\r\n\r\nI'm happy to finally toss a stack of CD's I've been lugging around the world for some reason and now offer the complete works of ArtSource1 for public consumption.\r\n\r\nhttps://drive.google.com/drive/folders/1dvbqWBL5DwMl0M1sRwQ6czr4-Nx4XrEh?usp=sharing\r\n";
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
