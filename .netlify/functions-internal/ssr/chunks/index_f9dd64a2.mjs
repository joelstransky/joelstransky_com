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

				const html = await updateImageReferences("<p>Owens Illinois commissioned Joshua Davis to direct an interactive experience promoting the use of recycled glass. Joshua collaborated with long time friend Branden Hall to develop a living voronoi diagram inspired by the molecular structure of glass. Each node represents a single piece of social data discussing the good part of glass.</p>\n<p>I was responsible for the flash content surrounding the diagram, filtering and rendering the actual content of each node.</p>");

				const frontmatter = {"title":"The Living Glass Conversation","date":"2013-10-09T00:00:00.000Z","description":null,"image":"assets/living-glass.jpg","tag":["actionscript3","javascript"]};
				const file = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/the-living-glass-conversation/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\nOwens Illinois commissioned Joshua Davis to direct an interactive experience promoting the use of recycled glass. Joshua collaborated with long time friend Branden Hall to develop a living voronoi diagram inspired by the molecular structure of glass. Each node represents a single piece of social data discussing the good part of glass.\r\n\r\nI was responsible for the flash content surrounding the diagram, filtering and rendering the actual content of each node.\r\n";
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
