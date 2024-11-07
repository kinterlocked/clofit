if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + '.js', a).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, i) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[c]) return;
    let t = {};
    const r = (e) => n(e, c),
      o = { module: { uri: c }, exports: t, require: r };
    s[c] = Promise.all(a.map((e) => o[e] || r(e))).then((e) => (i(...e), t));
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
          revision: '5b17138bb718c1b5d413733a06090f15',
        },
        {
          url: '/_next/static/3SQnehjSx3NwjqFXwq51Y/_buildManifest.js',
          revision: 'c155cce658e53418dec34664328b51ac',
        },
        {
          url: '/_next/static/3SQnehjSx3NwjqFXwq51Y/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/117-fe522513e9960118.js',
          revision: '3SQnehjSx3NwjqFXwq51Y',
        },
        {
          url: '/_next/static/chunks/145-30b2c7df99260153.js',
          revision: '3SQnehjSx3NwjqFXwq51Y',
        },
        {
          url: '/_next/static/chunks/301-65cd4f6ad7b9372b.js',
          revision: '3SQnehjSx3NwjqFXwq51Y',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-3073b1beec6f6257.js',
          revision: '3SQnehjSx3NwjqFXwq51Y',
        },
        {
          url: '/_next/static/chunks/app/closet/page-4bf42bed978253e9.js',
          revision: '3SQnehjSx3NwjqFXwq51Y',
        },
        {
          url: '/_next/static/chunks/app/feed/page-88e36bee8cbcb3c6.js',
          revision: '3SQnehjSx3NwjqFXwq51Y',
        },
        {
          url: '/_next/static/chunks/app/fitting/%5Bstep%5D/page-69759a6be407a395.js',
          revision: '3SQnehjSx3NwjqFXwq51Y',
        },
        {
          url: '/_next/static/chunks/app/fitting/page-8c52335d235c2d2c.js',
          revision: '3SQnehjSx3NwjqFXwq51Y',
        },
        {
          url: '/_next/static/chunks/app/home/page-521fc571db60f9b7.js',
          revision: '3SQnehjSx3NwjqFXwq51Y',
        },
        {
          url: '/_next/static/chunks/app/layout-2c699cb3dc7605e6.js',
          revision: '3SQnehjSx3NwjqFXwq51Y',
        },
        {
          url: '/_next/static/chunks/app/my/page-36d45aaaecd3d1dd.js',
          revision: '3SQnehjSx3NwjqFXwq51Y',
        },
        {
          url: '/_next/static/chunks/app/page-c83d47533550e476.js',
          revision: '3SQnehjSx3NwjqFXwq51Y',
        },
        {
          url: '/_next/static/chunks/fd9d1056-40e3bca6341aef98.js',
          revision: '3SQnehjSx3NwjqFXwq51Y',
        },
        {
          url: '/_next/static/chunks/framework-f66176bb897dc684.js',
          revision: '3SQnehjSx3NwjqFXwq51Y',
        },
        {
          url: '/_next/static/chunks/main-5668ff61ef21751a.js',
          revision: '3SQnehjSx3NwjqFXwq51Y',
        },
        {
          url: '/_next/static/chunks/main-app-3b43400214303b5a.js',
          revision: '3SQnehjSx3NwjqFXwq51Y',
        },
        {
          url: '/_next/static/chunks/pages/_app-72b849fbd24ac258.js',
          revision: '3SQnehjSx3NwjqFXwq51Y',
        },
        {
          url: '/_next/static/chunks/pages/_error-7ba65e1336b92748.js',
          revision: '3SQnehjSx3NwjqFXwq51Y',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-379d5cab186fa984.js',
          revision: '3SQnehjSx3NwjqFXwq51Y',
        },
        {
          url: '/_next/static/css/f8a16e11f2cc7ec2.css',
          revision: 'f8a16e11f2cc7ec2',
        },
        {
          url: '/_next/static/media/ff840cfebfb63b0c-s.p.woff2',
          revision: '302ec55f5b4320354ec6b35a53dead87',
        },
        { url: '/closet.svg', revision: 'ad2748ed457993e4b8dd23967edb1c74' },
        {
          url: '/default-profile.png',
          revision: '50425232dadb9845ad681fdf91740ae6',
        },
        { url: '/favicon.ico', revision: 'dbdb0f3978d04294ed50cf6ebd516d8c' },
        { url: '/gofitting.svg', revision: '32627c6c9f8956a8eba2e80e893c905a' },
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
        { url: '/logo.svg', revision: 'e330e630932efc5ce6c94cd3ef101539' },
        { url: '/manifest.json', revision: '2311d7ff2809444d1ed09c21a546a4bc' },
        {
          url: '/onboarding.svg',
          revision: '86ceffeb0a2b4d57e889cfcd988eb46a',
        },
        { url: '/snap1.webp', revision: '615388fa35b069274d5c7618aaf43047' },
        { url: '/snap2.webp', revision: '595b0a6af3cc3e5fc39eb259d89caf3a' },
        { url: '/snap3.webp', revision: 'e5429d9bed9f9cb0f101390d514cac14' },
        { url: '/온보딩1.png', revision: 'e3fdd257c016486e971b3987e184547e' },
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
              event: n,
              state: a,
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
