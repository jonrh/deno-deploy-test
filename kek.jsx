import { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
import { renderToString } from "https://x.lcas.dev/preact@10.5.12/ssr.js";

function Index() {
  return (
    <html>
      <head>
        <title>Deno Deploy testing</title>
      </head>
      <body>
        <h1>Index</h1>
        <p>Routes:</p>
        <ul>
          <li>
            <a href="/text">/text</a>
          </li>
          <li>
            <a href="/html">/html</a>
          </li>
          <li>
            <a href="/json">/json</a>
          </li>
        </ul>
      </body>
    </html>
  );
}

function handleRequest(request) {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/text")) {
    return new Response("Hæ! 👏", {
      headers: { "content-type": "text/plain; charset=UTF-8" },
    });
  }

  if (pathname.startsWith("/html")) {
    return new Response(
      `<p>Basic html</p>`,
      {
        headers: {
          "content-type": "text/html; charset=UTF-8",
        },
      },
    );
  }

  if (pathname.startsWith("/json")) {
    const json = JSON.stringify({
      message: "Hæ! 👏",
    });

    return new Response(json, {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
  }

  return new Response(renderToString(<Index />), {
    headers: {
      "content-type": "text/html; charset=UTF-8",
    },
  });
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
