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
const __0_assets_dont_explode_alpha_1_jpg__ = {"src":"/_astro/alpha-1.85865d99.jpg","width":554,"height":859,"format":"jpg"};

const __1_assets_dont_explode_follow_me_jpg__ = {"src":"/_astro/follow-me.b6d4f52c.jpg","width":570,"height":210,"format":"jpg"};

const __2_assets_dont_explode_tap_light_jpg__ = {"src":"/_astro/tap-light.4818eca9.jpg","width":570,"height":210,"format":"jpg"};

const __3_assets_dont_explode_countdown_jpg__ = {"src":"/_astro/countdown.6548aece.jpg","width":570,"height":210,"format":"jpg"};

const frontmatter = {
  "title": "Don\u2019t Explode! by Joel Stransky",
  "date": "2015-01-15T00:00:00.000Z",
  "description": null,
  "image": "assets/dont-explode/featured.png",
  "tag": ["Maya", "Unity", "C#", "Photoshop", "AdMob"]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "update",
    "text": "Update"
  }, {
    "depth": 2,
    "slug": "the-idea",
    "text": "The Idea"
  }, {
    "depth": 2,
    "slug": "gameplay",
    "text": "Gameplay"
  }, {
    "depth": 3,
    "slug": "follow-me",
    "text": "Follow Me"
  }, {
    "depth": 3,
    "slug": "tap-light",
    "text": "Tap Light"
  }, {
    "depth": 3,
    "slug": "buzzer",
    "text": "Buzzer"
  }, {
    "depth": 3,
    "slug": "count-down",
    "text": "Count Down"
  }, {
    "depth": 2,
    "slug": "background",
    "text": "Background"
  }, {
    "depth": 3,
    "slug": "progress-update-1-19-december-2015",
    "text": "Progress Update 1 (19 December, 2015)"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
      a: "a",
      "astro-image": "astro-image",
      h1: "h1",
      h2: "h2",
      h3: "h3",
      hr: "hr",
      p: "p",
      ...props.components
    },
    _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "update",
      children: "Update"
    }), "\n", createVNode(_components.p, {
      children: "Don\u2019t Explode is now available on the google play store"
    }), "\n", createVNode("a", {
      href: "https://play.google.com/store/apps/details?id=com.StranskyDesign.BustRucket&hl=en_IN&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
      children: createVNode("img", {
        alt: "Get it on Google Play",
        style: "height: 6em;",
        src: "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-idea",
      children: "The Idea"
    }), "\n", createVNode(_components.p, {
      children: "Try to keep your rocket lifting for as long as possible by keeping the various panels in good repair. Failing panels will turn red and if not repaired in time, will blow off. The game is over when all the panels are gone. Keep the panel repaired and don\u2019t explode."
    }), "\n", createVNode(_components.h2, {
      id: "gameplay",
      children: "Gameplay"
    }), "\n", createVNode(_components.p, {
      children: "Press and slide left and right to orbit around your rocket to inspect damage. Tapping the panel will start a random \u201Cnano-game\u201D. The faster you complete the game the more \u201Chealth\u201D applied to that panel. They are called nano-games because you only have seconds to complete them."
    }), "\n", createVNode(_components.p, {
      children: ["Currently there are four nano-games you\u2019ll encounter, each designed to require a different type of quick concentration.\r\n", createVNode(_component0, {
        src: __0_assets_dont_explode_alpha_1_jpg__,
        alt: "early alpha"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "follow-me",
      children: "Follow Me"
    }), "\n", createVNode(_components.p, {
      children: ["In this nano-game you\u2019ll see four lights with 1 lit. You must tap the lit button and then the next until all four have been pressed. Failure to press the button in time or press the wrong button and the panel blows.\r\n", createVNode(_component0, {
        src: __1_assets_dont_explode_follow_me_jpg__,
        alt: "Follow Me"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "tap-light",
      children: "Tap Light"
    }), "\n", createVNode(_components.p, {
      children: ["A lit button will oscillate back and forth in a row. One button will be marked as the target. You must tap the target when it is lit. Failure to tap before time runs out or tap when the target is not lit and the panel blows.\r\n", createVNode(_component0, {
        src: __2_assets_dont_explode_tap_light_jpg__,
        alt: "Tap Light"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "buzzer",
      children: "Buzzer"
    }), "\n", createVNode(_components.p, {
      children: "Drag the electrical prong onto the pin without touching anything else before the timer runs out. Failure to touch the pin in time or touch the walls and, you know the drill."
    }), "\n", createVNode(_components.h3, {
      id: "count-down",
      children: "Count Down"
    }), "\n", createVNode(_components.p, {
      children: ["Three single digit timers will count down to zero, one after the other. You must tap the each timer when it displays zero. Failure to tap in time or tap too soon and you guessed it, bye bye panel.\r\n", createVNode(_component0, {
        src: __3_assets_dont_explode_countdown_jpg__,
        alt: "Count Down"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "background",
      children: "Background"
    }), "\n", createVNode(_components.p, {
      children: "I\u2019ve long had to some great ideas for games but with no industry experience I know they\u2019ll never become reality. I felt like the best first step towards making that happen would be to do reconnaissance on the process of making a game. Knowing I\u2019d be making a lot of mistakes along the way I didn\u2019t want to do a bad job on one of my good ideas. I also wanted to do an extremely simple game that wouldn\u2019t make an already difficult process more so."
    }), "\n", createVNode(_components.p, {
      children: "On my last day working in the office for Automata Studios before moving to Germany and working remotely, my boss treated me to a day of game development. We bounced around some ideas and got to work. Of course 1 work day didn\u2019t yield much but it was fun and provided a good a in-house project for a couple interns. It became something different than what we penned on that day so I revisited it as my opportunity to learn Unity and game development in general."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "progress-update-1-19-december-2015",
      children: "Progress Update 1 (19 December, 2015)"
    }), "\n", createVNode(_components.p, {
      children: ["In January I felt I needed some motivation to complete this project and felt some community management would provide that. Putting it out there makes it real so I ", createVNode(_components.a, {
        href: "/announcing-dont-explode/",
        children: "announced"
      }), " the project as something nearing completion. Since then time to work on it has been scarce and the page you\u2019re reading remained blank. Mainly because I wanted to use what little time on development. As I gear up for the final stretch I\u2019m once again ensuring the reality of this game by finally providing some content on this page."]
    }), "\n", createVNode("div", {
      style: "padding:37em 0 0 0;position:relative;",
      children: createVNode("iframe", {
        src: "https://player.vimeo.com/video/149729810?title=0&byline=0&portrait=0",
        style: "position:absolute;top:0;left:0;width:100%;height:100%;",
        frameborder: "0",
        allow: "autoplay; fullscreen",
        allowfullscreen: true
      })
    }), "\n", createVNode("script", {
      src: "https://player.vimeo.com/api/player.js"
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
const url = "src/content/articles/dont-explode/index.mdx";
const file = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/dont-explode/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/dont-explode/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
