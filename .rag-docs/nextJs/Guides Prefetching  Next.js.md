Last updated

October 30, 2025

Prefetching makes navigating between different routes in your application feel instant. Next.js tries to intelligently prefetch by default, based on the links used in your application code.

This guide will explain how prefetching works and show common implementation patterns:

-   [Automatic prefetch](https://nextjs.org/docs/app/guides/prefetching#automatic-prefetch)
-   [Manual prefetch](https://nextjs.org/docs/app/guides/prefetching#manual-prefetch)
-   [Hover-triggered prefetch](https://nextjs.org/docs/app/guides/prefetching#hover-triggered-prefetch)
-   [Extending or ejecting link](https://nextjs.org/docs/app/guides/prefetching#extending-or-ejecting-link)
-   [Disabled prefetch](https://nextjs.org/docs/app/guides/prefetching#disabled-prefetch)

## How does prefetching work?[](https://nextjs.org/docs/app/guides/prefetching#how-does-prefetching-work)

When navigating between routes, the browser requests assets for the page like HTML and JavaScript files. Prefetching is the process of fetching these resources _ahead_ of time, before you navigate to a new route.

Next.js automatically splits your application into smaller JavaScript chunks based on routes. Instead of loading all the code upfront like traditional SPAs, only the code needed for the current route is loaded. This reduces the initial load time while other parts of the app are loaded in the background. By the time you click the link, the resources for the new route have already been loaded into the browser cache.

When navigating to the new page, there's no full page reload or browser loading spinner. Instead, Next.js performs a [client-side transition](https://nextjs.org/docs/app/getting-started/linking-and-navigating#client-side-transitions), making the page navigation feel instant.

## Prefetching static vs. dynamic routes[](https://nextjs.org/docs/app/guides/prefetching#prefetching-static-vs-dynamic-routes)

> **Good to know:** During the initial navigation, the browser fetches the HTML, JavaScript, and React Server Components (RSC) Payload. For subsequent navigations, the browser will fetch the RSC Payload for Server Components and JS bundle for Client Components.

## Automatic prefetch[](https://nextjs.org/docs/app/guides/prefetching#automatic-prefetch)

|     **Context**     |        **Prefetched payload**        |  **Client Cache TTL**  |
|-----------------|----------------------------------|--------------------|
|  No `loading.js`  |           Entire page            |  Until app reload  |
| With `loading.js` | Layout to first loading boundary | 30s (configurable) |

Automatic prefetching runs only in production. Disable with `prefetch={false}` or use the wrapper in [Disabled Prefetch](https://nextjs.org/docs/app/guides/prefetching#disabled-prefetch).

## Manual prefetch[](https://nextjs.org/docs/app/guides/prefetching#manual-prefetch)

To do manual prefetching, import the `useRouter` hook from `next/navigation`, and call `router.prefetch()` to warm routes outside the viewport or in response to analytics, hover, scroll, etc.

If the intent is to prefetch a URL when a component loads, see the extending or rejecting a link \[example\].

## Hover-triggered prefetch[](https://nextjs.org/docs/app/guides/prefetching#hover-triggered-prefetch)

> **Proceed with caution:** Extending `Link` opts you into maintaining prefetching, cache invalidation, and accessibility concerns. Proceed only if defaults are insufficient.

Next.js tries to do the right prefetching by default, but power users can eject and modify based on their needs. You have the control between performance and resource consumption.

For example, you might have to only trigger prefetches on hover, instead of when entering the viewport (the default behavior):

`prefetch={null}` restores default (static) prefetching once the user shows intent.

## Extending or ejecting link[](https://nextjs.org/docs/app/guides/prefetching#extending-or-ejecting-link)

You can extend the `<Link>` component to create your own custom prefetching strategy. For example, using the [ForesightJS](https://foresightjs.com/docs/integrations/nextjs) library which prefetches links by predicting the direction of the user's cursor.

Alternatively, you can use [`useRouter`](https://nextjs.org/docs/app/api-reference/functions/use-router) to recreate some of the native `<Link>` behavior. However, be aware this opts you into maintaining prefetching and cache invalidation.

[`onInvalidate`](https://nextjs.org/docs/app/api-reference/functions/use-router#userouter) is invoked when Next.js suspects cached data is stale, allowing you to refresh the prefetch.

> **Good to know:** Using an `a` tag will cause a full page navigation to the destination route, you can use `onClick` to prevent the full page navigation, and then invoke `router.push` to navigate to the destination.

## Disabled prefetch[](https://nextjs.org/docs/app/guides/prefetching#disabled-prefetch)

You can fully disable prefetching for certain routes for more fine-grained control over resource consumption.

For example, you may still want to have consistent usage of `<Link>` in your application, but links in your footer might not need to be prefetched when entering the viewport.

## Prefetching optimizations[](https://nextjs.org/docs/app/guides/prefetching#prefetching-optimizations)

### Client cache[](https://nextjs.org/docs/app/guides/prefetching#client-cache)

Next.js stores prefetched React Server Component payloads in memory, keyed by route segments. When navigating between sibling routes (e.g. `/dashboard/settings` → `/dashboard/analytics`), it reuses the parent layout and only fetches the updated leaf page. This reduces network traffic and improves navigation speed.

### Prefetch scheduling[](https://nextjs.org/docs/app/guides/prefetching#prefetch-scheduling)

Next.js maintains a small task queue, which prefetches in the following order:

1.  Links in the viewport
2.  Links showing user intent (hover or touch)
3.  Newer links replace older ones
4.  Links scrolled off-screen are discarded

The scheduler prioritizes likely navigations while minimizing unused downloads.

### Partial Prerendering (PPR)[](https://nextjs.org/docs/app/guides/prefetching#partial-prerendering-ppr)

When PPR is enabled, a page is divided into a static shell and a streamed dynamic section:

-   The shell, which can be prefetched, streams immediately
-   Dynamic data streams when ready
-   Data invalidations (`revalidateTag`, `revalidatePath`) silently refresh associated prefetches

## Troubleshooting[](https://nextjs.org/docs/app/guides/prefetching#troubleshooting)

### Triggering unwanted side-effects during prefetching[](https://nextjs.org/docs/app/guides/prefetching#triggering-unwanted-side-effects-during-prefetching)

If your layouts or pages are not [pure](https://react.dev/learn/keeping-components-pure#purity-components-as-formulas) and have side-effects (e.g. tracking analytics), these might be triggered when the route is prefetched, not when the user visits the page.

To avoid this, you should move side-effects to a `useEffect` hook or a Server Action triggered from a Client Component.

**Before**:

**After**:

### Preventing too many prefetches[](https://nextjs.org/docs/app/guides/prefetching#preventing-too-many-prefetches)

Next.js automatically prefetches links in the viewport when using the `<Link>` component.

There may be cases where you want to prevent this to avoid unnecessary usage of resources, such as when rendering a large list of links (e.g. an infinite scroll table).

You can disable prefetching by setting the `prefetch` prop of the `<Link>` component to `false`.

However, this means static routes will only be fetched on click, and dynamic routes will wait for the server to render before navigating.

To reduce resource usage without disabling prefetch entirely, you can defer prefetching until the user hovers over a link. This targets only links the user is likely to visit.