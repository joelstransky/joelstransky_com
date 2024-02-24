/* empty css                           */import { c as createAstro, b as createComponent, A as AstroError, d as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, f as UnknownContentCollectionError, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, j as renderComponent, u as unescapeHTML, F as Fragment, k as renderHead, l as renderSlot } from '../astro_1c12762c.mjs';
import { g as getImage$1, p as prependForwardSlash } from '../astro-assets-services_38b437f2.mjs';
/* empty css                               */
const $$Astro$7 = createAstro("https://minimma.vercel.app");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(image.attributes)}>`;
}, "C:/Users/stran/Documents/Work/joelstransky_com/node_modules/.pnpm/astro@3.1.2/node_modules/astro/components/Image.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/squoosh","config":{}},"domains":[],"remotePatterns":[]};
					const getImage = async (options) => await getImage$1(options, imageConfig);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      return warnOfEmptyCollection(collection);
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function")
      return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}
function warnOfEmptyCollection(collection) {
  return {
    name: "astro-collection",
    hooks: {
      "astro:server:start": ({ logger }) => {
        logger.warn(
          `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
        );
      }
    }
  };
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/articles/announcing-dont-explode/index.md": () => import('../index_44bd9d96.mjs'),"/src/content/articles/cultureplayer/index.md": () => import('../index_4f11f3a8.mjs'),"/src/content/articles/dont-explode/index.mdx": () => import('../index_8c1ed527.mjs'),"/src/content/articles/game-resolution-bust/index.md": () => import('../index_ae3e0da8.mjs'),"/src/content/articles/hopone/index.md": () => import('../index_3b21a679.mjs'),"/src/content/articles/kite-screen/index.md": () => import('../index_55d7cb2e.mjs'),"/src/content/articles/lip-sync-animation-test/index.md": () => import('../index_3dd2de63.mjs'),"/src/content/articles/military-adaptive-sports-program/index.mdx": () => import('../index_df3898d2.mjs'),"/src/content/articles/mio-bottle-product-shot/index.md": () => import('../index_90551551.mjs'),"/src/content/articles/nook-color-kids-reader/index.md": () => import('../index_7be6eb9b.mjs'),"/src/content/articles/superb/index.mdx": () => import('../index_d9c93695.mjs'),"/src/content/articles/the-early-years/index.md": () => import('../index_81076c93.mjs'),"/src/content/articles/the-endless-mural/index.md": () => import('../index_991fd4ba.mjs'),"/src/content/articles/the-griffon/index.md": () => import('../index_e44a51a3.mjs'),"/src/content/articles/the-living-glass-conversation/index.md": () => import('../index_56497ca1.mjs'),"/src/content/articles/uh-office-of-human-resources/index.mdx": () => import('../index_a1b44d12.mjs'),"/src/content/articles/uh-office-of-title-ix/index.mdx": () => import('../index_b0247f8f.mjs'),"/src/content/articles/what-steve-jobs-meant-to-me/index.md": () => import('../index_e2084f97.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/settings/footer.json": () => import('../footer_bcfdfc95.mjs'),"/src/content/settings/general.json": () => import('../general_2f946284.mjs'),"/src/content/settings/project.json": () => import('../project_7c2492d4.mjs')

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"settings":{"type":"data","entries":{"footer":"/src/content/settings/footer.json","general":"/src/content/settings/general.json","project":"/src/content/settings/project.json"}},"articles":{"type":"content","entries":{"announcing-dont-explode":"/src/content/articles/announcing-dont-explode/index.md","cultureplayer":"/src/content/articles/cultureplayer/index.md","dont-explode":"/src/content/articles/dont-explode/index.mdx","game-resolution-bust":"/src/content/articles/game-resolution-bust/index.md","military-adaptive-sports-program":"/src/content/articles/military-adaptive-sports-program/index.mdx","lip-sync-animation-test":"/src/content/articles/lip-sync-animation-test/index.md","kite-screen":"/src/content/articles/kite-screen/index.md","hopone":"/src/content/articles/hopone/index.md","mio-bottle-product-shot":"/src/content/articles/mio-bottle-product-shot/index.md","nook-color-kids-reader":"/src/content/articles/nook-color-kids-reader/index.md","superb":"/src/content/articles/superb/index.mdx","the-griffon":"/src/content/articles/the-griffon/index.md","the-endless-mural":"/src/content/articles/the-endless-mural/index.md","the-early-years":"/src/content/articles/the-early-years/index.md","uh-office-of-human-resources":"/src/content/articles/uh-office-of-human-resources/index.mdx","the-living-glass-conversation":"/src/content/articles/the-living-glass-conversation/index.md","uh-office-of-title-ix":"/src/content/articles/uh-office-of-title-ix/index.mdx","what-steve-jobs-meant-to-me":"/src/content/articles/what-steve-jobs-meant-to-me/index.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/articles/announcing-dont-explode/index.md": () => import('../index_c69dfb47.mjs'),"/src/content/articles/cultureplayer/index.md": () => import('../index_1074a5c3.mjs'),"/src/content/articles/dont-explode/index.mdx": () => import('../index_b1c2e92d.mjs'),"/src/content/articles/game-resolution-bust/index.md": () => import('../index_79e47df0.mjs'),"/src/content/articles/hopone/index.md": () => import('../index_b884ae4f.mjs'),"/src/content/articles/kite-screen/index.md": () => import('../index_ba5fc29e.mjs'),"/src/content/articles/lip-sync-animation-test/index.md": () => import('../index_955e66cd.mjs'),"/src/content/articles/military-adaptive-sports-program/index.mdx": () => import('../index_e6dd89ad.mjs'),"/src/content/articles/mio-bottle-product-shot/index.md": () => import('../index_2b91973b.mjs'),"/src/content/articles/nook-color-kids-reader/index.md": () => import('../index_ed4ced36.mjs'),"/src/content/articles/superb/index.mdx": () => import('../index_42e5843f.mjs'),"/src/content/articles/the-early-years/index.md": () => import('../index_c789b353.mjs'),"/src/content/articles/the-endless-mural/index.md": () => import('../index_1d441cfb.mjs'),"/src/content/articles/the-griffon/index.md": () => import('../index_008a6198.mjs'),"/src/content/articles/the-living-glass-conversation/index.md": () => import('../index_08df1fc6.mjs'),"/src/content/articles/uh-office-of-human-resources/index.mdx": () => import('../index_fbcca112.mjs'),"/src/content/articles/uh-office-of-title-ix/index.mdx": () => import('../index_c6b30fdb.mjs'),"/src/content/articles/what-steve-jobs-meant-to-me/index.md": () => import('../index_1dea1395.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$6 = createAstro("https://minimma.vercel.app");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/stran/Documents/Work/joelstransky_com/node_modules/.pnpm/astro@3.1.2/node_modules/astro/components/ViewTransitions.astro", void 0);

const userAgents = [
  // this must always be the first element here!
  {
    name: "woff",
    ua: "Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko"
  },
  // from: https://github.com/fontsource/google-font-metadata/blob/main/data/user-agents.json
  {
    name: "woff2",
    ua: 'Mozilla/5.0 (Windows NT 6.3; rv:39.0) Gecko/20100101 Firefox/44.0"'
  }
];
function downloadFontCSS(url) {
  const fontDownloads = Promise.all(
    userAgents.map((entry) => {
      return fetch(url, { headers: { "User-Agent": entry.ua } }).then((res) => res.text()).then(
        (t) => t.replace(/  +/g, "").replace(/\t+/g, "").replace(/\n+/g, "")
      );
    })
  );
  return fontDownloads.then((contents) => contents.join(" "));
}

const $$Astro$5 = createAstro("https://minimma.vercel.app");
const $$GoogleFontsOptimizer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$GoogleFontsOptimizer;
  const props = Astro2.props;
  const urls = Array.isArray(props.url) ? props.url : [props.url];
  const contents = await Promise.all(urls.map((url) => downloadFontCSS(url)));
  return renderTemplate`${contents.length > 0 && renderTemplate`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">`}${contents.map(
    (styles) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<style type="text/css">${unescapeHTML(styles)}</style>` })}`
  )}`;
}, "C:/Users/stran/Documents/Work/joelstransky_com/node_modules/.pnpm/astro-google-fonts-optimizer@0.2.2/node_modules/astro-google-fonts-optimizer/GoogleFontsOptimizer.astro", void 0);

const $$Astro$4 = createAstro("https://minimma.vercel.app");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  const general = await getEntry("settings", "general");
  return renderTemplate`${maybeRenderHead()}<header class="block relative"><div class="flex flex-col"><div class="flex flex-col w-full mx-auto px-8 py-16 md:max-w-7xl"><div class="flex grow flex-wrap"><a href="/" class="flex w-auto basis-0 grow min-w-0 max-w-full items-center flex-[0_0_auto] gap-6"><span class="text-2xl font-light -tracking-wider">${general.data.title}</span></a></div></div></div></header>`;
}, "C:/Users/stran/Documents/Work/joelstransky_com/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro("https://minimma.vercel.app");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const general = await getEntry("settings", "general");
  const footer = await getEntry("settings", "footer");
  return renderTemplate`${maybeRenderHead()}<footer class="block relative bg-zinc-200/60 w-full text-center py-32"><div class="mx-auto px-8 md:max-w-7xl"><div class="flex justify-center gap-8 mb-8">${footer.data.socials.map((social) => renderTemplate`<a${addAttribute(social.link, "href")} class="no-underline relative inline-block"${addAttribute(social.name, "title")}${addAttribute(social.name, "aria-label")} rel="noopener"><span>${unescapeHTML(social.name)}</span></a>`)}</div><p class="m-0 opacity-60"><span>&copy; Copyright&nbsp;</span><span>${general.data.title}&nbsp;</span><span>${unescapeHTML(( new Date()).getFullYear())}</span><span>. All rights reserved.</span></p></div></footer>`;
}, "C:/Users/stran/Documents/Work/joelstransky_com/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://minimma.vercel.app");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="favicon.png"><link rel="sitemap" href="/sitemap-index.xml"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "GoogleFontsOptimizer", $$GoogleFontsOptimizer, { "url": "https://fonts.googleapis.com/css2?family=Quicksand:wght@200;300;400;500;600;700;800;900&display=swap" })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head><body class="font-mono text-base antialised flex flex-col min-h-screen text-zinc-900 font-normal">${renderComponent($$result, "Header", $$Header, {})}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "C:/Users/stran/Documents/Work/joelstransky_com/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro("https://minimma.vercel.app");
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$$1;
  const blogEntries = await getCollection("articles");
  const articles = blogEntries.sort((a, b) => {
    return b.data.date.getTime() - a.data.date.getTime();
  });
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("Slug is required");
  }
  const entry = await getEntry("articles", slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  let previous, next;
  const currentIndex = articles.findIndex((entry2) => entry2.slug === slug);
  if (currentIndex > 0) {
    previous = articles[currentIndex - 1];
  }
  if (currentIndex < articles.length) {
    next = articles[currentIndex + 1];
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="relative"><div class="mx-auto px-8 md:max-w-7xl"><div class="relative w-full mt-5 mb-10 mx-auto max-w-3xl">${renderComponent($$result2, "Image", $$Image, { "width": "1000", "src": entry.data.image, "alt": entry.data.title, "class": "h-auto inline-block align-top w-full" })}</div><div class="relative w-full mt-12 mb-16 mx-auto max-w-3xl"><h4 class="text-3xl font-normal uppercase tracking-[0.08em] text-center"><strong class="font-semibold m-0 p-0">${entry.data.title}</strong></h4><h6 class="text-base font-normal normal-case opacity-80 text-center mt-2 mb-8">for ${entry.data.tag.join(", ").replace(/,(?!.*,)/gmi, " &")}</h6><div class="prose-zinc text-xl">${renderComponent($$result2, "Content", Content, {})}</div></div><div class="mt-0 flex items-center justify-between space-between gap-6 w-full mx-auto max-w-lg mb-24 flex-col md:flex-row">${previous ? renderTemplate`<a${addAttribute(`/article/${previous.slug}`, "href")} class="text-xs no-underline cursor-pointer font-bold leading-5 inline-block uppercase tracking-[0.12em] relative"><span class="relative block transition duration-500 ease-in-out transform rounded hover:scale-105">${renderComponent($$result2, "Image", $$Image, { "width": 244, "class": "relative block object-contain object-center w-full h-full max-w-[260px] h-auto inline-block align-top max-h-[260px]", "loading": "lazy", "alt": "", "src": previous.data.image })}</span><span class="absolute max-w-[100px] -translate-y-2/4 -translate-x-full left-[30px] top-2/4 bg-white py-1 px-2">Previous Project</span></a>` : renderTemplate`<span></span>`}${next ? renderTemplate`<a${addAttribute(`/article/${next.slug}`, "href")} class="text-xs no-underline cursor-pointer font-bold leading-5 inline-block uppercase tracking-[0.12em] relative"><span class="relative block transition duration-500 ease-in-out transform rounded hover:scale-105">${renderComponent($$result2, "Image", $$Image, { "width": 244, "class": "relative block object-contain object-center w-full h-full max-w-[260px] h-auto inline-block align-top w-auto max-h-[260px]", "loading": "lazy", "alt": "", "src": next.data.image })}</span><span class="absolute max-w-[100px] -translate-y-2/4 translate-x-full left-[inherit] right-[30px] top-2/4  bg-white py-1 px-2">Next Project</span></a>` : renderTemplate`<span></span>`}</div></div></div>` })}`;
}, "C:/Users/stran/Documents/Work/joelstransky_com/src/pages/article/[...slug].astro", void 0);

const $$file$1 = "C:/Users/stran/Documents/Work/joelstransky_com/src/pages/article/[...slug].astro";
const $$url$1 = "/article/[...slug]";

const ____slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://minimma.vercel.app");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const projectEntries = await getCollection("projects");
  const projects = projectEntries.sort((a, b) => {
    return b.data.date.getTime() - a.data.date.getTime();
  });
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("Slug is required");
  }
  const entry = await getEntry("projects", slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  let previous, next;
  const currentIndex = projects.findIndex((entry2) => entry2.slug === slug);
  if (currentIndex > 0) {
    previous = projects[currentIndex - 1];
  }
  if (currentIndex < projects.length) {
    next = projects[currentIndex + 1];
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="relative"><div class="mx-auto px-8 md:max-w-7xl"><div class="relative w-full mt-5 mb-10 mx-auto max-w-3xl">${renderComponent($$result2, "Image", $$Image, { "width": "1000", "src": entry.data.image, "alt": entry.data.title, "class": "h-auto inline-block align-top w-full" })}</div><div class="relative w-full mt-12 mb-16 mx-auto max-w-lg"><h4 class="text-3xl font-normal uppercase tracking-[0.08em] text-center"><strong class="font-semibold m-0 p-0">${entry.data.title}</strong></h4><h6 class="text-base font-normal normal-case opacity-80 text-center mt-2 mb-8">for ${entry.data.tag.join(", ").replace(/,(?!.*,)/gmi, " &")}</h6><div class="prose prose-zinc">${renderComponent($$result2, "Content", Content, {})}</div></div><div class="mt-0 flex items-center justify-between space-between gap-6 w-full mx-auto max-w-lg mb-24 flex-col md:flex-row">${previous ? renderTemplate`<a${addAttribute(`/project/${previous.slug}`, "href")} class="text-xs no-underline cursor-pointer font-bold leading-5 inline-block uppercase tracking-[0.12em] relative"><span class="relative block transition duration-500 ease-in-out transform rounded hover:scale-105">${renderComponent($$result2, "Image", $$Image, { "width": 244, "class": "relative block object-contain object-center w-full h-full max-w-[260px] h-auto inline-block align-top max-h-[260px]", "loading": "lazy", "alt": "", "src": previous.data.image })}</span><span class="absolute max-w-[100px] -translate-y-2/4 -translate-x-full left-[30px] top-2/4 bg-white py-1 px-2">Previous Project</span></a>` : renderTemplate`<span></span>`}${next ? renderTemplate`<a${addAttribute(`/project/${next.slug}`, "href")} class="text-xs no-underline cursor-pointer font-bold leading-5 inline-block uppercase tracking-[0.12em] relative"><span class="relative block transition duration-500 ease-in-out transform rounded hover:scale-105">${renderComponent($$result2, "Image", $$Image, { "width": 244, "class": "relative block object-contain object-center w-full h-full max-w-[260px] h-auto inline-block align-top w-auto max-h-[260px]", "loading": "lazy", "alt": "", "src": next.data.image })}</span><span class="absolute max-w-[100px] -translate-y-2/4 translate-x-full left-[inherit] right-[30px] top-2/4  bg-white py-1 px-2">Next Project</span></a>` : renderTemplate`<span></span>`}</div></div></div>` })}`;
}, "C:/Users/stran/Documents/Work/joelstransky_com/src/pages/project/[...slug].astro", void 0);

const $$file = "C:/Users/stran/Documents/Work/joelstransky_com/src/pages/project/[...slug].astro";
const $$url = "/project/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, ____slug_$1 as _, $$Layout as a, getImage as b, ____slug_ as c, getCollection as g, imageConfig as i };
