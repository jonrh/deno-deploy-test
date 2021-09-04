function handleRequest(request) {
  if (pathname.startsWith("/text") {
    return new Response("Hæ! 👏", {
      headers: { "content-type": "text/plain; charset=UTF-8" }
    });
  }

  if (pathname.startsWitdh("/html")) {
    return new Response(
      `<p>Basic html, may not work</p>`,
      {
	headers: {
	  "content-type"
	}
      }
    );
  }

  if (pathname.startsWith("/json")) {
    const json = JSON.stringify({
      message: "Hæ! 👏",
    });

    return new Response(json, {
      headers: {
	"content-type": "application/json; charset=UTF-8",
      }
    });
  }

  return new Response(
    `<html>
    <head>
      <title>Deno Deploy testing</title>
    </head>
    <body>
      <h1>Index</h1>
      <p>Routes:</p>
      <ul>
	<li><a href="/text">/text</a></li>
	<li><a href="/html">/html</a></li>
	<li><a href="/json">/json</a></li>
      </ul>
    </body>
    </html>`,
    {
      headers: {
	"content-type": "text/html; charset=UTF-8",
      }
    }
  );
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
};
