/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-80d256566a3e642caa31.js"
  },
  {
    "url": "styles.81527da71bb15ed2a71a.css"
  },
  {
    "url": "styles-b8209405ca032fb644ed.js"
  },
  {
    "url": "commons-f7eec2a15f1cf061bf53.js"
  },
  {
    "url": "app-48440b9de9d593738220.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-ceef87afc058962c4db9.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9e2db185221a435361b61f98972a78b4"
  },
  {
    "url": "google-fonts/s/allura/v8/9oRPNYsQpS4zjuA_iwgW.woff2",
    "revision": "d60e0b02378bf772bf202e25969231bf"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z1JlFQ.woff2",
    "revision": "41f8ad39f649538dab12e26eb5b2b4f8"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLDz8Z1JlFQ.woff2",
    "revision": "6aa3cfa831bb423a87e2c3800f13c65d"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLGT9Z1JlFQ.woff2",
    "revision": "08e8a34e6d6766fda201d9f292eedf7f"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiEyp8kv8JHgFVrJJnecg.woff2",
    "revision": "3605e42824101a69c1009c135a487c57"
  },
  {
    "url": "css/reset.css"
  },
  {
    "url": "css/font.css"
  },
  {
    "url": "css/prism-atom-dark.css"
  },
  {
    "url": "manifest.json",
    "revision": "c8e3b78f511f57bf0242db20616f37f5"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "b7e94261a8ed2635466b2ab9ddd9d1e2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-48440b9de9d593738220.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
