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
const __0_assets_superb_cloud_hosting_all_cloud_accounts_png__ = {"src":"/_astro/superb-cloud-hosting-all-cloud-accounts.3ab03e02.png","width":1932,"height":1445,"format":"png"};

const __1_assets_superb_video_walkthroughs_2_png__ = {"src":"/_astro/superb-video-walkthroughs-2.0122ec03.png","width":1379,"height":633,"format":"png"};

const frontmatter = {
  "title": "Superb.net",
  "date": "2015-08-15T00:00:00.000Z",
  "description": null,
  "image": "assets/superb-net.png",
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
      children: ["At Superb.net I wore both developer and project manager hats. I worked on updating aging pages, promotional campaigns, some design work and their live chat.\r\nI also completely rebuilt their corporate facing site, hopone.net.\r\n", createVNode(_component0, {
        src: __0_assets_superb_cloud_hosting_all_cloud_accounts_png__,
        alt: "Superb.net"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Oh! and if you want to hear my voice, I did all the voice over for this series of walkthroughs. I was handed silent screen recordings and a script so I had to record and clean up the audio, splice it into the video and do lots of time stretching to line things up. I of course built the page too.\r\n(", createVNode(_components.a, {
        href: "https://www.superb.net/support/video-walkthroughs",
        children: "https://www.superb.net/support/video-walkthroughs"
      }), ")"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        src: __1_assets_superb_video_walkthroughs_2_png__,
        alt: "Superb.net"
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
const url = "src/content/articles/superb/index.mdx";
const file = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/superb/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/superb/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
