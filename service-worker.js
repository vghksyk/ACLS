const CACHE='acls-code-leader-v3.1-ga4';
const ASSETS=['./','./index.html','./manifest.json','./icon-180.png','./icon-192.png','./icon-512.png','./Mega_Code_Research_Codebook.csv','./README.md'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('acls-code-leader-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;
  event.respondWith(fetch(event.request).then(resp=>{
    const copy=resp.clone();
    caches.open(CACHE).then(c=>c.put(event.request,copy)).catch(()=>{});
    return resp;
  }).catch(()=>caches.match(event.request).then(r=>r||caches.match('./index.html'))));
});
