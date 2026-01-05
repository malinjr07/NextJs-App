Last updated

June 16, 2025

Add or generate a `robots.txt` file that matches the [Robots Exclusion Standard](https://en.wikipedia.org/wiki/Robots.txt#Standard) in the **root** of `app` directory to tell search engine crawlers which URLs they can access on your site.

## Static `robots.txt`[](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots#static-robotstxt)

## Generate a Robots file[](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots#generate-a-robots-file)

Add a `robots.js` or `robots.ts` file that returns a [`Robots` object](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots#robots-object).

> **Good to know**: `robots.js` is a special Route Handlers that is cached by default unless it uses a [Dynamic API](https://nextjs.org/docs/app/guides/caching#dynamic-apis) or [dynamic config](https://nextjs.org/docs/app/guides/caching#segment-config-options) option.

Output:

### Customizing specific user agents[](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots#customizing-specific-user-agents)

You can customise how individual search engine bots crawl your site by passing an array of user agents to the `rules` property. For example:

Output:

### Robots object[](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots#robots-object)

## Version History[](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots#version-history)

| Version |      Changes       |
|---------|--------------------|
| `v13.3.0` | `robots` introduced. |

[Previous

opengraph-image and twitter-image

](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image)[Next

sitemap.xml

](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)