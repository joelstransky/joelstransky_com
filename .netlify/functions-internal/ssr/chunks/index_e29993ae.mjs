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

				const html = await updateImageReferences("<p>The various brush shapes used in this project were supplied by a list of artists including Joshua Davis. The brushes all started as vector images and Microsoft supplied us with an early beta of their Adobe Illustrator plugin designed to convert files into a list of commands capable of drawing the shapes in an HTML5 &#x3C;canvas> tag. I was responsible for writing a script to batch process the .ai files into a .js library.</p>\n<p><a href=\"https://joshuadavis.com/the-Endless-Mural\">https://joshuadavis.com/the-Endless-Mural</a></p>");

				const frontmatter = {"title":"The Endless Mural","date":"2013-10-08T00:00:00.000Z","description":null,"image":"assets/endless-mural.jpg","tag":["illustrator"]};
				const file = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/the-endless-mural/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\nThe various brush shapes used in this project were supplied by a list of artists including Joshua Davis. The brushes all started as vector images and Microsoft supplied us with an early beta of their Adobe Illustrator plugin designed to convert files into a list of commands capable of drawing the shapes in an HTML5 &lt;canvas&gt; tag. I was responsible for writing a script to batch process the .ai files into a .js library.\r\n\r\nhttps://joshuadavis.com/the-Endless-Mural\r\n";
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
