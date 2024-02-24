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
const Astro__ZIiiIu = {"src":"/_astro/cultureplayer.0937e086.png","width":779,"height":227,"format":"png"};

const images = async function() {
					return {
						"assets/cultureplayer.png": await getImage({src: Astro__ZIiiIu})
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

				const html = await updateImageReferences("<p>Before we called them <em>“angel investors”</em>, threw around words like <em>“runway”</em> or flocked to Y-Combinator I had nothing to disrupt. A friend of mine voiced how he’d like to be able to make playlists for visitors to his <em><em>myspace</em></em> 👴 page.</p>\n<p>I designed a skewmorphic faceplate based on car stereo’s of the 90’s (sorry, no pics available) in Flash and loaded streams from a few predecessors to <em><em>cloud storage</em></em> like FileLodge and Snapdrive. It was an immediate hit and demand came rolling in. My brother built an amazing backend back when we had to manage our own LAMP stacks and I refactored the front end as a web client and we formed an LLC.</p>\n<p><img alt=\"Culture Player header\" __ASTRO_IMAGE_=\"assets/cultureplayer.png\"></p>\n<p>We used a freemium version of the Apple model paywall where small and large exist to push the medium. Surprisingly sales of all sizes started rolling in. In a time when the RIAA was suing left and right over napster collections, we were treading in some uncharted territory. The gray area between being a file host and paying for re-broadcast was a legal shadow that ultimately punished us for being ahead of our time.</p>\n<p>In later years we would see media sharing en mass with the launch of youtube, soundcloud, cheap CDNs and REST api’s. Years later my brother and I reconvened to discuss a reboot using nothing but existing api’s like youtube music and soundcloud but offer a far better matching algorithm. Spotify came out shortly after that and the idea faded.</p>");

				const frontmatter = {"title":"Cultureplayer.com","date":"2007-01-01T00:00:00.000Z","description":null,"image":"assets/cultureplayer-1.png","tag":["Adobe Flash","Illustrator","Actionscript","PHP","MySQL"]};
				const file = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/cultureplayer/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\nBefore we called them _\"angel investors\"_, threw around words like _\"runway\"_ or flocked to Y-Combinator I had nothing to disrupt. A friend of mine voiced how he'd like to be able to make playlists for visitors to his _*myspace*_ 👴 page.\r\n\r\nI designed a skewmorphic faceplate based on car stereo's of the 90's (sorry, no pics available) in Flash and loaded streams from a few predecessors to _*cloud storage*_ like FileLodge and Snapdrive. It was an immediate hit and demand came rolling in. My brother built an amazing backend back when we had to manage our own LAMP stacks and I refactored the front end as a web client and we formed an LLC.\r\n\r\n![Culture Player header](assets/cultureplayer.png)\r\n\r\nWe used a freemium version of the Apple model paywall where small and large exist to push the medium. Surprisingly sales of all sizes started rolling in. In a time when the RIAA was suing left and right over napster collections, we were treading in some uncharted territory. The gray area between being a file host and paying for re-broadcast was a legal shadow that ultimately punished us for being ahead of our time.\r\n\r\nIn later years we would see media sharing en mass with the launch of youtube, soundcloud, cheap CDNs and REST api’s. Years later my brother and I reconvened to discuss a reboot using nothing but existing api’s like youtube music and soundcloud but offer a far better matching algorithm. Spotify came out shortly after that and the idea faded.\r\n";
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
