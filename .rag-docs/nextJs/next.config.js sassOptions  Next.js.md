Last updated

October 19, 2025

`sassOptions` allow you to configure the Sass compiler.

> **Good to know:**
> 
> -   `sassOptions` are not typed outside of `implementation` because Next.js does not maintain the other possible properties.
> -   The `functions` property for defining custom Sass functions is only supported with webpack. When using Turbopack, custom Sass functions are not available because Turbopack's Rust-based architecture cannot directly execute JavaScript functions passed through this option.

[Previous

rewrites

](https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites)[Next

serverActions

](https://nextjs.org/docs/app/api-reference/config/next-config-js/serverActions)