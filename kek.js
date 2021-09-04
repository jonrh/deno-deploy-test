addEventListener("fetch", (event) => {
  const response = new Response("Hæ! 👏", {
    headers: { "content-type": "text/plain" },
  });

  event.respondWith(response);
});
