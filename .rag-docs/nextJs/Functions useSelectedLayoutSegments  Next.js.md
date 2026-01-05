Last updated

June 16, 2025

`useSelectedLayoutSegments` is a **Client Component** hook that lets you read the active route segments **below** the Layout it is called from.

It is useful for creating UI in parent Layouts that need knowledge of active child segments such as breadcrumbs.

> **Good to know**:
> 
> -   Since `useSelectedLayoutSegments` is a [Client Component](https://nextjs.org/docs/app/getting-started/server-and-client-components) hook, and Layouts are [Server Components](https://nextjs.org/docs/app/getting-started/server-and-client-components) by default, `useSelectedLayoutSegments` is usually called via a Client Component that is imported into a Layout.
> -   The returned segments include [Route Groups](https://nextjs.org/docs/app/api-reference/file-conventions/route-groups), which you might not want to be included in your UI. You can use the [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) array method to remove items that start with a bracket.

## Parameters[](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments#parameters)

`useSelectedLayoutSegments` _optionally_ accepts a [`parallelRoutesKey`](https://nextjs.org/docs/app/api-reference/file-conventions/parallel-routes#with-useselectedlayoutsegments), which allows you to read the active route segment within that slot.

## Returns[](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments#returns)

`useSelectedLayoutSegments` returns an array of strings containing the active segments one level down from the layout the hook was called from. Or an empty array if none exist.

For example, given the Layouts and URLs below, the returned segments would be:

|         Layout          |     Visited URL     |     Returned Segments     |
|-------------------------|---------------------|---------------------------|
|      `app/layout.js`      |          `/`          |            `[]`             |
|      `app/layout.js`      |     `/dashboard`      |       `['dashboard']`       |
|      `app/layout.js`      | `/dashboard/settings` | `['dashboard', 'settings']` |
| `app/dashboard/layout.js` |     `/dashboard`      |            `[]`             |
| `app/dashboard/layout.js` | `/dashboard/settings` |       `['settings']`        |

## Version History[](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments#version-history)

| Version |                Changes                |
|---------|---------------------------------------|
| `v13.0.0` | `useSelectedLayoutSegments` introduced. |

[Previous

useSelectedLayoutSegment

](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment)[Next

userAgent

](https://nextjs.org/docs/app/api-reference/functions/userAgent)