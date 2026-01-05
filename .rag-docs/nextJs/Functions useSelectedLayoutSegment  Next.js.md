Last updated

June 16, 2025

`useSelectedLayoutSegment` is a **Client Component** hook that lets you read the active route segment **one level below** the Layout it is called from.

It is useful for navigation UI, such as tabs inside a parent layout that change style depending on the active child segment.

> **Good to know**:
> 
> -   Since `useSelectedLayoutSegment` is a [Client Component](https://nextjs.org/docs/app/getting-started/server-and-client-components) hook, and Layouts are [Server Components](https://nextjs.org/docs/app/getting-started/server-and-client-components) by default, `useSelectedLayoutSegment` is usually called via a Client Component that is imported into a Layout.
> -   `useSelectedLayoutSegment` only returns the segment one level down. To return all active segments, see [`useSelectedLayoutSegments`](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments)

## Parameters[](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment#parameters)

`useSelectedLayoutSegment` _optionally_ accepts a [`parallelRoutesKey`](https://nextjs.org/docs/app/api-reference/file-conventions/parallel-routes#with-useselectedlayoutsegments), which allows you to read the active route segment within that slot.

## Returns[](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment#returns)

`useSelectedLayoutSegment` returns a string of the active segment or `null` if one doesn't exist.

For example, given the Layouts and URLs below, the returned segment would be:

|         Layout          |         Visited URL          | Returned Segment |
|-------------------------|------------------------------|------------------|
|      `app/layout.js`      |              `/`               |       `null`       |
|      `app/layout.js`      |          `/dashboard`          |   `'dashboard'`    |
| `app/dashboard/layout.js` |          `/dashboard`          |       `null`       |
| `app/dashboard/layout.js` |     `/dashboard/settings`      |    `'settings'`    |
| `app/dashboard/layout.js` |     `/dashboard/analytics`     |   `'analytics'`    |
| `app/dashboard/layout.js` | `/dashboard/analytics/monthly` |   `'analytics'`    |

## Examples[](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment#examples)

### Creating an active link component[](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment#creating-an-active-link-component)

You can use `useSelectedLayoutSegment` to create an active link component that changes style depending on the active segment. For example, a featured posts list in the sidebar of a blog:

## Version History[](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment#version-history)

| Version |               Changes                |
|---------|--------------------------------------|
| `v13.0.0` | `useSelectedLayoutSegment` introduced. |

[Previous

useSearchParams

](https://nextjs.org/docs/app/api-reference/functions/use-search-params)[Next

useSelectedLayoutSegments

](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments)