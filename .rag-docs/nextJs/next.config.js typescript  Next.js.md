Last updated

December 9, 2025

Configure TypeScript behavior with the `typescript` option in `next.config.js`:

## Options[](https://nextjs.org/docs/app/api-reference/config/next-config-js/typescript#options)

|      Option       |  Type   |     Default     |                           Description                            |
|-------------------|---------|-----------------|------------------------------------------------------------------|
| `ignoreBuildErrors` | `boolean` |      `false`      | Allow production builds to complete even with TypeScript errors. |
|   `tsconfigPath`    | `string`  | `'tsconfig.json'` |               Path to a custom `tsconfig.json` file.               |

## `ignoreBuildErrors`[](https://nextjs.org/docs/app/api-reference/config/next-config-js/typescript#ignorebuilderrors)

Next.js fails your **production build** (`next build`) when TypeScript errors are present in your project.

If you'd like Next.js to dangerously produce production code even when your application has errors, you can disable the built-in type checking step.

If disabled, be sure you are running type checks as part of your build or deploy process, otherwise this can be very dangerous.

## `tsconfigPath`[](https://nextjs.org/docs/app/api-reference/config/next-config-js/typescript#tsconfigpath)

Use a different TypeScript configuration file for builds or tooling:

See the [TypeScript configuration](https://nextjs.org/docs/app/api-reference/config/typescript#custom-tsconfig-path) page for more details.

[Previous

typedRoutes

](https://nextjs.org/docs/app/api-reference/config/next-config-js/typedRoutes)[Next

urlImports

](https://nextjs.org/docs/app/api-reference/config/next-config-js/urlImports)