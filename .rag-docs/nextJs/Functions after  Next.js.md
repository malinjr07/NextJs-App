Last updated

October 22, 2025

`after` allows you to schedule work to be executed after a response (or prerender) is finished. This is useful for tasks and other side effects that should not block the response, such as logging and analytics.

It can be used in [Server Components](https://nextjs.org/docs/app/getting-started/server-and-client-components) (including [`generateMetadata`](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)), [Server Actions](https://nextjs.org/docs/app/getting-started/updating-data), [Route Handlers](https://nextjs.org/docs/app/api-reference/file-conventions/route), and [Proxy](https://nextjs.org/docs/app/api-reference/file-conventions/proxy).

The function accepts a callback that will be executed after the response (or prerender) is finished:

> **Good to know:** `after` is not a [Dynamic API](https://nextjs.org/docs/app/guides/caching#dynamic-rendering) and calling it does not cause a route to become dynamic. If it's used within a static page, the callback will execute at build time, or whenever a page is revalidated.

## Reference[](https://nextjs.org/docs/app/api-reference/functions/after#reference)

### Parameters[](https://nextjs.org/docs/app/api-reference/functions/after#parameters)

-   A callback function which will be executed after the response (or prerender) is finished.

### Duration[](https://nextjs.org/docs/app/api-reference/functions/after#duration)

`after` will run for the platform's default or configured max duration of your route. If your platform supports it, you can configure the timeout limit using the [`maxDuration`](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#maxduration) route segment config.

## Good to know[](https://nextjs.org/docs/app/api-reference/functions/after#good-to-know)

-   `after` will be executed even if the response didn't complete successfully. Including when an error is thrown or when `notFound` or `redirect` is called.
-   You can use React `cache` to deduplicate functions called inside `after`.
-   `after` can be nested inside other `after` calls, for example, you can create utility functions that wrap `after` calls to add additional functionality.

## Examples[](https://nextjs.org/docs/app/api-reference/functions/after#examples)

### With request APIs[](https://nextjs.org/docs/app/api-reference/functions/after#with-request-apis)

You can use request APIs such as [`cookies`](https://nextjs.org/docs/app/api-reference/functions/cookies) and [`headers`](https://nextjs.org/docs/app/api-reference/functions/headers) inside `after` in [Server Actions](https://nextjs.org/docs/app/getting-started/updating-data) and [Route Handlers](https://nextjs.org/docs/app/api-reference/file-conventions/route). This is useful for logging activity after a mutation. For example:

However, you cannot use these request APIs inside `after` in [Server Components](https://nextjs.org/docs/app/getting-started/server-and-client-components). This is because Next.js needs to know which part of the tree access the request APIs to support [Cache Components](https://nextjs.org/docs/app/getting-started/cache-components), but `after` runs after React's rendering lifecycle.

## Platform Support[](https://nextjs.org/docs/app/api-reference/functions/after#platform-support)

Learn how to [configure `after`](https://nextjs.org/docs/app/guides/self-hosting#after) when self-hosting Next.js.

Reference: supporting `after` for serverless platforms

Using `after` in a serverless context requires waiting for asynchronous tasks to finish after the response has been sent. In Next.js and Vercel, this is achieved using a primitive called `waitUntil(promise)`, which extends the lifetime of a serverless invocation until all promises passed to [`waitUntil`](https://vercel.com/docs/functions/functions-api-reference#waituntil) have settled.

If you want your users to be able to run `after`, you will have to provide your implementation of `waitUntil` that behaves in an analogous way.

When `after` is called, Next.js will access `waitUntil` like this:

Which means that `globalThis[Symbol.for('@next/request-context')]` is expected to contain an object like this:

Here is an example of the implementation.

## Version History[](https://nextjs.org/docs/app/api-reference/functions/after#version-history)

| Version History |        Description         |
|-----------------|----------------------------|
|     `v15.1.0`     |    `after` became stable.    |
|   `v15.0.0-rc`    | `unstable_after` introduced. |