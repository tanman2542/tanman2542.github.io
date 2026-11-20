self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const windows = await self.clients.matchAll({ type: "window" });
      await Promise.all(
        windows.map((client) => {
          const next = new URL("/", self.location.origin);
          return client.navigate(next.href);
        }),
      );
      await self.registration.unregister();
    })(),
  );
});
