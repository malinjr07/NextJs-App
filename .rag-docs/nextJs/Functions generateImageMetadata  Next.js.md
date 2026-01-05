Last updated

October 8, 2025

You can use `generateImageMetadata` to generate different versions of one image or return multiple images for one route segment. This is useful for when you want to avoid hard-coding metadata values, such as for icons.

## Parameters[](https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata#parameters)

`generateImageMetadata` function accepts the following parameters:

#### `params` (optional)[](https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata#params-optional)

An object containing the [dynamic route parameters](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes) object from the root segment down to the segment `generateImageMetadata` is called from.

|             Route             |    URL    |         `params`          |
|-------------------------------|-----------|-------------------------|
|       `app/shop/icon.js`        |   `/shop`   |        `undefined`        |
|    `app/shop/[slug]/icon.js`    |  `/shop/1`  |      `{ slug: '1' }`      |
| `app/shop/[tag]/[item]/icon.js` | `/shop/1/2` | `{ tag: '1', item: '2' }` |

## Returns[](https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata#returns)

The `generateImageMetadata` function should return an `array` of objects containing the image's metadata such as `alt` and `size`. In addition, each item **must** include an `id` value which will be passed as a promise to the props of the image generating function.

| Image Metadata Object |               Type                |
|-----------------------|-----------------------------------|
|          `id`           |         `string` (required)         |
|          `alt`          |              `string`               |
|         `size`          | `{ width: number; height: number }` |
|      `contentType`      |              `string`               |

## Image generation function props[](https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata#image-generation-function-props)

When using `generateImageMetadata`, the default export image generation function receives the following props:

#### `id`[](https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata#id)

A promise that resolves to the `id` value from one of the items returned by `generateImageMetadata`. The `id` will be a `string` or `number` depending on what was returned from `generateImageMetadata`.

#### `params` (optional)[](https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata#params-optional-1)

A promise that resolves to an object containing the [dynamic route parameters](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes) from the root segment down to the segment the image is colocated in.

### Examples[](https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata#examples)

#### Using external data[](https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata#using-external-data)

This example uses the `params` object and external data to generate multiple [Open Graph images](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image) for a route segment.

## Version History[](https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata#version-history)

| Version |                                            Changes                                            |
|---------|-----------------------------------------------------------------------------------------------|
| `v16.0.0` | `id` passed to the Image generation function is now a promise that resolves to `string` or `number` |
| `v16.0.0` |  `params` passed to the Image generation function is now a promise that resolves to an object   |
| `v13.3.0` |                               `generateImageMetadata` introduced.                               |