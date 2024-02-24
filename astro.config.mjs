import { defineConfig, squooshImageService } from "astro/config";
import robots from "astro-robots";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://minimma.vercel.app",
  image: {
    service: squooshImageService()
  },
  integrations: [tailwind(), sitemap(), robots(), mdx()],
  output: "server",
  adapter: vercel()
});