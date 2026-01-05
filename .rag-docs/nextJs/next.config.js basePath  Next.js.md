Last updated

June 16, 2025

To deploy a Next.js application under a sub-path of a domain you can use the `basePath` config option.

`basePath` allows you to set a path prefix for the application. For example, to use `/docs` instead of `''` (an empty string, the default), open `next.config.js` and add the `basePath` config:

> **Good to know**: This value must be set at build time and cannot be changed without re-building as the value is inlined in the client-side bundles.

### Links[](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath#links)

When linking to other pages using `next/link` and `next/router` the `basePath` will be automatically applied.

For example, using `/about` will automatically become `/docs/about` when `basePath` is set to `/docs`.

Output html:

This makes sure that you don't have to change all links in your application when changing the `basePath` value.

### Images[](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath#images)

When using the [`next/image`](https://nextjs.org/docs/app/api-reference/components/image) component, you will need to add the `basePath` in front of `src`.

For example, using `/docs/me.png` will properly serve your image when `basePath` is set to `/docs`.

[Previous

authInterrupts

](https://nextjs.org/docs/app/api-reference/config/next-config-js/authInterrupts)[Next

browserDebugInfoInTerminal

](https://nextjs.org/docs/app/api-reference/config/next-config-js/browserDebugInfoInTerminal)