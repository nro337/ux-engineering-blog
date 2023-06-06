// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Nick's UX & Engineering Blog";
export const SITE_DESCRIPTION =
  "Welcome to my blog! Here I cover front-end development, UX, and HCI topics!";
export const TWITTER_HANDLE = "@nickalico";
export const MY_NAME = "Nick Alico";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
