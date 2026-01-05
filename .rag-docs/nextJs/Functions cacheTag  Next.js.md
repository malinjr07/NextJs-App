Last updated

October 22, 2025

The `cacheTag` function allows you to tag cached data for on-demand invalidation. By associating tags with cache entries, you can selectively purge or revalidate specific cache entries without affecting other cached data.

## Usage[](https://nextjs.org/docs/app/api-reference/functions/cacheTag#usage)

To use `cacheTag`, enable the [`cacheComponents` flag](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents) in your `next.config.js` file:

The `cacheTag` function takes one or more string values.

You can then purge the cache on-demand using [`revalidateTag`](https://nextjs.org/docs/app/api-reference/functions/revalidateTag) API in another function, for example, a [route handler](https://nextjs.org/docs/app/api-reference/file-conventions/route) or [Server Action](https://nextjs.org/docs/app/getting-started/updating-data):

## Good to know[](https://nextjs.org/docs/app/api-reference/functions/cacheTag#good-to-know)

-   **Idempotent Tags**: Applying the same tag multiple times has no additional effect.
-   **Multiple Tags**: You can assign multiple tags to a single cache entry by passing multiple string values to `cacheTag`.

-   **Limits**: The max length for a custom tag is 256 characters and the max tag items is 128.

## Examples[](https://nextjs.org/docs/app/api-reference/functions/cacheTag#examples)

### Tagging components or functions[](https://nextjs.org/docs/app/api-reference/functions/cacheTag#tagging-components-or-functions)

Tag your cached data by calling `cacheTag` within a cached function or component:

### Creating tags from external data[](https://nextjs.org/docs/app/api-reference/functions/cacheTag#creating-tags-from-external-data)

You can use the data returned from an async function to tag the cache entry.

### Invalidating tagged cache[](https://nextjs.org/docs/app/api-reference/functions/cacheTag#invalidating-tagged-cache)

Using [`revalidateTag`](https://nextjs.org/docs/app/api-reference/functions/revalidateTag), you can invalidate the cache for a specific tag when needed: