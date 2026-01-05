This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback on [GitHub](https://github.com/vercel/next.js/issues).

Last updated

June 16, 2025

The **unauthorized** file is used to render UI when the [`unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized) function is invoked during authentication. Along with allowing you to customize the UI, Next.js will return a `401` status code.

## Reference[](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized#reference)

### Props[](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized#props)

`unauthorized.js` components do not accept any props.

## Examples[](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized#examples)

### Displaying login UI to unauthenticated users[](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized#displaying-login-ui-to-unauthenticated-users)

You can use [`unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized) function to render the `unauthorized.js` file with a login UI.

## Version History[](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized#version-history)

| Version |           Changes           |
|---------|-----------------------------|
| `v15.1.0` | `unauthorized.js` introduced. |

## Next Steps

[Previous

template.js

](https://nextjs.org/docs/app/api-reference/file-conventions/template)[Next

Metadata Files

](https://nextjs.org/docs/app/api-reference/file-conventions/metadata)