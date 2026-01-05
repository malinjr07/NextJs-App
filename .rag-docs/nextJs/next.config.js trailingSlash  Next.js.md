Last updated

June 16, 2025

By default Next.js will redirect URLs with trailing slashes to their counterpart without a trailing slash. For example `/about/` will redirect to `/about`. You can configure this behavior to act the opposite way, where URLs without trailing slashes are redirected to their counterparts with trailing slashes.

Open `next.config.js` and add the `trailingSlash` config:

With this option set, URLs like `/about` will redirect to `/about/`.

When using `trailingSlash: true`, certain URLs are exceptions and will not have a trailing slash appended:

-   Static file URLs, such as files with extensions.
-   Any paths under `.well-known/`.

For example, the following URLs will remain unchanged: `/file.txt`, `images/photos/picture.png`, and `.well-known/subfolder/config.json`.

When used with [`output: "export"`](https://nextjs.org/docs/app/guides/static-exports) configuration, the `/about` page will output `/about/index.html` (instead of the default `/about.html`).

## Version History[](https://nextjs.org/docs/app/api-reference/config/next-config-js/trailingSlash#version-history)

| Version |       Changes        |
|---------|----------------------|
| `v9.5.0`  | `trailingSlash` added. |

[Previous

taint

](https://nextjs.org/docs/app/api-reference/config/next-config-js/taint)[Next

transpilePackages

](https://nextjs.org/docs/app/api-reference/config/next-config-js/transpilePackages)