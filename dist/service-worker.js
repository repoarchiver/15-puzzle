"use strict";var precacheConfig=[["./15Puzzle.44ba090e.js","f8273fc786c0b52ac3f47bdbafbc4c9a"],["./15Puzzle.b3ebf31c.css","5eee0d965e45b6abef4b1311ac7707c4"],["./ClearSans-Bold-webfont.6a6f5f3f.eot","fbfe96064a04a6dce661bc92a45ea0c2"],["./ClearSans-Bold-webfont.ae49b717.woff","8e55742896553de18fbed1a44baf1d79"],["./ClearSans-Bold-webfont.be59597a.svg","d492d06ef6d689d309b6bcc1aca7e9ee"],["./ClearSans-Light-webfont.95af1afc.svg","4779f2a99353fd19e58289e886cdc261"],["./ClearSans-Light-webfont.fb98e0ac.woff","cc10b51ebde2156baf4012fbc9b3a0c1"],["./ClearSans-Light-webfont.fe3992bc.eot","390bbf24f730678e85d01eb7280b710f"],["./ClearSans-Regular-webfont.3abd45a8.svg","efdfc2ba743236d3745ec1ce3b64d710"],["./ClearSans-Regular-webfont.662fe67c.eot","7717288f8feab0f46c3cfd22aeb694fd"],["./ClearSans-Regular-webfont.7edfc781.woff","051b44622bff6697c5591a681f33eb6a"],["./Pacifico-Regular.c0c32478.woff","fe33d439e2979e62f9cad3d286d2f6e5"],["./android-icon-192x192.cf567ee1.png","48cd682a2b7c78dfabc1c7f06f70d75b"],["./apple-icon-114x114.12757dc0.png","dd5708bb72680c96a3608e48f5b0b130"],["./apple-icon-120x120.c7598235.png","d936dcea429ed6095b2edf77c100d614"],["./apple-icon-144x144.9c1d6372.png","ab62dbc6761a691855487e628b7e8c13"],["./apple-icon-152x152.c259a454.png","590813dd54cea21521373cfccf402a64"],["./apple-icon-180x180.ce6023f9.png","0e73e31a2df81dad050e5662ce7d8c92"],["./apple-icon-57x57.c7df9d0f.png","644c91d5c819a6418b5874f3c41e5db1"],["./apple-icon-60x60.1c9552b0.png","1045de0d41290b853c4ff3d83a4e76fc"],["./apple-icon-72x72.e98825e6.png","7410790a849a506cb65dcb5a35059ace"],["./apple-icon-76x76.dd21d491.png","aabe4764f1dcf952c7f4540501eb8fc4"],["./favicon-16x16.48376abf.png","beb88e877f3baa76d00ae539088f30c1"],["./favicon-32x32.7038d02b.png","3d2194657a31dd1b71df625aefec135f"],["./favicon-96x96.b441a26b.png","2a800a4beef5652415796ddf01a40804"],["./index.html","89d8a2fbfbfba7f46d9b1f68a35bf98c"],["./manifest.1b04fcb1.js","a4f5cc6a93098e32e0cc3b7fc835a3e8"],["./ms-icon-144x144.9c1d6372.png","ab62dbc6761a691855487e628b7e8c13"],["./waves.0ff540f5.gif","6af86a855341a34afc113d9354454424"]],cacheName="sw-precache-v3-15puzzle-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,n,t){var c=new URL(e);return t&&c.pathname.match(t)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],t=new URL(a,self.location),c=createCacheKey(t,hashParamName,n,/\.\w{8}\./);return[t.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var t=new Request(n,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+n+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(n,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!a.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),a=urlsToCacheKeys.has(n));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("./index.html",self.location).toString(),a=urlsToCacheKeys.has(n)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});