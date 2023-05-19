import adapter from "@sveltejs/adapter-auto";

const directives = {
  "default-src": ["'self'"],
  "script-src": ["'self'"],
  "style-src": ["'self'"],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    csp: {
      mode: "hash",
      directives:
        process.env.NODE_ENV === "development" ? undefined : directives,
      reportOnly: undefined,
    },
  },
};

export default config;
