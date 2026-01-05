Last updated

June 11, 2025

The [`next/font`](https://nextjs.org/docs/app/api-reference/components/font) module automatically optimizes your fonts and removes external network requests for improved privacy and performance.

It includes **built-in self-hosting** for any font file. This means you can optimally load web fonts with no layout shift.

To start using `next/font`, import it from [`next/font/local`](https://nextjs.org/docs/app/getting-started/fonts#local-fonts) or [`next/font/google`](https://nextjs.org/docs/app/getting-started/fonts#google-fonts), call it as a function with the appropriate options, and set the `className` of the element you want to apply the font to. For example:

Fonts are scoped to the component they're used in. To apply a font to your entire application, add it to the [Root Layout](https://nextjs.org/docs/app/api-reference/file-conventions/layout#root-layout).

## Google fonts[](https://nextjs.org/docs/app/getting-started/fonts#google-fonts)

You can automatically self-host any Google Font. Fonts are included stored as static assets and served from the same domain as your deployment, meaning no requests are sent to Google by the browser when the user visits your site.

To start using a Google Font, import your chosen font from `next/font/google`:

We recommend using [variable fonts](https://fonts.google.com/variablefonts) for the best performance and flexibility. But if you can't use a variable font, you will need to specify a weight:

## Local fonts[](https://nextjs.org/docs/app/getting-started/fonts#local-fonts)

To use a local font, import your font from `next/font/local` and specify the [`src`](https://nextjs.org/docs/app/api-reference/components/font#src) of your local font file. Fonts can be stored in the [`public`](https://nextjs.org/docs/app/api-reference/file-conventions/public-folder) folder or co-located inside the `app` folder. For example:

If you want to use multiple files for a single font family, `src` can be an array: