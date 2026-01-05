Last updated

June 16, 2025

If you want to use a cloud provider to optimize images instead of using the Next.js built-in Image Optimization API, you can configure `next.config.js` with the following:

This `loaderFile` must point to a file relative to the root of your Next.js application. The file must export a default function that returns a string, for example:

Alternatively, you can use the [`loader` prop](https://nextjs.org/docs/app/api-reference/components/image#loader) to pass the function to each instance of `next/image`.

> **Good to know**: Customizing the image loader file, which accepts a function, requires using [Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components) to serialize the provided function.

To learn more about configuring the behavior of the built-in [Image Optimization API](https://nextjs.org/docs/app/api-reference/components/image) and the [Image Component](https://nextjs.org/docs/app/api-reference/components/image), see [Image Configuration Options](https://nextjs.org/docs/app/api-reference/components/image#configuration-options) for available options.

## Example Loader Configuration[](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#example-loader-configuration)

-   [Akamai](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#akamai)
-   [AWS CloudFront](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#aws-cloudfront)
-   [Cloudinary](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#cloudinary)
-   [Cloudflare](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#cloudflare)
-   [Contentful](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#contentful)
-   [Fastly](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#fastly)
-   [Gumlet](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#gumlet)
-   [ImageEngine](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#imageengine)
-   [Imgix](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#imgix)
-   [PixelBin](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#pixelbin)
-   [Sanity](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#sanity)
-   [Sirv](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#sirv)
-   [Supabase](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#supabase)
-   [Thumbor](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#thumbor)
-   [Imagekit](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#imagekitio)
-   [Nitrogen AIO](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#nitrogen-aio)

### Akamai[](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#akamai)

### AWS CloudFront[](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#aws-cloudfront)

### Cloudinary[](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#cloudinary)

### Cloudflare[](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#cloudflare)

### Contentful[](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#contentful)

### Fastly[](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#fastly)

### Gumlet[](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#gumlet)

### ImageEngine[](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#imageengine)

### Imgix[](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#imgix)

### PixelBin[](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#pixelbin)

### Sanity[](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#sanity)

### Sirv[](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#sirv)

### Supabase[](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#supabase)

### Thumbor[](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#thumbor)

### ImageKit.io[](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#imagekitio)

### Nitrogen AIO[](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#nitrogen-aio)