Last updated

June 16, 2025

## Options[](https://nextjs.org/docs/app/api-reference/config/next-config-js/logging#options)

### Fetching[](https://nextjs.org/docs/app/api-reference/config/next-config-js/logging#fetching)

You can configure the logging level and whether the full URL is logged to the console when running Next.js in development mode.

Currently, `logging` only applies to data fetching using the `fetch` API. It does not yet apply to other logs inside of Next.js.

Any `fetch` requests that are restored from the [Server Components HMR cache](https://nextjs.org/docs/app/api-reference/config/next-config-js/serverComponentsHmrCache) are not logged by default. However, this can be enabled by setting `logging.fetches.hmrRefreshes` to `true`.

### Incoming Requests[](https://nextjs.org/docs/app/api-reference/config/next-config-js/logging#incoming-requests)

By default all the incoming requests will be logged in the console during development. You can use the `incomingRequests` option to decide which requests to ignore. Since this is only logged in development, this option doesn't affect production builds.

Or you can disable incoming request logging by setting `incomingRequests` to `false`.

### Disabling Logging[](https://nextjs.org/docs/app/api-reference/config/next-config-js/logging#disabling-logging)

In addition, you can disable the development logging by setting `logging` to `false`.