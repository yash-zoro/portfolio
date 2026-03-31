import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://yashkant.com",
  integrations: [sitemap()],
});
