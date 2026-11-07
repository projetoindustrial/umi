/* OTM-4: arquivos do app em cache-first (versionados); data.json e chains.json em "usa o cache e atualiza em segundo plano".
   A versão nova NÃO assume sozinha: fica em espera até o app pedir (botão "Atualizar"), para não misturar versões. */
const V='umi-v13',SHELL=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'],DADOS=['data.json','chains.json'];
const off=()=>new Response('offline',{status:503,headers:{'Content-Type':'text/plain;charset=utf-8'}});
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL.concat(DADOS))))});
self.addEventListener('message',e=>{if(e.data==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
function dados(e){const q=e.request,c=caches.open(V);
 const rede=fetch(q,{cache:'no-cache'}).then(async x=>{if(x.ok)(await c).put(q,x.clone());return x});
 e.waitUntil(rede.catch(()=>{}));
 e.respondWith(c.then(k=>k.match(q)).then(r=>r||rede.catch(off)))}
async function casca(r){const c=await caches.open(V),h=await c.match(r);if(h)return h;
 try{return await fetch(r)}catch(_){return r.mode==='navigate'?((await c.match('index.html'))||off()):off()}}
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==location.origin)return;
 if(DADOS.some(d=>u.pathname.endsWith('/'+d)))dados(e);else e.respondWith(casca(r))});
