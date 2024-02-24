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
const Astro__Z25Ny8N = {"src":"/_astro/rockets1.0d4ddcd2.jpg","width":800,"height":952,"format":"jpg"};

const images = async function() {
					return {
						"assets/rockets1.jpg": await getImage({src: Astro__Z25Ny8N})
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

				const html = await updateImageReferences("<p>My website goes a long way towards demonstrating my various passions but what might not be so clear is just how desperately I want to work in the game industry. Being a military spouse so far has prevented me from living near any game studios and I’m not getting any younger. Even before my daughter was born I knew I just couldn’t live with myself wondering what if. Doubly true since someday she will tell me her dreams and I intend to say, “Go for it, just like I did.”</p>\n<p>So, now that I’ve spent 20 years working in print design, animation, programming and earning a degree in game art it’s time put up or give up.</p>\n<p>I knew building my own game is no simple task and biting off too big of a project would certainly prove too much so as a learning opportunity I chose to create a very simple game with the sole purpose of experiencing the entire cycle from planning to launching to support, promotion and general business.</p>\n<p>Being a husband, a father and a provider are unimaginably rewarding but leave little more than an hour or two each night if I’m going to be good at any of those the next day. But I stuck with it over the last 5 months and finally have a proof of concept. There’s not much to show as I’ve focused on the code first but now that I’m on to the art phase I’m very excited to announce “Don’t Explode!”</p>\n<p>I’ll be keeping the games official page updated as I make progress and hope to have some screens very soon. A special thanks to my fellow polycounters and the regulars in the #unity3d IRC for their priceless teachings.\r\n<a href=\"/dont-explode/\">View the game page here</a>.</p>\n<p><img alt=\"Announcing Don’t Explode!\" __ASTRO_IMAGE_=\"assets/rockets1.jpg\"></p>");

				const frontmatter = {"title":"Announcing Don’t Explode!","date":"2015-01-10T00:00:00.000Z","description":null,"image":"assets/dont-explode/featured.png","tag":["Maya","Unity","C#","Photoshop","AdMob"]};
				const file = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/announcing-dont-explode/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\nMy website goes a long way towards demonstrating my various passions but what might not be so clear is just how desperately I want to work in the game industry. Being a military spouse so far has prevented me from living near any game studios and I’m not getting any younger. Even before my daughter was born I knew I just couldn’t live with myself wondering what if. Doubly true since someday she will tell me her dreams and I intend to say, “Go for it, just like I did.”\r\n\r\nSo, now that I’ve spent 20 years working in print design, animation, programming and earning a degree in game art it’s time put up or give up.\r\n\r\nI knew building my own game is no simple task and biting off too big of a project would certainly prove too much so as a learning opportunity I chose to create a very simple game with the sole purpose of experiencing the entire cycle from planning to launching to support, promotion and general business.\r\n\r\nBeing a husband, a father and a provider are unimaginably rewarding but leave little more than an hour or two each night if I’m going to be good at any of those the next day. But I stuck with it over the last 5 months and finally have a proof of concept. There’s not much to show as I’ve focused on the code first but now that I’m on to the art phase I’m very excited to announce “Don’t Explode!”\r\n\r\nI’ll be keeping the games official page updated as I make progress and hope to have some screens very soon. A special thanks to my fellow polycounters and the regulars in the #unity3d IRC for their priceless teachings.\r\n[View the game page here](/dont-explode/).\r\n\r\n![Announcing Don’t Explode!](assets/rockets1.jpg)\r\n";
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
