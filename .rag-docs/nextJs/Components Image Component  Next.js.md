Last updated

November 21, 2025

The Next.js Image component extends the HTML `<img>` element for automatic image optimization.

## Reference[](https://nextjs.org/docs/app/api-reference/components/image#reference)

### Props[](https://nextjs.org/docs/app/api-reference/components/image#props)

The following props are available:

|       Prop        |                Example                 |      Type       |   Status   |
|-------------------|----------------------------------------|-----------------|------------|
|        `src`        |           `src="/profile.png"`           |     String      |  Required  |
|        `alt`        |      `alt="Picture of the author"`       |     String      |  Required  |
|       `width`       |              `width={500}`               |  Integer (px)   |     \-     |
|      `height`       |              `height={500}`              |  Integer (px)   |     \-     |
|       `fill`        |              `fill={true}`               |     Boolean     |     \-     |
|      `loader`       |          `loader={imageLoader}`          |    Function     |     \-     |
|       `sizes`       | `sizes="(max-width: 768px) 100vw, 33vw"` |     String      |     \-     |
|      `quality`      |              `quality={80}`              | Integer (1-100) |     \-     |
|      `preload`      |             `preload={true}`             |     Boolean     |     \-     |
|    `placeholder`    |           `placeholder="blur"`           |     String      |     \-     |
|       `style`       |     `style={{objectFit: "contain"}}`     |     Object      |     \-     |
| `onLoadingComplete` |   `onLoadingComplete={img => done())}`   |    Function     | Deprecated |
|      `onLoad`       |       `onLoad={event => done())}`        |    Function     |     \-     |
|      `onError`      |        `onError(event => fail()}`        |    Function     |     \-     |
|      `loading`      |             `loading="lazy"`             |     String      |     \-     |
|    `blurDataURL`    |    `blurDataURL="data:image/jpeg..."`    |     String      |     \-     |
|    `unoptimized`    |           `unoptimized={true}`           |     Boolean     |     \-     |
|    `overrideSrc`    |         `overrideSrc="/seo.png"`         |     String      |     \-     |
|     `decoding`      |            `decoding="async"`            |     String      |     \-     |

#### `src`[](https://nextjs.org/docs/app/api-reference/components/image#src)

The source of the image. Can be one of the following:

An internal path string.

An absolute external URL (must be configured with [remotePatterns](https://nextjs.org/docs/app/api-reference/components/image#remotepatterns)).

A static import.

> **Good to know**: For security reasons, the Image Optimization API using the default [loader](https://nextjs.org/docs/app/api-reference/components/image#loader) will _not_ forward headers when fetching the `src` image. If the `src` image requires authentication, consider using the [unoptimized](https://nextjs.org/docs/app/api-reference/components/image#unoptimized) property to disable Image Optimization.

#### `alt`[](https://nextjs.org/docs/app/api-reference/components/image#alt)

The `alt` property is used to describe the image for screen readers and search engines. It is also the fallback text if images have been disabled or an error occurs while loading the image.

It should contain text that could replace the image [without changing the meaning of the page](https://html.spec.whatwg.org/multipage/images.html#general-guidelines). It is not meant to supplement the image and should not repeat information that is already provided in the captions above or below the image.

If the image is [purely decorative](https://html.spec.whatwg.org/multipage/images.html#a-purely-decorative-image-that-doesn't-add-any-information) or [not intended for the user](https://html.spec.whatwg.org/multipage/images.html#an-image-not-intended-for-the-user), the `alt` property should be an empty string (`alt=""`).

> Learn more about [image accessibility guidelines](https://html.spec.whatwg.org/multipage/images.html#alt).

#### `width` and `height`[](https://nextjs.org/docs/app/api-reference/components/image#width-and-height)

The `width` and `height` properties represent the [intrinsic](https://developer.mozilla.org/en-US/docs/Glossary/Intrinsic_Size) image size in pixels. This property is used to infer the correct **aspect ratio** used by browsers to reserve space for the image and avoid layout shift during loading. It does not determine the _rendered size_ of the image, which is controlled by CSS.

You **must** set both `width` and `height` properties unless:

-   The image is statically imported.
-   The image has the [`fill` property](https://nextjs.org/docs/app/api-reference/components/image#fill)

If the height and width are unknown, we recommend using the [`fill` property](https://nextjs.org/docs/app/api-reference/components/image#fill).

#### `fill`[](https://nextjs.org/docs/app/api-reference/components/image#fill)

A boolean that causes the image to expand to the size of the parent element.

**Positioning**:

-   The parent element **must** assign `position: "relative"`, `"fixed"`, `"absolute"`.
-   By default, the `<img>` element uses `position: "absolute"`.

**Object Fit**:

If no styles are applied to the image, the image will stretch to fit the container. You can use `objectFit` to control cropping and scaling.

-   `"contain"`: The image will be scaled down to fit the container and preserve aspect ratio.
-   `"cover"`: The image will fill the container and be cropped.

> Learn more about [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position) and [`object-fit`](https://developer.mozilla.org/docs/Web/CSS/object-fit).

#### `loader`[](https://nextjs.org/docs/app/api-reference/components/image#loader)

A custom function used to generate the image URL. The function receives the following parameters, and returns a URL string for the image:

-   [`src`](https://nextjs.org/docs/app/api-reference/components/image#src)
-   [`width`](https://nextjs.org/docs/app/api-reference/components/image#width-and-height)
-   [`quality`](https://nextjs.org/docs/app/api-reference/components/image#quality)

> **Good to know**: Using props like `onLoad`, which accept a function, requires using [Client Components](https://react.dev/reference/rsc/use-client) to serialize the provided function.

Alternatively, you can use the [loaderFile](https://nextjs.org/docs/app/api-reference/components/image#loaderfile) configuration in `next.config.js` to configure every instance of `next/image` in your application, without passing a prop.

#### `sizes`[](https://nextjs.org/docs/app/api-reference/components/image#sizes)

Define the sizes of the image at different breakpoints. Used by the browser to choose the most appropriate size from the generated `srcset`.

`sizes` should be used when:

-   The image is using the [`fill`](https://nextjs.org/docs/app/api-reference/components/image#fill) prop
-   CSS is used to make the image responsive

If `sizes` is missing, the browser assumes the image will be as wide as the viewport (`100vw`). This can cause unnecessarily large images to be downloaded.

In addition, `sizes` affects how `srcset` is generated:

-   Without `sizes`: Next.js generates a limited `srcset` (e.g. 1x, 2x), suitable for fixed-size images.
-   With `sizes`: Next.js generates a full `srcset` (e.g. 640w, 750w, etc.), optimized for responsive layouts.

> Learn more about `srcset` and `sizes` on [web.dev](https://web.dev/learn/design/responsive-images/#sizes) and [mdn](https://developer.mozilla.org/docs/Web/HTML/Element/img#sizes).

#### `quality`[](https://nextjs.org/docs/app/api-reference/components/image#quality)

An integer between `1` and `100` that sets the quality of the optimized image. Higher values increase file size and visual fidelity. Lower values reduce file size but may affect sharpness.

If you’ve configured [qualities](https://nextjs.org/docs/app/api-reference/components/image#qualities) in `next.config.js`, the value must match one of the allowed entries.

> **Good to know**: If the original image is already low quality, setting a high quality value will increase the file size without improving appearance.

#### `style`[](https://nextjs.org/docs/app/api-reference/components/image#style)

Allows passing CSS styles to the underlying image element.

> **Good to know**: If you’re using the `style` prop to set a custom width, be sure to also set `height: 'auto'` to preserve the image’s aspect ratio.

#### `preload`[](https://nextjs.org/docs/app/api-reference/components/image#preload)

A boolean that indicates if the image should be preloaded.

-   `true`: [Preloads](https://web.dev/preload-responsive-images/) the image by inserting a `<link>` in the `<head>`.
-   `false`: Does not preload the image.

**When to use it:**

-   The image is the [Largest Contentful Paint (LCP)](https://nextjs.org/learn/seo/web-performance/lcp) element.
-   The image is above the fold, typically the hero image.
-   You want to begin loading the image in the `<head>`, before its discovered later in the `<body>`.

**When not to use it:**

-   When you have multiple images that could be considered the [Largest Contentful Paint (LCP)](https://nextjs.org/learn/seo/web-performance/lcp) element depending on the viewport.
-   When the `loading` property is used.
-   When the `fetchPriority` property is used.

In most cases, you should use `loading="eager"` or `fetchPriority="high"` instead of `preload`.

#### `priority`[](https://nextjs.org/docs/app/api-reference/components/image#priority)

Starting with Next.js 16, the `priority` property has been deprecated in favor of the [`preload`](https://nextjs.org/docs/app/api-reference/components/image#preload) property in order to make the behavior clear.

#### `loading`[](https://nextjs.org/docs/app/api-reference/components/image#loading)

Controls when the image should start loading.

-   `lazy`: Defer loading the image until it reaches a calculated distance from the viewport.
-   `eager`: Load the image immediately, regardless of its position in the page.

Use `eager` only when you want to ensure the image is loaded immediately.

> Learn more about the [`loading` attribute](https://developer.mozilla.org/docs/Web/HTML/Element/img#loading).

#### `placeholder`[](https://nextjs.org/docs/app/api-reference/components/image#placeholder)

Specifies a placeholder to use while the image is loading, improving the perceived loading performance.

-   `empty`: No placeholder while the image is loading.
-   `blur`: Use a blurred version of the image as a placeholder. Must be used with the [`blurDataURL`](https://nextjs.org/docs/app/api-reference/components/image#blurdataurl) property.
-   `data:image/...`: Uses the [Data URL](https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) as the placeholder.

**Examples:**

-   [`blur` placeholder](https://image-component.nextjs.gallery/placeholder)
-   [Shimmer effect with data URL `placeholder` prop](https://image-component.nextjs.gallery/shimmer)
-   [Color effect with `blurDataURL` prop](https://image-component.nextjs.gallery/color)

> Learn more about the [`placeholder` attribute](https://developer.mozilla.org/docs/Web/HTML/Element/img#placeholder).

#### `blurDataURL`[](https://nextjs.org/docs/app/api-reference/components/image#blurdataurl)

A [Data URL](https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) to be used as a placeholder image before the image successfully loads. Can be automatically set or used with the [`placeholder="blur"`](https://nextjs.org/docs/app/api-reference/components/image#placeholder) property.

The image is automatically enlarged and blurred, so a very small image (10px or less) is recommended.

**Automatic**

If `src` is a static import of a `jpg`, `png`, `webp`, or `avif` file, `blurDataURL` is added automatically—unless the image is animated.

**Manually set**

If the image is dynamic or remote, you must provide `blurDataURL` yourself. To generate one, you can use:

-   [A online tool like png-pixel.com](https://png-pixel.com/)
-   [A library like Plaiceholder](https://github.com/joe-bell/plaiceholder)

A large blurDataURL may hurt performance. Keep it small and simple.

**Examples:**

-   [Default `blurDataURL` prop](https://image-component.nextjs.gallery/placeholder)
-   [Color effect with `blurDataURL` prop](https://image-component.nextjs.gallery/color)

#### `onLoad`[](https://nextjs.org/docs/app/api-reference/components/image#onload)

A callback function that is invoked once the image is completely loaded and the [placeholder](https://nextjs.org/docs/app/api-reference/components/image#placeholder) has been removed.

The callback function will be called with one argument, the event which has a `target` that references the underlying `<img>` element.

> **Good to know**: Using props like `onLoad`, which accept a function, requires using [Client Components](https://react.dev/reference/rsc/use-client) to serialize the provided function.

#### `onError`[](https://nextjs.org/docs/app/api-reference/components/image#onerror)

A callback function that is invoked if the image fails to load.

> **Good to know**: Using props like `onError`, which accept a function, requires using [Client Components](https://react.dev/reference/rsc/use-client) to serialize the provided function.

#### `unoptimized`[](https://nextjs.org/docs/app/api-reference/components/image#unoptimized)

A boolean that indicates if the image should be optimized. This is useful for images that do not benefit from optimization such as small images (less than 1KB), vector images (SVG), or animated images (GIF).

-   `true`: The source image will be served as-is from the `src` instead of changing quality, size, or format.
-   `false`: The source image will be optimized.

Since Next.js 12.3.0, this prop can be assigned to all images by updating `next.config.js` with the following configuration:

#### `overrideSrc`[](https://nextjs.org/docs/app/api-reference/components/image#overridesrc)

When providing the `src` prop to the `<Image>` component, both the `srcset` and `src` attributes are generated automatically for the resulting `<img>`.

In some cases, it is not desirable to have the `src` attribute generated and you may wish to override it using the `overrideSrc` prop.

For example, when upgrading an existing website from `<img>` to `<Image>`, you may wish to maintain the same `src` attribute for SEO purposes such as image ranking or avoiding recrawl.

#### `decoding`[](https://nextjs.org/docs/app/api-reference/components/image#decoding)

A hint to the browser indicating if it should wait for the image to be decoded before presenting other content updates or not.

-   `async`: Asynchronously decode the image and allow other content to be rendered before it completes.
-   `sync`: Synchronously decode the image for atomic presentation with other content.
-   `auto`: No preference. The browser chooses the best approach.

> Learn more about the [`decoding` attribute](https://developer.mozilla.org/docs/Web/HTML/Element/img#decoding).

### Other Props[](https://nextjs.org/docs/app/api-reference/components/image#other-props)

Other properties on the `<Image />` component will be passed to the underlying `img` element with the exception of the following:

-   `srcSet`: Use [Device Sizes](https://nextjs.org/docs/app/api-reference/components/image#devicesizes) instead.

### Deprecated props[](https://nextjs.org/docs/app/api-reference/components/image#deprecated-props)

#### `onLoadingComplete`[](https://nextjs.org/docs/app/api-reference/components/image#onloadingcomplete)

> **Warning**: Deprecated in Next.js 14, use [`onLoad`](https://nextjs.org/docs/app/api-reference/components/image#onload) instead.

A callback function that is invoked once the image is completely loaded and the [placeholder](https://nextjs.org/docs/app/api-reference/components/image#placeholder) has been removed.

The callback function will be called with one argument, a reference to the underlying `<img>` element.

> **Good to know**: Using props like `onLoadingComplete`, which accept a function, requires using [Client Components](https://react.dev/reference/rsc/use-client) to serialize the provided function.

### Configuration options[](https://nextjs.org/docs/app/api-reference/components/image#configuration-options)

You can configure the Image Component in `next.config.js`. The following options are available:

#### `localPatterns`[](https://nextjs.org/docs/app/api-reference/components/image#localpatterns)

Use `localPatterns` in your `next.config.js` file to allow images from specific local paths to be optimized and block all others.

The example above will ensure the `src` property of `next/image` must start with `/assets/images/` and must not have a query string. Attempting to optimize any other path will respond with `400` Bad Request error.

> **Good to know**: Omitting the `search` property allows all search parameters which could allow malicious actors to optimize URLs you did not intend. Try using a specific value like `search: '?v=2'` to ensure an exact match.

#### `remotePatterns`[](https://nextjs.org/docs/app/api-reference/components/image#remotepatterns)

Use `remotePatterns` in your `next.config.js` file to allow images from specific external paths and block all others. This ensures that only external images from your account can be served.

You can also configure `remotePatterns` using the object:

The example above will ensure the `src` property of `next/image` must start with `https://example.com/account123/` and must not have a query string. Any other protocol, hostname, port, or unmatched path will respond with `400` Bad Request.

**Wildcard Patterns:**

Wildcard patterns can be used for both `pathname` and `hostname` and have the following syntax:

-   `*` match a single path segment or subdomain
-   `**` match any number of path segments at the end or subdomains at the beginning. This syntax does not work in the middle of the pattern.

This allows subdomains like `image.example.com`. Query strings and custom ports are still blocked.

> **Good to know**: When omitting `protocol`, `port`, `pathname`, or `search` then the wildcard `**` is implied. This is not recommended because it may allow malicious actors to optimize urls you did not intend.

**Query Strings**:

You can also restrict query strings using the `search` property:

The example above will ensure the `src` property of `next/image` must start with `https://assets.example.com` and must have the exact query string `?v=1727111025337`. Any other protocol or query string will respond with `400` Bad Request.

#### `loaderFile`[](https://nextjs.org/docs/app/api-reference/components/image#loaderfile)

`loaderFiles` allows you to use a custom image optimization service instead of Next.js.

The path must be relative to the project root. The file must export a default function that returns a URL string:

**Example:**

-   [Custom Image Loader Configuration](https://nextjs.org/docs/app/api-reference/config/next-config-js/images#example-loader-configuration)

> Alternatively, you can use the [`loader` prop](https://nextjs.org/docs/app/api-reference/components/image#loader) to configure each instance of `next/image`.

#### `path`[](https://nextjs.org/docs/app/api-reference/components/image#path)

If you want to change or prefix the default path for the Image Optimization API, you can do so with the `path` property. The default value for `path` is `/_next/image`.

#### `deviceSizes`[](https://nextjs.org/docs/app/api-reference/components/image#devicesizes)

`deviceSizes` allows you to specify a list of device width breakpoints. These widths are used when the `next/image` component uses [`sizes`](https://nextjs.org/docs/app/api-reference/components/image#sizes) prop to ensure the correct image is served for the user's device.

If no configuration is provided, the default below is used:

#### `imageSizes`[](https://nextjs.org/docs/app/api-reference/components/image#imagesizes)

`imageSizes` allows you to specify a list of image widths. These widths are concatenated with the array of [device sizes](https://nextjs.org/docs/app/api-reference/components/image#devicesizes) to form the full array of sizes used to generate image [srcset](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/srcset).

If no configuration is provided, the default below is used:

`imageSizes` is only used for images which provide a [`sizes`](https://nextjs.org/docs/app/api-reference/components/image#sizes) prop, which indicates that the image is less than the full width of the screen. Therefore, the sizes in `imageSizes` should all be smaller than the smallest size in `deviceSizes`.

#### `qualities`[](https://nextjs.org/docs/app/api-reference/components/image#qualities)

`qualities` allows you to specify a list of image quality values.

If not configuration is provided, the default below is used:

> **Good to know**: This field is required starting with Next.js 16 because unrestricted access could allow malicious actors to optimize more qualities than you intended.

You can add more image qualities to the allowlist, such as the following:

In the example above, only four qualities are allowed: 25, 50, 75, and 100.

If the [`quality`](https://nextjs.org/docs/app/api-reference/components/image#quality) prop does not match a value in this array, the closest allowed value will be used.

If the REST API is visited directly with a quality that does not match a value in this array, the server will return a 400 Bad Request response.

#### `formats`[](https://nextjs.org/docs/app/api-reference/components/image#formats)

`formats` allows you to specify a list of image formats to be used.

Next.js automatically detects the browser's supported image formats via the request's `Accept` header in order to determine the best output format.

If the `Accept` header matches more than one of the configured formats, the first match in the array is used. Therefore, the array order matters. If there is no match (or the source image is animated), it will use the original image's format.

You can enable AVIF support, which will fallback to the original format of the src image if the browser [does not support AVIF](https://caniuse.com/avif):

You can also enable both AVIF and WebP formats together. AVIF will be preferred for browsers that support it, with WebP as a fallback:

> **Good to know**:
> 
> -   We still recommend using WebP for most use cases.
> -   AVIF generally takes 50% longer to encode but it compresses 20% smaller compared to WebP. This means that the first time an image is requested, it will typically be slower, but subsequent requests that are cached will be faster.
> -   When using multiple formats, Next.js will cache each format separately. This means increased storage requirements compared to using a single format, as both AVIF and WebP versions of images will be stored for different browser support.
> -   If you self-host with a Proxy/CDN in front of Next.js, you must configure the Proxy to forward the `Accept` header.

#### `minimumCacheTTL`[](https://nextjs.org/docs/app/api-reference/components/image#minimumcachettl)

`minimumCacheTTL` allows you to configure the Time to Live (TTL) in seconds for cached optimized images. In many cases, it's better to use a [Static Image Import](https://nextjs.org/docs/app/getting-started/images#local-images) which will automatically hash the file contents and cache the image forever with a `Cache-Control` header of `immutable`.

If no configuration is provided, the default below is used.

You can increase the TTL to reduce the number of revalidations and potentially lower cost:

The expiration (or rather Max Age) of the optimized image is defined by either the `minimumCacheTTL` or the upstream image `Cache-Control` header, whichever is larger.

If you need to change the caching behavior per image, you can configure [`headers`](https://nextjs.org/docs/app/api-reference/config/next-config-js/headers) to set the `Cache-Control` header on the upstream image (e.g. `/some-asset.jpg`, not `/_next/image` itself).

There is no mechanism to invalidate the cache at this time, so its best to keep `minimumCacheTTL` low. Otherwise you may need to manually change the [`src`](https://nextjs.org/docs/app/api-reference/components/image#src) prop or delete the cached file `<distDir>/cache/images`.

#### `disableStaticImages`[](https://nextjs.org/docs/app/api-reference/components/image#disablestaticimages)

`disableStaticImages` allows you to disable static image imports.

The default behavior allows you to import static files such as `import icon from './icon.png'` and then pass that to the `src` property. In some cases, you may wish to disable this feature if it conflicts with other plugins that expect the import to behave differently.

You can disable static image imports inside your `next.config.js`:

#### `maximumRedirects`[](https://nextjs.org/docs/app/api-reference/components/image#maximumredirects)

The default image optimization loader will follow HTTP redirects when fetching remote images up to 3 times.

You can configure the number of redirects to follow when fetching remote images. Setting the value to `0` will disable following redirects.

#### `dangerouslyAllowLocalIP`[](https://nextjs.org/docs/app/api-reference/components/image#dangerouslyallowlocalip)

In rare cases when self-hosting Next.js on a private network, you may want to allow optimizing images from local IP addresses on the same network. This is not recommended for most users because it could allow malicious users to access content on your internal network.

By default, the value is false.

If you need to optimize remote images hosted elsewhere in your local network, you can set the value to true.

#### `dangerouslyAllowSVG`[](https://nextjs.org/docs/app/api-reference/components/image#dangerouslyallowsvg)

`dangerouslyAllowSVG` allows you to serve SVG images.

By default, Next.js does not optimize SVG images for a few reasons:

-   SVG is a vector format meaning it can be resized losslessly.
-   SVG has many of the same features as HTML/CSS, which can lead to vulnerabilities without proper [Content Security Policy (CSP) headers](https://nextjs.org/docs/app/api-reference/config/next-config-js/headers#content-security-policy).

We recommend using the [`unoptimized`](https://nextjs.org/docs/app/api-reference/components/image#unoptimized) prop when the [`src`](https://nextjs.org/docs/app/api-reference/components/image#src) prop is known to be SVG. This happens automatically when `src` ends with `".svg"`.

In addition, it is strongly recommended to also set `contentDispositionType` to force the browser to download the image, as well as `contentSecurityPolicy` to prevent scripts embedded in the image from executing.

#### `contentDispositionType`[](https://nextjs.org/docs/app/api-reference/components/image#contentdispositiontype)

`contentDispositionType` allows you to configure the [`Content-Disposition`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition#as_a_response_header_for_the_main_body) header.

#### `contentSecurityPolicy`[](https://nextjs.org/docs/app/api-reference/components/image#contentsecuritypolicy)

`contentSecurityPolicy` allows you to configure the [`Content-Security-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP) header for images. This is particularly important when using [`dangerouslyAllowSVG`](https://nextjs.org/docs/app/api-reference/components/image#dangerouslyallowsvg) to prevent scripts embedded in the image from executing.

By default, the [loader](https://nextjs.org/docs/app/api-reference/components/image#loader) sets the [`Content-Disposition`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition#as_a_response_header_for_the_main_body) header to `attachment` for added protection since the API can serve arbitrary remote images.

The default value is `attachment` which forces the browser to download the image when visiting directly. This is particularly important when [`dangerouslyAllowSVG`](https://nextjs.org/docs/app/api-reference/components/image#dangerouslyallowsvg) is true.

You can optionally configure `inline` to allow the browser to render the image when visiting directly, without downloading it.

### Deprecated configuration options[](https://nextjs.org/docs/app/api-reference/components/image#deprecated-configuration-options)

#### `domains`[](https://nextjs.org/docs/app/api-reference/components/image#domains)

> **Warning**: Deprecated since Next.js 14 in favor of strict [`remotePatterns`](https://nextjs.org/docs/app/api-reference/components/image#remotepatterns) in order to protect your application from malicious users.

Similar to [`remotePatterns`](https://nextjs.org/docs/app/api-reference/components/image#remotepatterns), the `domains` configuration can be used to provide a list of allowed hostnames for external images. However, the `domains` configuration does not support wildcard pattern matching and it cannot restrict protocol, port, or pathname.

Since most remote image servers are shared between multiple tenants, it's safer to use `remotePatterns` to ensure only the intended images are optimized.

Below is an example of the `domains` property in the `next.config.js` file:

## Functions[](https://nextjs.org/docs/app/api-reference/components/image#functions)

### `getImageProps`[](https://nextjs.org/docs/app/api-reference/components/image#getimageprops)

The `getImageProps` function can be used to get the props that would be passed to the underlying `<img>` element, and instead pass them to another component, style, canvas, etc.

This also avoid calling React `useState()` so it can lead to better performance, but it cannot be used with the [`placeholder`](https://nextjs.org/docs/app/api-reference/components/image#placeholder) prop because the placeholder will never be removed.

## Known browser bugs[](https://nextjs.org/docs/app/api-reference/components/image#known-browser-bugs)

This `next/image` component uses browser native [lazy loading](https://caniuse.com/loading-lazy-attr), which may fallback to eager loading for older browsers before Safari 15.4. When using the blur-up placeholder, older browsers before Safari 12 will fallback to empty placeholder. When using styles with `width`/`height` of `auto`, it is possible to cause [Layout Shift](https://web.dev/cls/) on older browsers before Safari 15 that don't [preserve the aspect ratio](https://caniuse.com/mdn-html_elements_img_aspect_ratio_computed_from_attributes). For more details, see [this MDN video](https://www.youtube.com/watch?v=4-d_SoCHeWE).

-   [Safari 15 - 16.3](https://bugs.webkit.org/show_bug.cgi?id=243601) display a gray border while loading. Safari 16.4 [fixed this issue](https://webkit.org/blog/13966/webkit-features-in-safari-16-4/#:~:text=Now%20in%20Safari%2016.4%2C%20a%20gray%20line%20no%20longer%20appears%20to%20mark%20the%20space%20where%20a%20lazy%2Dloaded%20image%20will%20appear%20once%20it%E2%80%99s%20been%20loaded.). Possible solutions:
    -   Use CSS `@supports (font: -apple-system-body) and (-webkit-appearance: none) { img[loading="lazy"] { clip-path: inset(0.6px) } }`
    -   Use [`loading="eager"`](https://nextjs.org/docs/app/api-reference/components/image#loading) if the image is above the fold
-   [Firefox 67+](https://bugzilla.mozilla.org/show_bug.cgi?id=1556156) displays a white background while loading. Possible solutions:
    -   Enable [AVIF `formats`](https://nextjs.org/docs/app/api-reference/components/image#formats)
    -   Use [`placeholder`](https://nextjs.org/docs/app/api-reference/components/image#placeholder)

## Examples[](https://nextjs.org/docs/app/api-reference/components/image#examples)

### Styling images[](https://nextjs.org/docs/app/api-reference/components/image#styling-images)

Styling the Image component is similar to styling a normal `<img>` element, but there are a few guidelines to keep in mind:

Use `className` or `style`, not `styled-jsx`. In most cases, we recommend using the `className` prop. This can be an imported [CSS Module](https://nextjs.org/docs/app/getting-started/css), a [global stylesheet](https://nextjs.org/docs/app/getting-started/css#global-css), etc.

You can also use the `style` prop to assign inline styles.

When using `fill`, the parent element must have `position: relative` or `display: block`. This is necessary for the proper rendering of the image element in that layout mode.

You cannot use [styled-jsx](https://nextjs.org/docs/app/guides/css-in-js) because it's scoped to the current component (unless you mark the style as `global`).

### Responsive images with a static export[](https://nextjs.org/docs/app/api-reference/components/image#responsive-images-with-a-static-export)

When you import a static image, Next.js automatically sets its width and height based on the file. You can make the image responsive by setting the style:

![Responsive image filling the width and height of its parent container](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fresponsive-image.png&w=3840&q=75)

### Responsive images with a remote URL[](https://nextjs.org/docs/app/api-reference/components/image#responsive-images-with-a-remote-url)

If the source image is a dynamic or a remote URL, you must provide the width and height props so Next.js can calculate the aspect ratio:

Try it out:

-   [Demo the image responsive to viewport](https://image-component.nextjs.gallery/responsive)

### Responsive image with `fill`[](https://nextjs.org/docs/app/api-reference/components/image#responsive-image-with-fill)

If you don't know the aspect ratio of the image, you can add the [`fill` prop](https://nextjs.org/docs/app/api-reference/components/image#fill) with the `objectFit` prop set to `cover`. This will make the image fill the full width of its parent container.

![Grid of images filling parent container width](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Ffill-container.png&w=3840&q=75)

### Background Image[](https://nextjs.org/docs/app/api-reference/components/image#background-image)

Use the `fill` prop to make the image cover the entire screen area:

![Background image taking full width and height of page](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fbackground-image.png&w=3840&q=75)

For examples of the Image component used with the various styles, see the [Image Component Demo](https://image-component.nextjs.gallery/).

### Remote images[](https://nextjs.org/docs/app/api-reference/components/image#remote-images)

To use a remote image, the `src` property should be a URL string.

Since Next.js does not have access to remote files during the build process, you'll need to provide the [`width`](https://nextjs.org/docs/app/api-reference/components/image#width-and-height), [`height`](https://nextjs.org/docs/app/api-reference/components/image#width-and-height) and optional [`blurDataURL`](https://nextjs.org/docs/app/api-reference/components/image#blurdataurl) props manually.

The `width` and `height` attributes are used to infer the correct aspect ratio of image and avoid layout shift from the image loading in. The `width` and `height` do _not_ determine the rendered size of the image file.

To safely allow optimizing images, define a list of supported URL patterns in `next.config.js`. Be as specific as possible to prevent malicious usage. For example, the following configuration will only allow images from a specific AWS S3 bucket:

### Theme detection[](https://nextjs.org/docs/app/api-reference/components/image#theme-detection)

If you want to display a different image for light and dark mode, you can create a new component that wraps two `<Image>` components and reveals the correct one based on a CSS media query.

> **Good to know**: The default behavior of `loading="lazy"` ensures that only the correct image is loaded. You cannot use `preload` or `loading="eager"` because that would cause both images to load. Instead, you can use [`fetchPriority="high"`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/fetchPriority).

Try it out:

-   [Demo light/dark mode theme detection](https://image-component.nextjs.gallery/theme)

### Art direction[](https://nextjs.org/docs/app/api-reference/components/image#art-direction)

If you want to display a different image for mobile and desktop, sometimes called [Art Direction](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#art_direction), you can provide different `src`, `width`, `height`, and `quality` props to `getImageProps()`.

### Background CSS[](https://nextjs.org/docs/app/api-reference/components/image#background-css)

You can even convert the `srcSet` string to the [`image-set()`](https://developer.mozilla.org/en-US/docs/Web/CSS/image/image-set) CSS function to optimize a background image.

## Version History[](https://nextjs.org/docs/app/api-reference/components/image#version-history)

| Version  |                                                                                                                                                                                            Changes                                                                                                                                                                                             |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `v16.0.0`  |                                                                                                              `qualities` default configuration changed to `[75]`, `preload` prop added, `priority` prop deprecated, `dangerouslyAllowLocalIP` config added, `maximumRedirects` config added.                                                                                                               |
| `v15.3.0`  |                                                                                                                                                                     `remotePatterns` added support for array of `URL` objects.                                                                                                                                                                     |
| `v15.0.0`  |                                                                                                                                                              `contentDispositionType` configuration default changed to `attachment`.                                                                                                                                                               |
| `v14.2.23` |                                                                                                                                                                                 `qualities` configuration added.                                                                                                                                                                                 |
| `v14.2.15` |                                                                                                                                                                   `decoding` prop added and `localPatterns` configuration added.                                                                                                                                                                   |
| `v14.2.14` |                                                                                                                                                                               `remotePatterns.search` prop added.                                                                                                                                                                                |
| `v14.2.0`  |                                                                                                                                                                                    `overrideSrc` prop added.                                                                                                                                                                                     |
| `v14.1.0`  |                                                                                                                                                                                   `getImageProps()` is stable.                                                                                                                                                                                   |
| `v14.0.0`  |                                                                                                                                                                     `onLoadingComplete` prop and `domains` config deprecated.                                                                                                                                                                      |
| `v13.4.14` |                                                                                                                                                                          `placeholder` prop support for `data:/image...`                                                                                                                                                                           |
| `v13.2.0`  |                                                                                                                                                                          `contentDispositionType` configuration added.                                                                                                                                                                           |
| `v13.0.6`  |                                                                                                                                                                                        `ref` prop added.                                                                                                                                                                                         |
| `v13.0.0`  | The `next/image` import was renamed to `next/legacy/image`. The `next/future/image` import was renamed to `next/image`. A codemod is available to safely and automatically rename your imports. `<span>` wrapper removed. `layout`, `objectFit`, `objectPosition`, `lazyBoundary`, `lazyRoot` props removed. `alt` is required. `onLoadingComplete` receives reference to `img` element. Built-in loader config removed. |
| `v12.3.0`  |                                                                                                                                                                    `remotePatterns` and `unoptimized` configuration is stable.                                                                                                                                                                     |
| `v12.2.0`  |                                                                                                                                              Experimental `remotePatterns` and experimental `unoptimized` configuration added. `layout="raw"` removed.                                                                                                                                               |
| `v12.1.1`  |                                                                                                                                                                 `style` prop added. Experimental support for `layout="raw"` added.                                                                                                                                                                 |
| `v12.1.0`  |                                                                                                                                                               `dangerouslyAllowSVG` and `contentSecurityPolicy` configuration added.                                                                                                                                                               |
| `v12.0.9`  |                                                                                                                                                                                      `lazyRoot` prop added.                                                                                                                                                                                      |
| `v12.0.0`  | `formats` configuration added.  
AVIF support added.  
Wrapper `<div>` changed to `<span>`. |
| `v11.1.0`  |                                                                                                                                                                        `onLoadingComplete` and `lazyBoundary` props added.                                                                                                                                                                         |
| `v11.0.0`  | `src` prop support for static import.  
`placeholder` prop added.  
`blurDataURL` prop added. |
| `v10.0.5`  |                                                                                                                                                                                       `loader` prop added.                                                                                                                                                                                       |
| `v10.0.1`  |                                                                                                                                                                                       `layout` prop added.                                                                                                                                                                                       |
| `v10.0.0`  |                                                                                                                                                                                     `next/image` introduced.                                                                                                                                                                                     |