Last updated

September 3, 2025

Add or generate a `manifest.(json|webmanifest)` file that matches the [Web Manifest Specification](https://developer.mozilla.org/docs/Web/Manifest) in the **root** of `app` directory to provide information about your web application for the browser.

## Static Manifest file[](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest#static-manifest-file)

## Generate a Manifest file[](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest#generate-a-manifest-file)

Add a `manifest.js` or `manifest.ts` file that returns a [`Manifest` object](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest#manifest-object).

> Good to know: `manifest.js` is special Route Handlers that is cached by default unless it uses a [Dynamic API](https://nextjs.org/docs/app/guides/caching#dynamic-apis) or [dynamic config](https://nextjs.org/docs/app/guides/caching#segment-config-options) option.

### Manifest Object[](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest#manifest-object)

The manifest object contains an extensive list of options that may be updated due to new web standards. For information on all the current options, refer to the `MetadataRoute.Manifest` type in your code editor if using [TypeScript](https://nextjs.org/docs/app/api-reference/config/typescript#ide-plugin) or see the [MDN](https://developer.mozilla.org/docs/Web/Manifest) docs.

[Previous

favicon, icon, and apple-icon

](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons)[Next

opengraph-image and twitter-image

](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image)