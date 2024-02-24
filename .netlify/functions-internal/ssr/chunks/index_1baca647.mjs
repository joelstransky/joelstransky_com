import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro_1c12762c.mjs';
import { $ as $$Image } from './pages/__5bbd3823.mjs';
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
const __0_assets_www_hawaii_edu_titleix_2_png__ = {"src":"/_astro/www-hawaii-edu-titleix-2.352a9604.png","width":1410,"height":2862,"format":"png"};

const __1_assets_www_hawaii_edu_titleix_help_coordinator_2_png__ = {"src":"/_astro/www-hawaii-edu-titleix-help-coordinator-2.dbe429a8.png","width":1410,"height":2862,"format":"png"};

const frontmatter = {
  "title": "University of Hawai\u02BBi System Title IX and The Office of Institutional Equity",
  "date": "2017-04-15T00:00:00.000Z",
  "image": "assets/www-hawaii-edu-titleix-1.png",
  "tag": ["wordpress", "php", "mySQL", "html", "css", "javascript"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
      a: "a",
      "astro-image": "astro-image",
      p: "p",
      ...props.components
    },
    _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["This was a culmination of work and proof positive that the parent WordPress theme I built for UH\u2019s ", createVNode(_components.a, {
        href: "/uh-office-of-human-resources/",
        children: "Office of Human Resources"
      }), " was truly reusable. A theme built in scope of re-use is a very different thing than one built for a one-off site. A huge part of the value to the client and thus a huge part of the work was abstracting all of the tooling so that all assets are configurable, the database is protected and child themes are able to leverage api defined in the parent to create new features."]
    }), "\n", createVNode(_components.p, {
      children: "The entire UH System will combine information from across their island campuses into a central portal using this theme for each department\u2019s home. The first site took a little over a year, the second took a month."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_component0, {
        src: __0_assets_www_hawaii_edu_titleix_2_png__,
        alt: "Title IX and The Office of Institutional Equity"
      }), "\r\n", createVNode(_component0, {
        src: __1_assets_www_hawaii_edu_titleix_help_coordinator_2_png__,
        alt: "Title IX and The Office of Institutional Equity"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/articles/uh-office-of-title-ix/index.mdx";
const file = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/uh-office-of-title-ix/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/uh-office-of-title-ix/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
