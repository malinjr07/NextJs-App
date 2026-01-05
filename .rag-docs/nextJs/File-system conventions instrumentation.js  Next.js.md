Last updated

October 17, 2025

The `instrumentation.js|ts` file is used to integrate observability tools into your application, allowing you to track the performance and behavior, and to debug issues in production.

To use it, place the file in the **root** of your application or inside a [`src` folder](https://nextjs.org/docs/app/api-reference/file-conventions/src-folder) if using one.

## Exports[](https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation#exports)

### `register` (optional)[](https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation#register-optional)

The file exports a `register` function that is called **once** when a new Next.js server instance is initiated. `register` can be an async function.

### `onRequestError` (optional)[](https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation#onrequesterror-optional)

You can optionally export an `onRequestError` function to track **server** errors to any custom observability provider.

-   If you're running any async tasks in `onRequestError`, make sure they're awaited. `onRequestError` will be triggered when the Next.js server captures the error.
-   The `error` instance might not be the original error instance thrown, as it may be processed by React if encountered during Server Components rendering. If this happens, you can use `digest` property on an error to identify the actual error type.

#### Parameters[](https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation#parameters)

The function accepts three parameters: `error`, `request`, and `context`.

-   `error`: The caught error itself (type is always `Error`), and a `digest` property which is the unique ID of the error.
-   `request`: Read-only request information associated with the error.
-   `context`: The context in which the error occurred. This can be the type of router (App or Pages Router), and/or (Server Components (`'render'`), Route Handlers (`'route'`), Server Actions (`'action'`), or Proxy (`'proxy'`)).

### Specifying the runtime[](https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation#specifying-the-runtime)

The `instrumentation.js` file works in both the Node.js and Edge runtime, however, you can use `process.env.NEXT_RUNTIME` to target a specific runtime.

## Version History[](https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation#version-history)

| Version |                        Changes                        |
|---------|-------------------------------------------------------|
| `v15.0.0` |   `onRequestError` introduced, `instrumentation` stable   |
| `v14.0.4` |         Turbopack support for `instrumentation`         |
| `v13.2.0` | `instrumentation` introduced as an experimental feature |