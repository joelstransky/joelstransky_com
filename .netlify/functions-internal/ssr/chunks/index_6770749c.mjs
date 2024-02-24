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
const __0_assets_www_hawaii_edu_ohr_1_png__ = {"src":"/_astro/www-hawaii-edu-ohr-1.80df21c5.png","width":1410,"height":2862,"format":"png"};

const __1_assets_www_hawaii_edu_ohr_2_png__ = {"src":"/_astro/www-hawaii-edu-ohr-2.e2d80ced.png","width":1410,"height":2862,"format":"png"};

const __2_assets_www_hawaii_edu_ohr_3_png__ = {"src":"/_astro/www-hawaii-edu-ohr-3.d924bb0b.png","width":1750,"height":2504,"format":"png"};

const frontmatter = {
  "title": "University of Hawai\u02BBi\xAE Office of Human Resources",
  "date": "2017-02-05T00:00:00.000Z",
  "description": null,
  "image": "assets/www-hawaii-edu-ohr-4.png",
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
      table: "table",
      tbody: "tbody",
      td: "td",
      th: "th",
      thead: "thead",
      tr: "tr",
      ...props.components
    },
    _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "There is no roadblock I don\u2019t see as a challenge. This project is proof that I will go to any length to find a way over, under or around any problem so matter how much source I have to sift through."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {}), createVNode(_components.th, {})]
        })
      }), createVNode(_components.tbody, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_component0, {
              src: __0_assets_www_hawaii_edu_ohr_1_png__,
              alt: "University of Hawai'i Office of Human Resources"
            })
          }), createVNode(_components.td, {
            children: createVNode(_component0, {
              src: __1_assets_www_hawaii_edu_ohr_2_png__,
              alt: "University of Hawai'i Office of Human Resources"
            })
          })]
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["A custom theme in the truest sense, this was a rather large undertaking of more than a year\u2019s work. Far beyond custom post and taxonomy types I covered some pretty steep hills. The client wanted to be able to re-use posts containing pertinent information as subsections in other posts but rendered in their original style. This required manually re-starting \u201Cthe loop\u201D without losing the original post format. Sub-loops are trivial in WordPress but a pseudo-parent-loop was required to honor the post\u2019s type, look and feel. This also required a complex custom nav walker and lots of query filtering to be able to splice links, anchors, predecessors and descendants. Oh, and I even patched a bug in WordPress core to make it work! (", createVNode(_components.a, {
        href: "https://core.trac.wordpress.org/ticket/41717",
        children: "https://core.trac.wordpress.org/ticket/41717"
      }), ")"]
    }), "\n", createVNode(_components.p, {
      children: ["Many custom post editors were created using Advanced Custom Fields\u2019 incredible JSON flat file concept making it simple to version control. Oh, I had to fix that too. (", createVNode(_components.a, {
        href: "https://support.advancedcustomfields.com/forums/topic/the-acf-json-workflow/",
        children: "https://support.advancedcustomfields.com/forums/topic/the-acf-json-workflow/"
      }), ")"]
    }), "\n", createVNode(_components.p, {
      children: "A huge piece was the public/private document server that had to feel local to the admin. This meant an almost complete rewrite of the Wysiwyg link dialog as it was not built to re-init for each link or access multiple REST services. The REST request itself required a second WordPress install locked down to all but a virtual user on the main site so that public and private PDF\u2019s could be rendered inline depending on the users role."
    }), "\n", createVNode(_components.p, {
      children: ["On top of all that I created a Bower package inspired by fontawesome for Material Design icons. (", createVNode(_components.a, {
        href: "https://github.com/joelstransky/material-design-icons-scss",
        children: "https://github.com/joelstransky/material-design-icons-scss"
      }), ") and developed a SCSS strategy where child themes still got fed variables from the parent so only what changed needed to be written."]
    }), "\n", createVNode(_components.p, {
      children: "During all of this I regularly met with the client, advised on technical problems and helped mitigate scope creep."
    }), "\n", createVNode(_components.p, {
      children: "Finally, I conducted training of the human resources staff on how to use it."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        src: __2_assets_www_hawaii_edu_ohr_3_png__,
        alt: "University of Hawai'i Office of Human Resources"
      })
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
const url = "src/content/articles/uh-office-of-human-resources/index.mdx";
const file = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/uh-office-of-human-resources/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/uh-office-of-human-resources/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
