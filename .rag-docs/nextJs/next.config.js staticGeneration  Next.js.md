This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback on [GitHub](https://github.com/vercel/next.js/issues).

Last updated

June 16, 2025

The `staticGeneration*` options allow you to configure the Static Generation process for advanced use cases.

## Config Options[](https://nextjs.org/docs/app/api-reference/config/next-config-js/staticGeneration#config-options)

The following options are available:

-   `staticGenerationRetryCount`: The number of times to retry a failed page generation before failing the build.
-   `staticGenerationMaxConcurrency`: The maximum number of pages to be processed per worker.
-   `staticGenerationMinPagesPerWorker`: The minimum number of pages to be processed before starting a new worker.

[Previous

staleTimes

](https://nextjs.org/docs/app/api-reference/config/next-config-js/staleTimes)[Next

taint

](https://nextjs.org/docs/app/api-reference/config/next-config-js/taint)