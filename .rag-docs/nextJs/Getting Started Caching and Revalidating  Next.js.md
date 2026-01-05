Last updated

November 5, 2025

Caching is a technique for storing the result of data fetching and other computations so that future requests for the same data can be served faster, without doing the work again. While revalidation allows you to update cache entries without having to rebuild your entire application.

Next.js provides a few APIs to handle caching and revalidation. This guide will walk you through when and how to use them.

-   [`fetch`](https://nextjs.org/docs/app/getting-started/caching-and-revalidating#fetch)
-   [`cacheTag`](https://nextjs.org/docs/app/getting-started/caching-and-revalidating#cachetag)
-   [`revalidateTag`](https://nextjs.org/docs/app/getting-started/caching-and-revalidating#revalidatetag)
-   [`updateTag`](https://nextjs.org/docs/app/getting-started/caching-and-revalidating#updatetag)
-   [`revalidatePath`](https://nextjs.org/docs/app/getting-started/caching-and-revalidating#revalidatepath)
-   [`unstable_cache`](https://nextjs.org/docs/app/getting-started/caching-and-revalidating#unstable_cache) (Legacy)

## `fetch`[](https://nextjs.org/docs/app/getting-started/caching-and-revalidating#fetch)

By default, [`fetch`](https://nextjs.org/docs/app/api-reference/functions/fetch) requests are not cached. You can cache individual requests by setting the `cache` option to `'force-cache'`.

> **Good to know**: Although `fetch` requests are not cached by default, Next.js will [pre-render](https://nextjs.org/docs/app/guides/caching#static-rendering) routes that have `fetch` requests and cache the HTML. If you want to guarantee a route is [dynamic](https://nextjs.org/docs/app/guides/caching#dynamic-rendering), use the [`connection` API](https://nextjs.org/docs/app/api-reference/functions/connection).

To revalidate the data returned by a `fetch` request, you can use the `next.revalidate` option.

This will revalidate the data after a specified amount of seconds.

You can also tag `fetch` requests to enable on-demand cache invalidation:

See the [`fetch` API reference](https://nextjs.org/docs/app/api-reference/functions/fetch) to learn more.

## `cacheTag`[](https://nextjs.org/docs/app/getting-started/caching-and-revalidating#cachetag)

[`cacheTag`](https://nextjs.org/docs/app/api-reference/functions/cacheTag) allows you to tag cached data in [Cache Components](https://nextjs.org/docs/app/getting-started/cache-components) so it can be revalidated on-demand. Previously, cache tagging was limited to `fetch` requests, and caching other work required the experimental `unstable_cache` API.

With Cache Components, you can use the [`use cache`](https://nextjs.org/docs/app/api-reference/directives/use-cache) directive to cache any computation, and `cacheTag` to tag it. This works with database queries, file system operations, and other server-side work.

Once tagged, you can use [`revalidateTag`](https://nextjs.org/docs/app/getting-started/caching-and-revalidating#revalidatetag) or [`updateTag`](https://nextjs.org/docs/app/getting-started/caching-and-revalidating#updatetag) to invalidate the cache entry for products.

> **Good to know**: `cacheTag` is used with [Cache Components](https://nextjs.org/docs/app/getting-started/cache-components) and the [`use cache`](https://nextjs.org/docs/app/api-reference/directives/use-cache) directive. It expands the caching and revalidation story beyond `fetch`.

See the [`cacheTag` API reference](https://nextjs.org/docs/app/api-reference/functions/cacheTag) to learn more.

## `revalidateTag`[](https://nextjs.org/docs/app/getting-started/caching-and-revalidating#revalidatetag)

`revalidateTag` is used to revalidate cache entries based on a tag and following an event. The function now supports two behaviors:

-   **With `profile="max"`**: Uses stale-while-revalidate semantics, serving stale content while fetching fresh content in the background
-   **Without the second argument**: Legacy behavior that immediately expires the cache (deprecated)

After tagging your cached data, using [`fetch`](https://nextjs.org/docs/app/getting-started/caching-and-revalidating#fetch) with `next.tags`, or the [`cacheTag`](https://nextjs.org/docs/app/getting-started/caching-and-revalidating#cachetag) function, you may call `revalidateTag` in a [Route Handler](https://nextjs.org/docs/app/api-reference/file-conventions/route) or Server Action:

You can reuse the same tag in multiple functions to revalidate them all at once.

See the [`revalidateTag` API reference](https://nextjs.org/docs/app/api-reference/functions/revalidateTag) to learn more.

## `updateTag`[](https://nextjs.org/docs/app/getting-started/caching-and-revalidating#updatetag)

`updateTag` is specifically designed for Server Actions to immediately expire cached data for read-your-own-writes scenarios. Unlike `revalidateTag`, it can only be used within Server Actions and immediately expires the cache entry.

The key differences between `revalidateTag` and `updateTag`:

-   **`updateTag`**: Only in Server Actions, immediately expires cache, for read-your-own-writes
-   **`revalidateTag`**: In Server Actions and Route Handlers, supports stale-while-revalidate with `profile="max"`

See the [`updateTag` API reference](https://nextjs.org/docs/app/api-reference/functions/updateTag) to learn more.

## `revalidatePath`[](https://nextjs.org/docs/app/getting-started/caching-and-revalidating#revalidatepath)

`revalidatePath` is used to revalidate a route and following an event. To use it, call it in a [Route Handler](https://nextjs.org/docs/app/api-reference/file-conventions/route) or Server Action:

See the [`revalidatePath` API reference](https://nextjs.org/docs/app/api-reference/functions/revalidatePath) to learn more.

## `unstable_cache`[](https://nextjs.org/docs/app/getting-started/caching-and-revalidating#unstable_cache)

> **Good to know**: `unstable_cache` is an experimental API. We recommend opting into [Cache Components](https://nextjs.org/docs/app/getting-started/cache-components) and replacing `unstable_cache` with the [`use cache`](https://nextjs.org/docs/app/api-reference/directives/use-cache) directive. See the [Cache Components documentation](https://nextjs.org/docs/app/getting-started/cache-components) for more details.

`unstable_cache` allows you to cache the result of database queries and other async functions. To use it, wrap `unstable_cache` around the function. For example:

The function accepts a third optional object to define how the cache should be revalidated. It accepts:

-   `tags`: an array of tags used by Next.js to revalidate the cache.
-   `revalidate`: the number of seconds after cache should be revalidated.

See the [`unstable_cache` API reference](https://nextjs.org/docs/app/api-reference/functions/unstable_cache) to learn more.