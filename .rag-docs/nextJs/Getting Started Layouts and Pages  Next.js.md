Last updated

November 17, 2025

Next.js uses **file-system based routing**, meaning you can use folders and files to define routes. This page will guide you through how to create layouts and pages, and link between them.

## Creating a page[](https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-page)

A **page** is UI that is rendered on a specific route. To create a page, add a [`page` file](https://nextjs.org/docs/app/api-reference/file-conventions/page) inside the `app` directory and default export a React component. For example, to create an index page (`/`):

![page.js special file](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fpage-special-file.png&w=3840&q=75)

## Creating a layout[](https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-layout)

A layout is UI that is **shared** between multiple pages. On navigation, layouts preserve state, remain interactive, and do not rerender.

You can define a layout by default exporting a React component from a [`layout` file](https://nextjs.org/docs/app/api-reference/file-conventions/layout). The component should accept a `children` prop which can be a page or another [layout](https://nextjs.org/docs/app/getting-started/layouts-and-pages#nesting-layouts).

For example, to create a layout that accepts your index page as child, add a `layout` file inside the `app` directory:

![layout.js special file](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Flayout-special-file.png&w=3840&q=75)

The layout above is called a [root layout](https://nextjs.org/docs/app/api-reference/file-conventions/layout#root-layout) because it's defined at the root of the `app` directory. The root layout is **required** and must contain `html` and `body` tags.

## Creating a nested route[](https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-nested-route)

A nested route is a route composed of multiple URL segments. For example, the `/blog/[slug]` route is composed of three segments:

-   `/` (Root Segment)
-   `blog` (Segment)
-   `[slug]` (Leaf Segment)

In Next.js:

-   **Folders** are used to define the route segments that map to URL segments.
-   **Files** (like `page` and `layout`) are used to create UI that is shown for a segment.

To create nested routes, you can nest folders inside each other. For example, to add a route for `/blog`, create a folder called `blog` in the `app` directory. Then, to make `/blog` publicly accessible, add a `page.tsx` file:

![File hierarchy showing blog folder and a page.js file](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fblog-nested-route.png&w=3840&q=75)

You can continue nesting folders to create nested routes. For example, to create a route for a specific blog post, create a new `[slug]` folder inside `blog` and add a `page` file:

![File hierarchy showing blog folder with a nested slug folder and a page.js file](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fblog-post-nested-route.png&w=3840&q=75)

Wrapping a folder name in square brackets (e.g. `[slug]`) creates a [dynamic route segment](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes) which is used to generate multiple pages from data. e.g. blog posts, product pages, etc.

## Nesting layouts[](https://nextjs.org/docs/app/getting-started/layouts-and-pages#nesting-layouts)

By default, layouts in the folder hierarchy are also nested, which means they wrap child layouts via their `children` prop. You can nest layouts by adding `layout` inside specific route segments (folders).

For example, to create a layout for the `/blog` route, add a new `layout` file inside the `blog` folder.

![File hierarchy showing root layout wrapping the blog layout](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fnested-layouts.png&w=3840&q=75)

If you were to combine the two layouts above, the root layout (`app/layout.js`) would wrap the blog layout (`app/blog/layout.js`), which would wrap the blog (`app/blog/page.js`) and blog post page (`app/blog/[slug]/page.js`).

## Creating a dynamic segment[](https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-dynamic-segment)

[Dynamic segments](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes) allow you to create routes that are generated from data. For example, instead of manually creating a route for each individual blog post, you can create a dynamic segment to generate the routes based on blog post data.

To create a dynamic segment, wrap the segment (folder) name in square brackets: `[segmentName]`. For example, in the `app/blog/[slug]/page.tsx` route, the `[slug]` is the dynamic segment.

Learn more about [Dynamic Segments](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes) and the [`params`](https://nextjs.org/docs/app/api-reference/file-conventions/page#params-optional) props.

Nested [layouts within Dynamic Segments](https://nextjs.org/docs/app/api-reference/file-conventions/layout#params-optional), can also access the `params` props.

## Rendering with search params[](https://nextjs.org/docs/app/getting-started/layouts-and-pages#rendering-with-search-params)

In a Server Component **page**, you can access search parameters using the [`searchParams`](https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional) prop:

Using `searchParams` opts your page into [**dynamic rendering**](https://nextjs.org/docs/app/guides/caching#dynamic-rendering) because it requires an incoming request to read the search parameters from.

Client Components can read search params using the [`useSearchParams`](https://nextjs.org/docs/app/api-reference/functions/use-search-params) hook.

Learn more about `useSearchParams` in [statically rendered](https://nextjs.org/docs/app/api-reference/functions/use-search-params#static-rendering) and [dynamically rendered](https://nextjs.org/docs/app/api-reference/functions/use-search-params#dynamic-rendering) routes.

### What to use and when[](https://nextjs.org/docs/app/getting-started/layouts-and-pages#what-to-use-and-when)

-   Use the `searchParams` prop when you need search parameters to **load data for the page** (e.g. pagination, filtering from a database).
-   Use `useSearchParams` when search parameters are used **only on the client** (e.g. filtering a list already loaded via props).
-   As a small optimization, you can use `new URLSearchParams(window.location.search)` in **callbacks or event handlers** to read search params without triggering re-renders.

## Linking between pages[](https://nextjs.org/docs/app/getting-started/layouts-and-pages#linking-between-pages)

You can use the [`<Link>` component](https://nextjs.org/docs/app/api-reference/components/link) to navigate between routes. `<Link>` is a built-in Next.js component that extends the HTML `<a>` tag to provide [prefetching](https://nextjs.org/docs/app/getting-started/linking-and-navigating#prefetching) and [client-side navigation](https://nextjs.org/docs/app/getting-started/linking-and-navigating#client-side-transitions).

For example, to generate a list of blog posts, import `<Link>` from `next/link` and pass a `href` prop to the component:

> **Good to know**: `<Link>` is the primary way to navigate between routes in Next.js. You can also use the [`useRouter` hook](https://nextjs.org/docs/app/api-reference/functions/use-router) for more advanced navigation.

## Route Props Helpers[](https://nextjs.org/docs/app/getting-started/layouts-and-pages#route-props-helpers)

Next.js exposes utility types that infer `params` and named slots from your route structure:

-   [**PageProps**](https://nextjs.org/docs/app/api-reference/file-conventions/page#page-props-helper): Props for `page` components, including `params` and `searchParams`.
-   [**LayoutProps**](https://nextjs.org/docs/app/api-reference/file-conventions/layout#layout-props-helper): Props for `layout` components, including `children` and any named slots (e.g. folders like `@analytics`).

These are globally available helpers, generated when running either `next dev`, `next build` or [`next typegen`](https://nextjs.org/docs/app/api-reference/cli/next#next-typegen-options).

> **Good to know**
> 
> -   Static routes resolve `params` to `{}`.
> -   `PageProps`, `LayoutProps` are global helpers — no imports required.
> -   Types are generated during `next dev`, `next build` or `next typegen`.