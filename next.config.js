const manifest = {
  "short_name": "Charmaine Yabsley",
  "name": "Charmaine Yabsley",
  "description": "",
  "dir": "ltr",
  "lang": "en",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#ffffff",
  "background_color": "#ffffff"
};

const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {}
    : !process.env.NOW_REGION
      ? require('next/constants')
      : require('next-server/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {};
  }

  // ✅ Put the require call here.
  const withImages = require('next-images');
  const withSass = require('@zeit/next-sass')
  const withOffline = require('next-offline');

  return withSass(withImages(withOffline(manifest)));
};

