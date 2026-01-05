Last updated

November 21, 2025

The `cacheLife` function is used to set the cache lifetime of a function or component. It should be used alongside the [`use cache`](https://nextjs.org/docs/app/api-reference/directives/use-cache) directive, and within the scope of the function or component.

## Usage[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#usage)

### Basic setup[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#basic-setup)

To use `cacheLife`, first enable the [`cacheComponents` flag](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents) in your `next.config.js` file:

`cacheLife` requires the `use cache` directive, which must be placed at the file level or at the top of an async function or component.

> **Good to know**:
> 
> -   If used, `cacheLife` should be placed within the function whose output is being cached, even when the `use cache` directive is at file level
> -   Only one `cacheLife` call should execute per function invocation. You can call `cacheLife` in different control flow branches, but ensure only one executes per run. See the [conditional cache lifetimes](https://nextjs.org/docs/app/api-reference/functions/cacheLife#conditional-cache-lifetimes) example

### Using preset profiles[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#using-preset-profiles)

Next.js provides preset cache profiles that cover common caching needs. Each profile balances three factors:

-   How long users see cached content without checking for updates (client-side)
-   How often fresh content is generated on the server
-   When old content expires completely

Choose a profile based on how frequently your content changes:

-   **`seconds`** - Real-time data (stock prices, live scores)
-   **`minutes`** - Frequently updated (social feeds, news)
-   **`hours`** - Multiple daily updates (product inventory, weather)
-   **`days`** - Daily updates (blog posts, articles)
-   **`weeks`** - Weekly updates (podcasts, newsletters)
-   **`max`** - Rarely changes (legal pages, archived content)

Import `cacheLife` and pass a profile name:

The profile name tells Next.js how to cache the entire function's output. If you don't call `cacheLife`, the `default` profile is used. See [preset cache profiles](https://nextjs.org/docs/app/api-reference/functions/cacheLife#preset-cache-profiles) for timing details.

## Reference[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#reference)

### Cache profile properties[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#cache-profile-properties)

Cache profiles control caching behavior through three timing properties:

-   **[`stale`](https://nextjs.org/docs/app/api-reference/functions/cacheLife#stale)**: How long the client can use cached data without checking the server
-   **[`revalidate`](https://nextjs.org/docs/app/api-reference/functions/cacheLife#revalidate)**: After this time, the next request will trigger a background refresh
-   **[`expire`](https://nextjs.org/docs/app/api-reference/functions/cacheLife#expire)**: After this time with no requests, the next one waits for fresh content

#### `stale`[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#stale)

**Client-side:** How long the client can use cached data without checking the server.

During this time, the client-side router displays cached content immediately without any network request. After this period expires, the router must check with the server on the next navigation or request. This provides instant page loads from the client cache, but data may be outdated.

#### `revalidate`[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#revalidate)

How often the server regenerates cached content in the background.

-   When a request arrives after this period, the server:
    1.  Serves the cached version immediately (if available)
    2.  Regenerates content in the background
    3.  Updates the cache with fresh content
-   Similar to [Incremental Static Regeneration (ISR)](https://nextjs.org/docs/app/guides/incremental-static-regeneration)

#### `expire`[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#expire)

Maximum time before the server must regenerate cached content.

-   After this period with no traffic, the server regenerates content synchronously on the next request
-   When you set both `revalidate` and `expire`, `expire` must be longer than `revalidate`. Next.js validates this and raises an error for invalid configurations.

### Preset cache profiles[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#preset-cache-profiles)

If you don't specify a profile, Next.js uses the `default` profile. We recommend explicitly setting a profile to make caching behavior clear.

| **Profile** |                **Use Case**                |   `stale`    | `revalidate` |  `expire`  |
|---------|----------------------------------------|------------|------------|----------|
| `default` |            Standard content            | 5 minutes  | 15 minutes |  1 year  |
| `seconds` |             Real-time data             | 30 seconds |  1 second  | 1 minute |
| `minutes` |       Frequently updated content       | 5 minutes  |  1 minute  |  1 hour  |
|  `hours`  | Content updated multiple times per day | 5 minutes  |   1 hour   |  1 day   |
|  `days`   |         Content updated daily          | 5 minutes  |   1 day    |  1 week  |
|  `weeks`  |         Content updated weekly         | 5 minutes  |   1 week   | 30 days  |
|   `max`   |   Stable content that rarely changes   | 5 minutes  |  30 days   |  1 year  |

### Custom cache profiles[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#custom-cache-profiles)

Define reusable cache profiles in your `next.config.ts` file:

The example above caches for 14 days, checks for updates daily, and expires the cache after 14 days. You can then reference this profile throughout your application by its name:

### Overriding the default cache profiles[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#overriding-the-default-cache-profiles)

While the default cache profiles provide a useful way to think about how fresh or stale any given part of cacheable output can be, you may prefer different named profiles to better align with your applications caching strategies.

You can override the default named cache profiles by creating a new configuration with the same name as the defaults.

The example below shows how to override the default `"days"` cache profile:

### Inline cache profiles[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#inline-cache-profiles)

For one-off cases, pass a profile object directly to `cacheLife`:

Inline profiles apply only to the specific function or component. For reusable configurations, define custom profiles in `next.config.ts`.

Using `cacheLife({})` with an empty object applies the `default` profile values.

### Client router cache behavior[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#client-router-cache-behavior)

The `stale` property controls the client-side router cache, not the `Cache-Control` header:

-   The server sends the stale time via the `x-nextjs-stale-time` response header
-   The client router uses this value to determine when to revalidate
-   **Minimum of 30 seconds is enforced** to ensure prefetched links remain usable

This 30-second minimum prevents prefetched data from expiring before users can click on links. It only applies to time-based expiration.

When you call revalidation functions from a Server Action ([`revalidateTag`](https://nextjs.org/docs/app/api-reference/functions/revalidateTag), [`revalidatePath`](https://nextjs.org/docs/app/api-reference/functions/revalidatePath), [`updateTag`](https://nextjs.org/docs/app/api-reference/functions/updateTag), or [`refresh`](https://nextjs.org/docs/app/api-reference/functions/refresh)), the entire client cache is immediately cleared, bypassing the stale time.

> **Good to know**: The `stale` property in `cacheLife` differs from [`staleTimes`](https://nextjs.org/docs/app/api-reference/config/next-config-js/staleTimes). While `staleTimes` is a global setting affecting all routes, `cacheLife` allows per-function or per-route configuration. Updating `staleTimes.static` also updates the `stale` value of the `default` cache profile.

## Examples[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#examples)

### Using preset profiles[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#using-preset-profiles-1)

The simplest way to configure caching is using preset profiles. Choose one that matches your content's update pattern:

### Custom profiles for specific needs[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#custom-profiles-for-specific-needs)

Define custom profiles when preset options don't match your requirements:

Then use these profiles throughout your application:

### Inline profiles for unique cases[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#inline-profiles-for-unique-cases)

Use inline profiles when a specific function needs one-off caching behavior:

### Caching individual functions[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#caching-individual-functions)

Apply caching to utility functions for granular control:

### Nested caching behavior[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#nested-caching-behavior)

When you nest `use cache` directives (a cached function or component using another cached function or component), the outer cache's behavior depends on whether it has an explicit `cacheLife`.

#### With explicit outer cacheLife[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#with-explicit-outer-cachelife)

The outer cache uses its own lifetime, regardless of inner cache lifetimes. When the outer cache hits, it returns the complete output including all nested data. An explicit `cacheLife` always takes precedence, whether it's longer or shorter than inner lifetimes.

#### Without explicit outer cacheLife[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#without-explicit-outer-cachelife)

If you don't call `cacheLife` in the outer cache, it uses the `default` profile (15 min revalidate). Inner caches with shorter lifetimes can reduce the outer cache's `default` lifetime. Inner caches with longer lifetimes cannot extend it beyond the default.

**It is recommended to specify an explicit `cacheLife`.** With explicit lifetime values, you can inspect a cached function or component and immediately know its behavior without tracing through nested caches. Without explicit lifetime values, the behavior becomes dependent on inner cache lifetimes, making it harder to reason about.

### Conditional cache lifetimes[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#conditional-cache-lifetimes)

You can call `cacheLife` conditionally in different code paths to set different cache durations based on your application logic:

This pattern is useful when different outcomes need different cache durations, for example, when an item is missing but is likely to be available later.

#### Using dynamic cache lifetimes from data[](https://nextjs.org/docs/app/api-reference/functions/cacheLife#using-dynamic-cache-lifetimes-from-data)

If you want to calculate cache lifetime at runtime, for example by reading it from the fetched data, use an [inline cache profile](https://nextjs.org/docs/app/api-reference/functions/cacheLife#inline-cache-profiles) object: