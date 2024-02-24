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

				const html = await updateImageReferences("<p>When Barnes &#x26; Noble needed a whole new reading experience for children’s books they approached my previous employer, Automata Studios. Our modest team leader created a brilliant framework for the B&#x26;N team and their publishers. I’m proud to say I contributed a great deal towards the UI for this award nominated application.</p>\n<p>Barnes &#x26; Noble NOOK Kids™ Titles Nominated in Best eBook Category at Cynopsis Kids !magination Awards</p>");

				const frontmatter = {"title":"Nook Color Kids Reader","date":"2013-10-10T00:00:00.000Z","description":null,"image":"assets/nook-feature.jpg","tag":["actionscript3","javascript"]};
				const file = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/nook-color-kids-reader/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\nWhen Barnes & Noble needed a whole new reading experience for children’s books they approached my previous employer, Automata Studios. Our modest team leader created a brilliant framework for the B&N team and their publishers. I’m proud to say I contributed a great deal towards the UI for this award nominated application.\r\n\r\nBarnes & Noble NOOK Kids™ Titles Nominated in Best eBook Category at Cynopsis Kids !magination Awards\r\n";
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
