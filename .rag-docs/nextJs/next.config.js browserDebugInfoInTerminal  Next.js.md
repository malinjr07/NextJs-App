This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback on [GitHub](https://github.com/vercel/next.js/issues).

Last updated

October 10, 2025

The `experimental.browserDebugInfoInTerminal` option forwards console output and runtime errors originating in the browser to the dev server terminal.

This option is disabled by default. When enabled it only works in development mode.

## Usage[](https://nextjs.org/docs/app/api-reference/config/next-config-js/browserDebugInfoInTerminal#usage)

Enable forwarding:

### Serialization limits[](https://nextjs.org/docs/app/api-reference/config/next-config-js/browserDebugInfoInTerminal#serialization-limits)

Deeply nested objects/arrays are truncated using **sensible defaults**. You can tweak these limits:

-   **depthLimit**: (optional) Limit stringification depth for nested objects/arrays. Default: 5
-   **edgeLimit**: (optional) Max number of properties or elements to include per object or array. Default: 100

### Source location[](https://nextjs.org/docs/app/api-reference/config/next-config-js/browserDebugInfoInTerminal#source-location)

Source locations are included by default when this feature is enabled.

Clicking the button prints this message to the terminal.

To suppress them, set `showSourceLocation: false`.

-   **showSourceLocation**: Include source location info when available.

| Version |                      Changes                       |
|---------|----------------------------------------------------|
| `v15.4.0` | experimental `browserDebugInfoInTerminal` introduced |

[Previous

basePath

](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath)[Next

cacheComponents

](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents)