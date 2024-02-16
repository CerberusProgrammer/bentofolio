import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";

import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon()
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "server",
  adapter: netlify(),
});
