Last updated

December 9, 2025

You can use the `generateSitemaps` function to generate multiple sitemaps for your application.

## Returns[](https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps#returns)

The `generateSitemaps` returns an array of objects with an `id` property.

## URLs[](https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps#urls)

Your generated sitemaps will be available at `/.../sitemap/[id].xml`. For example, `/product/sitemap/1.xml`.

## Example[](https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps#example)

For example, to split a sitemap using `generateSitemaps`, return an array of objects with the sitemap `id`. Then, use the `id` to generate the unique sitemaps.

## Version History[](https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps#version-history)

| Version |                                                                    Changes                                                                     |
|---------|------------------------------------------------------------------------------------------------------------------------------------------------|
| `v16.0.0` |          The `id` values returned from `generateSitemaps` are now passed as a promise that resolves to a `string` to the sitemap function.           |
| `v15.0.0` |                               `generateSitemaps` now generates consistent URLs between development and production                                |
| `v13.3.2` | `generateSitemaps` introduced. In development, you can view the generated sitemap on `/.../sitemap.xml/[id]`. For example, `/product/sitemap.xml/1`. |

## Next Steps

Learn how to create sitemaps for your Next.js application.

[Previous

generateMetadata

](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)[Next

generateStaticParams

](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)