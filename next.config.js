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

  const nextConfig = {
    target: 'serverless',
    workboxOpts: {
      //swDest: 'static/service-worker.js',
      runtimeCaching: [
        {
          urlPattern: /\/feeds\//,          
          //urlPattern: /^https:\/\/spreadsheets.google.com\/feeds\/list\/1USp6UQtQqJYWlwPj0tZaIDnbsL51NSHCes09cFDDum0\/od6\/public\/values?alt=json*/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'Data',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 30 * 24 * 60 * 60
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },  
        {
          urlPattern: /^https?.*/,
          handler: 'networkFirst',
          options: {
            cacheName: 'https-calls',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 30 * 24 * 60 * 60
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
     
        {
          urlPattern: /^static\/images\/*/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }

        }
      ]
    }
  };
//Running npm run dev causes this when devmode is used for next-offlin
//TypeError: Cannot read property 'issuer' of undefined
  const devmode ={
    devSwSrc: '/service-worker.js',
    generateInDevMode: false
  }

  return withSass(withImages(withOffline(nextConfig)));
};

