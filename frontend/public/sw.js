if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + '.js', i).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, n) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[c]) return;
    let t = {};
    const o = (e) => a(e, c),
      r = { module: { uri: c }, exports: t, require: o };
    s[c] = Promise.all(i.map((e) => r[e] || o(e))).then((e) => (n(...e), t));
  };
}
define(['./workbox-4754cb34'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: '768c6a6885ae5bf9aa1da40e21059ca8',
        },
        {
          url: '/_next/static/Wzg9w_VkH3Fu3sjYUopsO/_buildManifest.js',
          revision: 'c155cce658e53418dec34664328b51ac',
        },
        {
          url: '/_next/static/Wzg9w_VkH3Fu3sjYUopsO/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/117-fe522513e9960118.js',
          revision: 'Wzg9w_VkH3Fu3sjYUopsO',
        },
        {
          url: '/_next/static/chunks/785-6e432e4f4a673ede.js',
          revision: 'Wzg9w_VkH3Fu3sjYUopsO',
        },
        {
          url: '/_next/static/chunks/8e1d74a4-53dbbc6a53625346.js',
          revision: 'Wzg9w_VkH3Fu3sjYUopsO',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-3073b1beec6f6257.js',
          revision: 'Wzg9w_VkH3Fu3sjYUopsO',
        },
        {
          url: '/_next/static/chunks/app/closet/page-1f65db3d00756fe7.js',
          revision: 'Wzg9w_VkH3Fu3sjYUopsO',
        },
        {
          url: '/_next/static/chunks/app/feed/page-3363c6ae51ce5de7.js',
          revision: 'Wzg9w_VkH3Fu3sjYUopsO',
        },
        {
          url: '/_next/static/chunks/app/fitting/page-b9208c2829369aa3.js',
          revision: 'Wzg9w_VkH3Fu3sjYUopsO',
        },
        {
          url: '/_next/static/chunks/app/home/page-727693cd595c194e.js',
          revision: 'Wzg9w_VkH3Fu3sjYUopsO',
        },
        {
          url: '/_next/static/chunks/app/layout-be6031ddaa64914b.js',
          revision: 'Wzg9w_VkH3Fu3sjYUopsO',
        },
        {
          url: '/_next/static/chunks/app/my/page-36d45aaaecd3d1dd.js',
          revision: 'Wzg9w_VkH3Fu3sjYUopsO',
        },
        {
          url: '/_next/static/chunks/app/page-ab5ff5ca1748df79.js',
          revision: 'Wzg9w_VkH3Fu3sjYUopsO',
        },
        {
          url: '/_next/static/chunks/fd9d1056-40e3bca6341aef98.js',
          revision: 'Wzg9w_VkH3Fu3sjYUopsO',
        },
        {
          url: '/_next/static/chunks/framework-f66176bb897dc684.js',
          revision: 'Wzg9w_VkH3Fu3sjYUopsO',
        },
        {
          url: '/_next/static/chunks/main-app-68aa24fb7e32898f.js',
          revision: 'Wzg9w_VkH3Fu3sjYUopsO',
        },
        {
          url: '/_next/static/chunks/main-b75bf3b5e1fa108b.js',
          revision: 'Wzg9w_VkH3Fu3sjYUopsO',
        },
        {
          url: '/_next/static/chunks/pages/_app-72b849fbd24ac258.js',
          revision: 'Wzg9w_VkH3Fu3sjYUopsO',
        },
        {
          url: '/_next/static/chunks/pages/_error-7ba65e1336b92748.js',
          revision: 'Wzg9w_VkH3Fu3sjYUopsO',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-6c1c041b47fc7b5c.js',
          revision: 'Wzg9w_VkH3Fu3sjYUopsO',
        },
        {
          url: '/_next/static/css/b0cf6c983adb8a89.css',
          revision: 'b0cf6c983adb8a89',
        },
        {
          url: '/_next/static/media/ff840cfebfb63b0c-s.p.woff2',
          revision: '302ec55f5b4320354ec6b35a53dead87',
        },
        { url: '/closet.svg', revision: 'c8d86c8442d792dbefa6e53ca2275269' },
        {
          url: '/default-profile.png',
          revision: '50425232dadb9845ad681fdf91740ae6',
        },
        { url: '/favicon.ico', revision: 'dbdb0f3978d04294ed50cf6ebd516d8c' },
        {
          url: '/icon-196x196.png',
          revision: '968c32b3311f8961cb53aa8fbe21aff5',
        },
        {
          url: '/icon-558x558.png',
          revision: 'ea18d703189067bf75b5bd92adcbdf91',
        },
        {
          url: '/images/closet-active.svg',
          revision: '4f5a1d2bc1fa320f410cbaa69e101993',
        },
        {
          url: '/images/closet-inactive.svg',
          revision: '6f9aaf89384d5514a231c8a632cd0669',
        },
        {
          url: '/images/empty-closet-icon.svg',
          revision: '037ddf05e36a1a663795b761bddcb2fe',
        },
        {
          url: '/images/feed-active.svg',
          revision: '8513df78a1fc9b73b15c7ab912a0fdee',
        },
        {
          url: '/images/feed-inactive.svg',
          revision: 'a8b72f9fed9599f13c2dc2eb7616a3f7',
        },
        {
          url: '/images/fitting-active.svg',
          revision: '1c1574ff10b52cb999088c12b59f2fea',
        },
        {
          url: '/images/fitting-inactive.svg',
          revision: '7c92f74ac073acc01efacb0ff5ea398b',
        },
        {
          url: '/images/home-active.svg',
          revision: 'e88f63ac6371d33f7ba530a68bc0d91a',
        },
        {
          url: '/images/home-inactive.svg',
          revision: '48ee4fa1a8a8ece0c65791a28c60a2e5',
        },
        {
          url: '/images/my-active.svg',
          revision: 'eb6f35fe381c4294ca310d5a832777de',
        },
        {
          url: '/images/my-inactive.svg',
          revision: 'd08a381e7bd638600c0ab3839b8a1936',
        },
        {
          url: '/kakao_login_large_narrow.png',
          revision: 'a18402cdd3eb17d907895ccff7957015',
        },
        { url: '/logo.svg', revision: '96ab68af9d62b2b6784dcce50ad1e8a6' },
        { url: '/manifest.json', revision: '2311d7ff2809444d1ed09c21a546a4bc' },
        { url: '/snap1.webp', revision: '615388fa35b069274d5c7618aaf43047' },
        { url: '/snap2.webp', revision: '595b0a6af3cc3e5fc39eb259d89caf3a' },
        { url: '/snap3.webp', revision: 'e5429d9bed9f9cb0f101390d514cac14' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: i,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    );
});
