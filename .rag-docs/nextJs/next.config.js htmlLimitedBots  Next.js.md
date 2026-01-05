Last updated

October 3, 2025

The `htmlLimitedBots` config allows you to specify a list of user agents that should receive blocking metadata instead of [streaming metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#streaming-metadata).

## Default list[](https://nextjs.org/docs/app/api-reference/config/next-config-js/htmlLimitedBots#default-list)

Next.js includes a default list of HTML limited bots, including:

-   Google crawlers (e.g. Mediapartners-Google, AdsBot-Google, Google-PageRenderer)
-   Bingbot
-   Twitterbot
-   Slackbot

See the full list [here](https://github.com/vercel/next.js/blob/canary/packages/next/src/shared/lib/router/utils/html-bots.ts).

Specifying a `htmlLimitedBots` config will override the Next.js' default list. However, this is advanced behavior, and the default should be sufficient for most cases.

## Disabling[](https://nextjs.org/docs/app/api-reference/config/next-config-js/htmlLimitedBots#disabling)

To fully disable streaming metadata:

## Version History[](https://nextjs.org/docs/app/api-reference/config/next-config-js/htmlLimitedBots#version-history)

| Version |              Changes               |
|---------|------------------------------------|
| 15.2.0  | `htmlLimitedBots` option introduced. |

[Previous

headers

](https://nextjs.org/docs/app/api-reference/config/next-config-js/headers)[Next

httpAgentOptions

](https://nextjs.org/docs/app/api-reference/config/next-config-js/httpAgentOptions)