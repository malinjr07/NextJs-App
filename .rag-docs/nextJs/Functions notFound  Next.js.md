Last updated

June 16, 2025

The `notFound` function allows you to render the [`not-found file`](https://nextjs.org/docs/app/api-reference/file-conventions/not-found) within a route segment as well as inject a `<meta name="robots" content="noindex" />` tag.

## `notFound()`[](https://nextjs.org/docs/app/api-reference/functions/not-found#notfound)

Invoking the `notFound()` function throws a `NEXT_HTTP_ERROR_FALLBACK;404` error and terminates rendering of the route segment in which it was thrown. Specifying a [**not-found** file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found) allows you to gracefully handle such errors by rendering a Not Found UI within the segment.

> **Good to know**: `notFound()` does not require you to use `return notFound()` due to using the TypeScript [`never`](https://www.typescriptlang.org/docs/handbook/2/functions.html#never) type.

## Version History[](https://nextjs.org/docs/app/api-reference/functions/not-found#version-history)

| Version |       Changes        |
|---------|----------------------|
| `v13.0.0` | `notFound` introduced. |

[Previous

NextResponse

](https://nextjs.org/docs/app/api-reference/functions/next-response)[Next

permanentRedirect

](https://nextjs.org/docs/app/api-reference/functions/permanentRedirect)