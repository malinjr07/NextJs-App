Last updated

September 22, 2025

An **error** file allows you to handle unexpected runtime errors and display fallback UI.

![error.js special file](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Ferror-special-file.png&w=3840&q=75)

`error.js` wraps a route segment and its nested children in a [React Error Boundary](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary). When an error throws within the boundary, the `error` component shows as the fallback UI.

![How error.js works](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Ferror-overview.png&w=3840&q=75)

> **Good to know**:
> 
> -   The [React DevTools](https://react.dev/learn/react-developer-tools) allow you to toggle error boundaries to test error states.
> -   If you want errors to bubble up to the parent error boundary, you can `throw` when rendering the `error` component.

## Reference[](https://nextjs.org/docs/app/api-reference/file-conventions/error#reference)

### Props[](https://nextjs.org/docs/app/api-reference/file-conventions/error#props)

#### `error`[](https://nextjs.org/docs/app/api-reference/file-conventions/error#error)

An instance of an [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) object forwarded to the `error.js` Client Component.

> **Good to know:** During development, the `Error` object forwarded to the client will be serialized and include the `message` of the original error for easier debugging. However, **this behavior is different in production** to avoid leaking potentially sensitive details included in the error to the client.

#### `error.message`[](https://nextjs.org/docs/app/api-reference/file-conventions/error#errormessage)

-   Errors forwarded from Client Components show the original `Error` message.
-   Errors forwarded from Server Components show a generic message with an identifier. This is to prevent leaking sensitive details. You can use the identifier, under `errors.digest`, to match the corresponding server-side logs.

#### `error.digest`[](https://nextjs.org/docs/app/api-reference/file-conventions/error#errordigest)

An automatically generated hash of the error thrown. It can be used to match the corresponding error in server-side logs.

#### `reset`[](https://nextjs.org/docs/app/api-reference/file-conventions/error#reset)

The cause of an error can sometimes be temporary. In these cases, trying again might resolve the issue.

An error component can use the `reset()` function to prompt the user to attempt to recover from the error. When executed, the function will try to re-render the error boundary's contents. If successful, the fallback error component is replaced with the result of the re-render.

## Examples[](https://nextjs.org/docs/app/api-reference/file-conventions/error#examples)

### Global Error[](https://nextjs.org/docs/app/api-reference/file-conventions/error#global-error)

While less common, you can handle errors in the root layout or template using `global-error.jsx`, located in the root app directory, even when leveraging [internationalization](https://nextjs.org/docs/app/guides/internationalization). Global error UI must define its own `<html>` and `<body>` tags, global styles, fonts, or other dependencies that your error page requires. This file replaces the root layout or template when active.

> **Good to know**: Error boundaries must be [Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components#using-client-components), which means that [`metadata` and `generateMetadata`](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) exports are not supported in `global-error.jsx`. As an alternative, you can use the React [`<title>`](https://react.dev/reference/react-dom/components/title) component.

### Graceful error recovery with a custom error boundary[](https://nextjs.org/docs/app/api-reference/file-conventions/error#graceful-error-recovery-with-a-custom-error-boundary)

When rendering fails on the client, it can be useful to show the last known server rendered UI for a better user experience.

The `GracefullyDegradingErrorBoundary` is an example of a custom error boundary that captures and preserves the current HTML before an error occurs. If a rendering error happens, it re-renders the captured HTML and displays a persistent notification bar to inform the user.

## Version History[](https://nextjs.org/docs/app/api-reference/file-conventions/error#version-history)

| Version |                  Changes                  |
|---------|-------------------------------------------|
| `v15.2.0` | Also display `global-error` in development. |
| `v13.1.0` |         `global-error` introduced.          |
| `v13.0.0` |             `error` introduced.             |