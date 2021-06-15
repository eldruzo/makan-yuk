import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  console.log('Menginstal Service Worker...');
  self.skipWaiting();
  event.waitUntil(CacheHelper.cachingAppShell([
    ...assets,
    './',
    'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap',
    'https://fonts.googleapis.com/icon?family=Material+Icons&display=swap',
  ]));
});

self.addEventListener('activate', (event) => {
  console.log('Mengaktifkan Service Worker ...');
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
