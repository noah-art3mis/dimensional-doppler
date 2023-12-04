import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://comfy-gingersnap-d09052.netlify.app/",
  integrations: [preact()]
});