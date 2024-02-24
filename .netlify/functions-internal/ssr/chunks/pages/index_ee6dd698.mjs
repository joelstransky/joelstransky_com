/* empty css                           */import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, j as renderComponent } from '../astro_1c12762c.mjs';
import { $ as $$Image, g as getCollection, a as $$Layout } from './__5bbd3823.mjs';
import '../astro-assets-services_38b437f2.mjs';
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
/* empty css                               */
const $$Astro$2 = createAstro("https://minimma.vercel.app");
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { slug, title, image, tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<figure class="shrink-0 w-full relative"><div class="relative"><a${addAttribute(`/article/${slug}`, "href")} class="no-underline relative block"${addAttribute(title, "aria-label")}><span class="relative block transition duration-500 ease-in-out transform rounded hover:scale-105">${renderComponent($$result, "Image", $$Image, { "width": 384, "class": "relative block object-contain object-center w-full h-full", "loading": "lazy", "alt": title, "src": image })}</span></a><div class="pb-0 px-0 py-2"><h3 class="text-black text-xl my-2"><a${addAttribute(`/article/${slug}`, "href")} class="no-underline relative inline-block"${addAttribute(title, "aria-label")}>${title}</a></h3><p class="text-sm mb-6 m-0 text-red-600 relative">${tags.join(", ")}</p></div></div></figure>`;
}, "C:/Users/stran/Documents/Work/joelstransky_com/src/components/Card.astro", void 0);

const $$Astro$1 = createAstro("https://minimma.vercel.app");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-end"><div class="max-w-xl pr-5"><div class="relative mt-5 mb-0"><h2 class="font-light text-4xl -tracking-wider mt-0 mb-8 mx-0"><span class="text-[1.5em]">Front End Developer, UI & UX Designer, Game Artist</span></h2><!-- <h4 class="leading-7 text-base mt-0 mb-4 mx-0">
        <span class="opacity-60">Find inspiration from Paris and create elegant and sophisticated pieces, working with manufacturers to produce and sell garments through various channels.</span>
      </h4> --></div></div></div>`;
}, "C:/Users/stran/Documents/Work/joelstransky_com/src/components/Hero.astro", void 0);

const $$Astro = createAstro("https://minimma.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allArticles = await getCollection("articles");
  const articles = allArticles.sort((a, b) => {
    return b.data.date.getTime() - a.data.date.getTime();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="relative"><div class="mx-auto px-8 md:max-w-7xl">${renderComponent($$result2, "Hero", $$Hero, {})}<div class="relative w-full mt-5 mb-10"><div class="clear-both relative"><div class="grid flex-wrap items-start grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 portfolio gap-8">${articles.map((article, index) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "index": index + 1, "slug": article.slug, "title": article.data.title, "image": article.data.image, "tags": article.data.tag })}`)}</div></div></div></div></div>` })}`;
}, "C:/Users/stran/Documents/Work/joelstransky_com/src/pages/index.astro", void 0);

const $$file = "C:/Users/stran/Documents/Work/joelstransky_com/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
