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
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/spreadsheets.google.com/,          
          handler: 'staleWhileRevalidate',
          options: {
            cacheName: 'Data',
            expiration: {
              maxAgeSeconds: 30 * 24 * 60 * 60
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }, 
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com|^https:\/\/kit-free.fontawesome.com/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'Fonts',
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
          urlPattern: /^https:\/\/fonts\.gstatic\.com/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'Fonts-style',
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
          urlPattern: /\.(?:png|gif|jpg|jpeg|svg)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'Images',
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
          urlPattern: /\/|\/articles|\/books|\/content/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'Pages',
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
          //Left this in as a catch all for pages, because the 'Pages' one doesn't cache pages - html/js?
          urlPattern: /^https?.*/,
          handler: 'staleWhileRevalidate',
          options: {
            cacheName: 'https-calls',
            expiration: {
              maxEntries: 200,
              maxAgeSeconds: 30 * 24 * 60 * 60
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
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

