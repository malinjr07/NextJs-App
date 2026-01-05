This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback on [GitHub](https://github.com/vercel/next.js/issues).

Last updated

June 16, 2025

The `forbidden` function throws an error that renders a Next.js 403 error page. It's useful for handling authorization errors in your application. You can customize the UI using the [`forbidden.js` file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden).

To start using `forbidden`, enable the experimental [`authInterrupts`](https://nextjs.org/docs/app/api-reference/config/next-config-js/authInterrupts) configuration option in your `next.config.js` file:

`forbidden` can be invoked in [Server Components](https://nextjs.org/docs/app/getting-started/server-and-client-components), [Server Actions](https://nextjs.org/docs/app/getting-started/updating-data), and [Route Handlers](https://nextjs.org/docs/app/api-reference/file-conventions/route).

## Good to know[](https://nextjs.org/docs/app/api-reference/functions/forbidden#good-to-know)

-   The `forbidden` function cannot be called in the [root layout](https://nextjs.org/docs/app/api-reference/file-conventions/layout#root-layout).

## Examples[](https://nextjs.org/docs/app/api-reference/functions/forbidden#examples)

### Role-based route protection[](https://nextjs.org/docs/app/api-reference/functions/forbidden#role-based-route-protection)

You can use `forbidden` to restrict access to certain routes based on user roles. This ensures that users who are authenticated but lack the required permissions cannot access the route.

### Mutations with Server Actions[](https://nextjs.org/docs/app/api-reference/functions/forbidden#mutations-with-server-actions)

When implementing mutations in Server Actions, you can use `forbidden` to only allow users with a specific role to update sensitive data.

## Version History[](https://nextjs.org/docs/app/api-reference/functions/forbidden#version-history)

| Version |        Changes        |
|---------|-----------------------|
| `v15.1.0` | `forbidden` introduced. |

## Next Steps

[Previous

fetch

](https://nextjs.org/docs/app/api-reference/functions/fetch)[Next

generateImageMetadata

](https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata)