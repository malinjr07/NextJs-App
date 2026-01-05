This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback on [GitHub](https://github.com/vercel/next.js/issues).

Last updated

October 9, 2025

The experimental `isolatedDevBuild` option separates development and production build outputs into different directories. When enabled, the development server (`next dev`) writes its output to `.next/dev` instead of `.next`, preventing conflicts when running `next dev` and `next build` concurrently.

This is especially helpful when automated tools (for example, AI agents) run `next build` to validate changes while your development server is running, ensuring the dev server is not affected by changes made by the build process.

This feature is **enabled by default** to keep development and production outputs separate and prevent conflicts.

## Configuration[](https://nextjs.org/docs/app/api-reference/config/next-config-js/isolatedDevBuild#configuration)

To opt out of this feature, set `isolatedDevBuild` to `false` in your configuration:

## Version History[](https://nextjs.org/docs/app/api-reference/config/next-config-js/isolatedDevBuild#version-history)

| Version |                   Changes                    |
|---------|----------------------------------------------|
| `v16.0.0` | `experimental.isolatedDevBuild` is introduced. |

[Previous

inlineCss

](https://nextjs.org/docs/app/api-reference/config/next-config-js/inlineCss)[Next

logging

](https://nextjs.org/docs/app/api-reference/config/next-config-js/logging)