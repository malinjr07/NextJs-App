Last updated

June 16, 2025

You can specify a custom `stale-while-revalidate` expire time for CDNs to consume in the `Cache-Control` header for ISR enabled pages.

Open `next.config.js` and add the `expireTime` config:

Now when sending the `Cache-Control` header the expire time will be calculated depending on the specific revalidate period.

For example, if you have a revalidate of 15 minutes on a path and the expire time is one hour the generated `Cache-Control` header will be `s-maxage=900, stale-while-revalidate=2700` so that it can stay stale for 15 minutes less than the configured expire time.

[Previous

env

](https://nextjs.org/docs/app/api-reference/config/next-config-js/env)[Next

exportPathMap

](https://nextjs.org/docs/app/api-reference/config/next-config-js/exportPathMap)