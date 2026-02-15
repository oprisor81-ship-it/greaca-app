self.addEventListener('install',e=>{
 e.waitUntil(
  caches.open('greaca').then(cache=>{
   return cache.addAll([
    'index.html',
    'style.css',
    'app.js',
    'data.js',
    'manifest.json'
   ]);
  })
 );
});