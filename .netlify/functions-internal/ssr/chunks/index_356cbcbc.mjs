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

				const html = await updateImageReferences("<p>I’m probably the least productive blogger in the tech world but a major figure in my life has died and its worth explaining why this one means more than others.</p>\n<p>The more time I spend with technology, the less of a fanboy I become. There’s simply no point in manufacturer loyalty. Better options will come along and there should be no qualms about switching brands. I share this mentality with most of my friends on and offline which left some of them confused as to how moved I was at Steve Jobs’ passing.</p>\n<p>It all stems from a pivotal time in my youth. Fresh out of high school I was academically average and lacking a lucrative skill set. I had specific career goals but no real reason to believe I could achieve them. To paint a picture, this was at the dawn of the internet and the most advanced computer class offered was WordPerfect. The local community college was offering a two year graphics arts degree program which is where I first used a Mac for anything but text entry. I’d never been among the best but for some reason I excelled. I acquired a mac to continue learning and that’s where I my love began.</p>\n<p>Every time I wanted to advance, that mac was capable of letting me. Every time I learned something new, I felt more self confidence. With new courage I tried more things and the mac was always ready. This cycle repeated itself until I found myself firmly on the road to fulfilling my dreams of working in what was at the time, a cutting edge version of the creative industry. This was at a time when the latest graphics applications simply weren’t available for windows.</p>\n<p>I was far from a computer scientist yet I was able to interact with very high end technology on an effective level. While a long line of great thinkers are responsible for the opportunity, it took someone dedicated to making it accessible in order for me to grow into myself. It took someone who refused to settle, someone who refused to accept that functional was the same as usable. It’s a rare person who can be faced with fame and financial success and remain focused on making life better. He made it better for me.</p>\n<p>Thank you Steve, for everything.</p>");

				const frontmatter = {"title":"What Steve Jobs meant to me","date":"2011-10-25T00:00:00.000Z","description":null,"image":"assets/stevejobs.webp","tag":["Steve Jobs","thoughts"]};
				const file = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/what-steve-jobs-meant-to-me/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\nI’m probably the least productive blogger in the tech world but a major figure in my life has died and its worth explaining why this one means more than others.\r\n\r\nThe more time I spend with technology, the less of a fanboy I become. There’s simply no point in manufacturer loyalty. Better options will come along and there should be no qualms about switching brands. I share this mentality with most of my friends on and offline which left some of them confused as to how moved I was at Steve Jobs’ passing.\r\n\r\nIt all stems from a pivotal time in my youth. Fresh out of high school I was academically average and lacking a lucrative skill set. I had specific career goals but no real reason to believe I could achieve them. To paint a picture, this was at the dawn of the internet and the most advanced computer class offered was WordPerfect. The local community college was offering a two year graphics arts degree program which is where I first used a Mac for anything but text entry. I’d never been among the best but for some reason I excelled. I acquired a mac to continue learning and that’s where I my love began.\r\n\r\nEvery time I wanted to advance, that mac was capable of letting me. Every time I learned something new, I felt more self confidence. With new courage I tried more things and the mac was always ready. This cycle repeated itself until I found myself firmly on the road to fulfilling my dreams of working in what was at the time, a cutting edge version of the creative industry. This was at a time when the latest graphics applications simply weren’t available for windows.\r\n\r\nI was far from a computer scientist yet I was able to interact with very high end technology on an effective level. While a long line of great thinkers are responsible for the opportunity, it took someone dedicated to making it accessible in order for me to grow into myself. It took someone who refused to settle, someone who refused to accept that functional was the same as usable. It’s a rare person who can be faced with fame and financial success and remain focused on making life better. He made it better for me.\r\n\r\nThank you Steve, for everything.\r\n";
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
