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
const frontmatter = {
  "title": "Military Adaptive Sports Program",
  "date": "2013-09-07T00:00:00.000Z",
  "description": null,
  "image": "assets/WTB-logo-spring.jpg",
  "tag": ["illustrator"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "I needed to add some modern design pieces to my portfolio and this great organization needed some help with their own promotion. It was a perfect match and a great way to give back to our hero\u2019s."
    }), "\n", createVNode(_components.p, {
      children: "I started with two rounds of sketches and after getting their approval, I produced the final version in vector."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "assets/WTB-logo-winter.jpg",
        alt: "adaptive sports sketches",
        title: "adaptive sports winter"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "assets/WT-sketches.jpg",
        alt: "adaptive sports sketches",
        title: "adaptive sports sketches"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "assets/WT-sketch.jpg",
        alt: "adaptive sports sketch",
        title: "adaptive sports sketch"
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
const url = "src/content/articles/military-adaptive-sports-program/index.mdx";
const file = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/military-adaptive-sports-program/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/military-adaptive-sports-program/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
