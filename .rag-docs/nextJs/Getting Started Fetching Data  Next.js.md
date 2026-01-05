Last updated

December 3, 2025

This page will walk you through how you can fetch data in [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components), and how to [stream](https://nextjs.org/docs/app/getting-started/fetching-data#streaming) components that depend on data.

## Fetching data[](https://nextjs.org/docs/app/getting-started/fetching-data#fetching-data)

### Server Components[](https://nextjs.org/docs/app/getting-started/fetching-data#server-components)

You can fetch data in Server Components using any asynchronous I/O, such as:

1.  The [`fetch` API](https://nextjs.org/docs/app/getting-started/fetching-data#with-the-fetch-api)
2.  An [ORM or database](https://nextjs.org/docs/app/getting-started/fetching-data#with-an-orm-or-database)
3.  Reading from the filesystem using Node.js APIs like `fs`

#### With the `fetch` API[](https://nextjs.org/docs/app/getting-started/fetching-data#with-the-fetch-api)

To fetch data with the `fetch` API, turn your component into an asynchronous function, and await the `fetch` call. For example:

> **Good to know:**
> 
> -   `fetch` responses are not cached by default. However, Next.js will [pre-render](https://nextjs.org/docs/app/guides/caching#static-rendering) the route and the output will be cached for improved performance. If you'd like to opt into [dynamic rendering](https://nextjs.org/docs/app/guides/caching#dynamic-rendering), use the `{ cache: 'no-store' }` option. See the [`fetch` API Reference](https://nextjs.org/docs/app/api-reference/functions/fetch).
> -   During development, you can log `fetch` calls for better visibility and debugging. See the [`logging` API reference](https://nextjs.org/docs/app/api-reference/config/next-config-js/logging).

#### With an ORM or database[](https://nextjs.org/docs/app/getting-started/fetching-data#with-an-orm-or-database)

Since Server Components are rendered on the server, you can safely make database queries using an ORM or database client. Turn your component into an asynchronous function, and await the call:

### Client Components[](https://nextjs.org/docs/app/getting-started/fetching-data#client-components)

There are two ways to fetch data in Client Components, using:

1.  React's [`use` hook](https://react.dev/reference/react/use)
2.  A community library like [SWR](https://swr.vercel.app/) or [React Query](https://tanstack.com/query/latest)

#### Streaming data with the `use` hook[](https://nextjs.org/docs/app/getting-started/fetching-data#streaming-data-with-the-use-hook)

You can use React's [`use` hook](https://react.dev/reference/react/use) to [stream](https://nextjs.org/docs/app/getting-started/fetching-data#streaming) data from the server to client. Start by fetching data in your Server component, and pass the promise to your Client Component as prop:

Then, in your Client Component, use the `use` hook to read the promise:

In the example above, the `<Posts>` component is wrapped in a [`<Suspense>` boundary](https://react.dev/reference/react/Suspense). This means the fallback will be shown while the promise is being resolved. Learn more about [streaming](https://nextjs.org/docs/app/getting-started/fetching-data#streaming).

You can use a community library like [SWR](https://swr.vercel.app/) or [React Query](https://tanstack.com/query/latest) to fetch data in Client Components. These libraries have their own semantics for caching, streaming, and other features. For example, with SWR:

## Deduplicate requests and cache data[](https://nextjs.org/docs/app/getting-started/fetching-data#deduplicate-requests-and-cache-data)

One way to deduplicate `fetch` requests is with [request memoization](https://nextjs.org/docs/app/guides/caching#request-memoization). With this mechanism, `fetch` calls using `GET` or `HEAD` with the same URL and options in a single render pass are combined into one request. This happens automatically, and you can [opt out](https://nextjs.org/docs/app/guides/caching#opting-out) by passing an Abort signal to `fetch`.

Request memoization is scoped to the lifetime of a request.

You can also deduplicate `fetch` requests by using Next.js’ [Data Cache](https://nextjs.org/docs/app/guides/caching#data-cache), for example by setting `cache: 'force-cache'` in your `fetch` options.

Data Cache allows sharing data across the current render pass and incoming requests.

If you are _not_ using `fetch`, and instead using an ORM or database directly, you can wrap your data access with the [React `cache`](https://react.dev/reference/react/cache) function.

## Streaming[](https://nextjs.org/docs/app/getting-started/fetching-data#streaming)

> **Warning:** The content below assumes the [`cacheComponents` config option](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents) is enabled in your application. The flag was introduced in Next.js 15 canary.

When you fetch data in Server Components, the data is fetched and rendered on the server for each request. If you have any slow data requests, the whole route will be blocked from rendering until all the data is fetched.

To improve the initial load time and user experience, you can use streaming to break up the page's HTML into smaller chunks and progressively send those chunks from the server to the client.

![How Server Rendering with Streaming Works](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fserver-rendering-with-streaming.png&w=3840&q=75)

There are two ways you can leverage streaming in your application:

1.  Wrapping a page with a [`loading.js` file](https://nextjs.org/docs/app/getting-started/fetching-data#with-loadingjs)
2.  Wrapping a component with [`<Suspense>`](https://nextjs.org/docs/app/getting-started/fetching-data#with-suspense)

### With `loading.js`[](https://nextjs.org/docs/app/getting-started/fetching-data#with-loadingjs)

You can create a `loading.js` file in the same folder as your page to stream the **entire page** while the data is being fetched. For example, to stream `app/blog/page.js`, add the file inside the `app/blog` folder.

![Blog folder structure with loading.js file](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Floading-file.png&w=3840&q=75)

On navigation, the user will immediately see the layout and a [loading state](https://nextjs.org/docs/app/getting-started/fetching-data#creating-meaningful-loading-states) while the page is being rendered. The new content will then be automatically swapped in once rendering is complete.

![Loading UI](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Floading-ui.png&w=3840&q=75)

Behind-the-scenes, `loading.js` will be nested inside `layout.js`, and will automatically wrap the `page.js` file and any children below in a `<Suspense>` boundary.

![loading.js overview](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Floading-overview.png&w=3840&q=75)

This approach works well for route segments (layouts and pages), but for more granular streaming, you can use `<Suspense>`.

### With `<Suspense>`[](https://nextjs.org/docs/app/getting-started/fetching-data#with-suspense)

`<Suspense>` allows you to be more granular about what parts of the page to stream. For example, you can immediately show any page content that falls outside of the `<Suspense>` boundary, and stream in the list of blog posts inside the boundary.

### Creating meaningful loading states[](https://nextjs.org/docs/app/getting-started/fetching-data#creating-meaningful-loading-states)

An instant loading state is fallback UI that is shown immediately to the user after navigation. For the best user experience, we recommend designing loading states that are meaningful and help users understand the app is responding. For example, you can use skeletons and spinners, or a small but meaningful part of future screens such as a cover photo, title, etc.

In development, you can preview and inspect the loading state of your components using the [React Devtools](https://react.dev/learn/react-developer-tools).

## Examples[](https://nextjs.org/docs/app/getting-started/fetching-data#examples)

### Sequential data fetching[](https://nextjs.org/docs/app/getting-started/fetching-data#sequential-data-fetching)

Sequential data fetching happens when one request depends on data from another.

For example, `<Playlists>` can only fetch data after `<Artist>` completes because it needs the `artistID`:

In this example, `<Suspense>` allows the playlists to stream in after the artist data loads. However, the page still waits for the artist data before displaying anything. To prevent this, you can wrap the entire page component in a `<Suspense>` boundary (for example, using a [`loading.js` file](https://nextjs.org/docs/app/getting-started/fetching-data#with-loadingjs)) to show a loading state immediately.

Ensure your data source can resolve the first request quickly, as it blocks everything else. If you can't optimize the request further, consider [caching](https://nextjs.org/docs/app/getting-started/fetching-data#deduplicate-requests-and-cache-data) the result if the data changes infrequently.

### Parallel data fetching[](https://nextjs.org/docs/app/getting-started/fetching-data#parallel-data-fetching)

Parallel data fetching happens when data requests in a route are eagerly initiated and start at the same time.

By default, [layouts and pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages) are rendered in parallel. So each segment starts fetching data as soon as possible.

However, within _any_ component, multiple `async`/`await` requests can still be sequential if placed after the other. For example, `getAlbums` will be blocked until `getArtist` is resolved:

Start multiple requests by calling `fetch`, then await them with [`Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all). Requests begin as soon as `fetch` is called.

> **Good to know:** If one request fails when using `Promise.all`, the entire operation will fail. To handle this, you can use the [`Promise.allSettled`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) method instead.

### Preloading data[](https://nextjs.org/docs/app/getting-started/fetching-data#preloading-data)

You can preload data by creating a utility function that you eagerly call above blocking requests. `<Item>` conditionally renders based on the `checkIsAvailable()` function.

You can call `preload()` before `checkIsAvailable()` to eagerly initiate `<Item/>` data dependencies. By the time `<Item/>` is rendered, its data has already been fetched.

Additionally, you can use React's [`cache` function](https://react.dev/reference/react/cache) and the [`server-only` package](https://www.npmjs.com/package/server-only) to create a reusable utility function. This approach allows you to cache the data fetching function and ensure that it's only executed on the server.