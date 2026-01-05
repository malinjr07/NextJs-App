Last updated

November 4, 2025

> **Note**: The `middleware` file convention is deprecated and has been renamed to `proxy`. See [Migration to Proxy](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#migration-to-proxy) for more details.

The `proxy.js|ts` file is used to write [Proxy](https://nextjs.org/docs/app/getting-started/proxy) and run code on the server before a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.

Proxy executes before routes are rendered. It's particularly useful for implementing custom server-side logic like authentication, logging, or handling redirects.

> **Good to know**:
> 
> Proxy is meant to be invoked separately of your render code and in optimized cases deployed to your CDN for fast redirect/rewrite handling, you should not attempt relying on shared modules or globals.
> 
> To pass information from Proxy to your application, use [headers](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#setting-headers), [cookies](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#using-cookies), [rewrites](https://nextjs.org/docs/app/api-reference/functions/next-response#rewrite), [redirects](https://nextjs.org/docs/app/api-reference/functions/next-response#redirect), or the URL.

Create a `proxy.ts` (or `.js`) file in the project root, or inside `src` if applicable, so that it is located at the same level as `pages` or `app`.

If you’ve customized [`pageExtensions`](https://nextjs.org/docs/app/api-reference/config/next-config-js/pageExtensions), for example to `.page.ts` or `.page.js`, name your file `proxy.page.ts` or `proxy.page.js` accordingly.

## Exports[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#exports)

### Proxy function[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#proxy-function)

The file must export a single function, either as a default export or named `proxy`. Note that multiple proxy from the same file are not supported.

### Config object (optional)[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#config-object-optional)

Optionally, a config object can be exported alongside the Proxy function. This object includes the [matcher](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher) to specify paths where the Proxy applies.

### Matcher[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher)

The `matcher` option allows you to target specific paths for the Proxy to run on. You can specify these paths in several ways:

-   For a single path: Directly use a string to define the path, like `'/about'`.
-   For multiple paths: Use an array to list multiple paths, such as `matcher: ['/about', '/contact']`, which applies the Proxy to both `/about` and `/contact`.

Additionally, the `matcher` option supports complex path specifications using regular expressions. For example, you can exclude certain paths with a regular expression matcher:

This enables precise control over which paths to include or exclude.

The `matcher` option accepts an array of objects with the following keys:

-   `source`: The path or pattern used to match the request paths. It can be a string for direct path matching or a pattern for more complex matching.
-   `locale` (optional): A boolean that, when set to `false`, ignores locale-based routing in path matching.
-   `has` (optional): Specifies conditions based on the presence of specific request elements such as headers, query parameters, or cookies.
-   `missing` (optional): Focuses on conditions where certain request elements are absent, like missing headers or cookies.

Configured matchers:

1.  MUST start with `/`
2.  Can include named parameters: `/about/:path` matches `/about/a` and `/about/b` but not `/about/a/c`
3.  Can have modifiers on named parameters (starting with `:`): `/about/:path*` matches `/about/a/b/c` because `*` is _zero or more_. `?` is _zero or one_ and `+` _one or more_
4.  Can use regular expression enclosed in parenthesis: `/about/(.*)` is the same as `/about/:path*`
5.  Are anchored to the start of the path: `/about` matches `/about` and `/about/team` but not `/blog/about`

Read more details on [path-to-regexp](https://github.com/pillarjs/path-to-regexp#path-to-regexp-1) documentation.

> **Good to know**:
> 
> -   The `matcher` values need to be constants so they can be statically analyzed at build-time. Dynamic values such as variables will be ignored.
> -   For backward compatibility, Next.js always considers `/public` as `/public/index`. Therefore, a matcher of `/public/:path` will match.

## Params[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#params)

### `request`[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#request)

When defining Proxy, the default export function accepts a single parameter, `request`. This parameter is an instance of `NextRequest`, which represents the incoming HTTP request.

> **Good to know**:
> 
> -   `NextRequest` is a type that represents incoming HTTP requests in Next.js Proxy, whereas [`NextResponse`](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#nextresponse) is a class used to manipulate and send back HTTP responses.

## NextResponse[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#nextresponse)

The `NextResponse` API allows you to:

-   `redirect` the incoming request to a different URL
-   `rewrite` the response by displaying a given URL
-   Set request headers for API Routes, `getServerSideProps`, and `rewrite` destinations
-   Set response cookies
-   Set response headers

To produce a response from Proxy, you can:

1.  `rewrite` to a route ([Page](https://nextjs.org/docs/app/api-reference/file-conventions/page) or [Route Handler](https://nextjs.org/docs/app/api-reference/file-conventions/route)) that produces a response
2.  return a `NextResponse` directly. See [Producing a Response](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#producing-a-response)

> **Good to know**: For redirects, you can also use `Response.redirect` instead of `NextResponse.redirect`.

## Execution order[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#execution-order)

Proxy will be invoked for **every route in your project**. Given this, it's crucial to use [matchers](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher) to precisely target or exclude specific routes. The following is the execution order:

1.  `headers` from `next.config.js`
2.  `redirects` from `next.config.js`
3.  Proxy (`rewrites`, `redirects`, etc.)
4.  `beforeFiles` (`rewrites`) from `next.config.js`
5.  Filesystem routes (`public/`, `_next/static/`, `pages/`, `app/`, etc.)
6.  `afterFiles` (`rewrites`) from `next.config.js`
7.  Dynamic Routes (`/blog/[slug]`)
8.  `fallback` (`rewrites`) from `next.config.js`

## Runtime[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#runtime)

Proxy defaults to using the Node.js runtime. The [`runtime`](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#runtime) config option is not available in Proxy files. Setting the `runtime` config option in Proxy will throw an error.

## Advanced Proxy flags[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#advanced-proxy-flags)

In `v13.1` of Next.js two additional flags were introduced for proxy, `skipMiddlewareUrlNormalize` and `skipTrailingSlashRedirect` to handle advanced use cases.

`skipTrailingSlashRedirect` disables Next.js redirects for adding or removing trailing slashes. This allows custom handling inside proxy to maintain the trailing slash for some paths but not others, which can make incremental migrations easier.

`skipMiddlewareUrlNormalize` allows for disabling the URL normalization in Next.js to make handling direct visits and client-transitions the same. In some advanced cases, this option provides full control by using the original URL.

## Examples[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#examples)

### Conditional Statements[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#conditional-statements)

### Using Cookies[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#using-cookies)

Cookies are regular headers. On a `Request`, they are stored in the `Cookie` header. On a `Response` they are in the `Set-Cookie` header. Next.js provides a convenient way to access and manipulate these cookies through the `cookies` extension on `NextRequest` and `NextResponse`.

1.  For incoming requests, `cookies` comes with the following methods: `get`, `getAll`, `set`, and `delete` cookies. You can check for the existence of a cookie with `has` or remove all cookies with `clear`.
2.  For outgoing responses, `cookies` have the following methods `get`, `getAll`, `set`, and `delete`.

You can set request and response headers using the `NextResponse` API (setting _request_ headers is available since Next.js v13.0.0).

Note that the snippet uses:

-   `NextResponse.next({ request: { headers: requestHeaders } })` to make `requestHeaders` available upstream
-   **NOT** `NextResponse.next({ headers: requestHeaders })` which makes `requestHeaders` available to clients

Learn more in [NextResponse headers in Proxy](https://nextjs.org/docs/app/api-reference/functions/next-response#next).

> **Good to know**: Avoid setting large headers as it might cause [431 Request Header Fields Too Large](https://developer.mozilla.org/docs/Web/HTTP/Status/431) error depending on your backend web server configuration.

### CORS[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#cors)

You can set CORS headers in Proxy to allow cross-origin requests, including [simple](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#simple_requests) and [preflighted](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#preflighted_requests) requests.

> **Good to know:** You can configure CORS headers for individual routes in [Route Handlers](https://nextjs.org/docs/app/api-reference/file-conventions/route#cors).

### Producing a response[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#producing-a-response)

You can respond from Proxy directly by returning a `Response` or `NextResponse` instance. (This is available since [Next.js v13.1.0](https://nextjs.org/blog/next-13-1#nextjs-advanced-proxy))

### Negative matching[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#negative-matching)

The `matcher` config allows full regex so matching like negative lookaheads or character matching is supported. An example of a negative lookahead to match all except specific paths can be seen here:

You can also bypass Proxy for certain requests by using the `missing` or `has` arrays, or a combination of both:

> **Good to know**:
> 
> Even when `_next/data` is excluded in a negative matcher pattern, proxy will still be invoked for `_next/data` routes. This is intentional behavior to prevent accidental security issues where you might protect a page but forget to protect the corresponding data route.

### `waitUntil` and `NextFetchEvent`[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#waituntil-and-nextfetchevent)

The `NextFetchEvent` object extends the native [`FetchEvent`](https://developer.mozilla.org/docs/Web/API/FetchEvent) object, and includes the [`waitUntil()`](https://developer.mozilla.org/docs/Web/API/ExtendableEvent/waitUntil) method.

The `waitUntil()` method takes a promise as an argument, and extends the lifetime of the Proxy until the promise settles. This is useful for performing work in the background.

### Unit testing (experimental)[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#unit-testing-experimental)

Starting in Next.js 15.1, the `next/experimental/testing/server` package contains utilities to help unit test proxy files. Unit testing proxy can help ensure that it's only run on desired paths and that custom routing logic works as intended before code reaches production.

The `unstable_doesProxyMatch` function can be used to assert whether proxy will run for the provided URL, headers, and cookies.

The entire proxy function can also be tested.

## Platform support[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#platform-support)

Learn how to [configure Proxy](https://nextjs.org/docs/app/guides/self-hosting#proxy) when self-hosting Next.js.

## Migration to Proxy[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#migration-to-proxy)

### Why the Change[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#why-the-change)

The reason behind the renaming of `middleware` is that the term "middleware" can often be confused with Express.js middleware, leading to a misinterpretation of its purpose. Also, Middleware is highly capable, so it may encourage the usage; however, this feature is recommended to be used as a last resort.

Next.js is moving forward to provide better APIs with better ergonomics so that developers can achieve their goals without Middleware. This is the reason behind the renaming of `middleware`.

### Why "Proxy"[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#why-proxy)

The name Proxy clarifies what Middleware is capable of. The term "proxy" implies that it has a network boundary in front of the app, which is the behavior of Middleware. Also, Middleware defaults to run at the [Edge Runtime](https://nextjs.org/docs/app/api-reference/edge), which can run closer to the client, separated from the app's region. These behaviors align better with the term "proxy" and provide a clearer purpose of the feature.

### How to Migrate[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#how-to-migrate)

We recommend users avoid relying on Middleware unless no other options exist. Our goal is to give them APIs with better ergonomics so they can achieve their goals without Middleware.

The term “middleware” often confuses users with Express.js middleware, which can encourage misuse. To clarify our direction, we are renaming the file convention to “proxy.” This highlights that we are moving away from Middleware, breaking down its overloaded features, and making the Proxy clear in its purpose.

Next.js provides a codemod to migrate from `middleware.ts` to `proxy.ts`. You can run the following command to migrate:

The codemod will rename the file and the function name from `middleware` to `proxy`.

## Version history[](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#version-history)

| Version |                                   Changes                                   |
|---------|-----------------------------------------------------------------------------|
| `v16.0.0` |                Middleware is deprecated and renamed to Proxy                |
| `v15.5.0` |             Middleware can now use the Node.js runtime (stable)             |
| `v15.2.0` |          Middleware can now use the Node.js runtime (experimental)          |
| `v13.1.0` |                       Advanced Middleware flags added                       |
| `v13.0.0` | Middleware can modify request headers, response headers, and send responses |
| `v12.2.0` |             Middleware is stable, please see the upgrade guide              |
| `v12.0.9` |                 Enforce absolute URLs in Edge Runtime (PR)                  |
| `v12.0.0` |                           Middleware (Beta) added                           |