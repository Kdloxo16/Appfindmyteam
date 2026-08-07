const CACHE_NAME = "find-my-team-v8";
const ARCHIVOS = [
    "./",
    "./index.html",
    "./manifest.webmanifest",
    "./icon.svg",
    "./icon-192.png",
    "./icon-512.png"
];

self.addEventListener("install", (evento) => {
    evento.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ARCHIVOS))
    );
});

self.addEventListener("activate", (evento) => {
    evento.waitUntil(
        caches.keys().then((claves) => Promise.all(
            claves
                .filter((clave) => clave !== CACHE_NAME)
                .map((clave) => caches.delete(clave))
        ))
    );
});

self.addEventListener("fetch", (evento) => {
    if (evento.request.method !== "GET") return;

    evento.respondWith(
        fetch(evento.request).catch(() => caches.match(evento.request))
    );
});

self.addEventListener("notificationclick", (evento) => {
    evento.notification.close();
    const destino = evento.notification.data?.url || "./";
    evento.waitUntil(clients.openWindow(destino));
});
