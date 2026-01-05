Last updated

December 4, 2025

NextRequest extends the [Web Request API](https://developer.mozilla.org/docs/Web/API/Request) with additional convenience methods.

## `cookies`[](https://nextjs.org/docs/app/api-reference/functions/next-request#cookies)

Read or mutate the [`Set-Cookie`](https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie) header of the request.

### `set(name, value)`[](https://nextjs.org/docs/app/api-reference/functions/next-request#setname-value)

Given a name, set a cookie with the given value on the request.

### `get(name)`[](https://nextjs.org/docs/app/api-reference/functions/next-request#getname)

Given a cookie name, return the value of the cookie. If the cookie is not found, `undefined` is returned. If multiple cookies are found, the first one is returned.

### `getAll()`[](https://nextjs.org/docs/app/api-reference/functions/next-request#getall)

Given a cookie name, return the values of the cookie. If no name is given, return all cookies on the request.

### `delete(name)`[](https://nextjs.org/docs/app/api-reference/functions/next-request#deletename)

Given a cookie name, delete the cookie from the request.

### `has(name)`[](https://nextjs.org/docs/app/api-reference/functions/next-request#hasname)

Given a cookie name, return `true` if the cookie exists on the request.

### `clear()`[](https://nextjs.org/docs/app/api-reference/functions/next-request#clear)

Remove all cookies from the request.

## `nextUrl`[](https://nextjs.org/docs/app/api-reference/functions/next-request#nexturl)

Extends the native [`URL`](https://developer.mozilla.org/docs/Web/API/URL) API with additional convenience methods, including Next.js specific properties.

The following options are available:

|   Property   |        Type        |                             Description                             |
|--------------|--------------------|---------------------------------------------------------------------|
|   `basePath`   |       `string`       |                      The base path of the URL.                      |
|   `buildId`    | `string` | `undefined` | The build identifier of the Next.js application. Can be customized. |
|   `pathname`   |       `string`       |                      The pathname of the URL.                       |
| `searchParams` |       `Object`       |                  The search parameters of the URL.                  |

> **Note:** The internationalization properties from the Pages Router are not available for usage in the App Router. Learn more about [internationalization with the App Router](https://nextjs.org/docs/app/guides/internationalization).

## Version History[](https://nextjs.org/docs/app/api-reference/functions/next-request#version-history)

| Version |       Changes       |
|---------|---------------------|
| `v15.0.0` | `ip` and `geo` removed. |