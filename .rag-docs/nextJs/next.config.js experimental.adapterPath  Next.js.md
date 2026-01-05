Last updated

October 21, 2025

Next.js provides an experimental API that allows you to create custom adapters to hook into the build process. This is useful for deployment platforms or custom build integrations that need to modify the Next.js configuration or process the build output.

## Configuration[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#configuration)

To use an adapter, specify the path to your adapter module in `experimental.adapterPath`:

## Creating an Adapter[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#creating-an-adapter)

An adapter is a module that exports an object implementing the `NextAdapter` interface:

### Basic Adapter Structure[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#basic-adapter-structure)

Here's a minimal adapter example:

## API Reference[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#api-reference)

### `modifyConfig(config, context)`[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#modifyconfigconfig-context)

Called for any CLI command that loads the next.config to allow modification of the configuration.

**Parameters:**

-   `config`: The complete Next.js configuration object
-   `context.phase`: The current build phase (see [phases](https://nextjs.org/docs/app/api-reference/config/next-config-js#phase))

**Returns:** The modified configuration object (can be async)

### `onBuildComplete(context)`[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#onbuildcompletecontext)

Called after the build process completes with detailed information about routes and outputs.

**Parameters:**

-   `routes`: Object containing route manifests for headers, redirects, rewrites, and dynamic routes
    -   `routes.headers`: Array of header route objects with `source`, `sourceRegex`, `headers`, `has`, `missing`, and optional `priority` fields
    -   `routes.redirects`: Array of redirect route objects with `source`, `sourceRegex`, `destination`, `statusCode`, `has`, `missing`, and optional `priority` fields
    -   `routes.rewrites`: Object with `beforeFiles`, `afterFiles`, and `fallback` arrays, each containing rewrite route objects with `source`, `sourceRegex`, `destination`, `has`, and `missing` fields
    -   `routes.dynamicRoutes`: Array of dynamic route objects with `source`, `sourceRegex`, `destination`, `has`, and `missing` fields
-   `outputs`: Detailed information about all build outputs organized by type
-   `projectDir`: Absolute path to the Next.js project directory
-   `repoRoot`: Absolute path to the detected repository root
-   `distDir`: Absolute path to the build output directory
-   `config`: The final Next.js configuration (with `modifyConfig` applied)
-   `nextVersion`: Version of Next.js being used
-   `buildId`: Unique identifier for the current build

## Output Types[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#output-types)

The `outputs` object contains arrays of different output types:

### Pages (`outputs.pages`)[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#pages-outputspages)

React pages from the `pages/` directory:

### API Routes (`outputs.pagesApi`)[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#api-routes-outputspagesapi)

API routes from `pages/api/`:

### App Pages (`outputs.appPages`)[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#app-pages-outputsapppages)

React pages from the `app/` directory with `page.{js,ts,jsx,tsx}`:

### App Routes (`outputs.appRoutes`)[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#app-routes-outputsapproutes)

API and metadata routes from `app/` with `route.{js,ts,jsx,tsx}`:

### Prerenders (`outputs.prerenders`)[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#prerenders-outputsprerenders)

ISR-enabled routes and static prerenders:

### Static Files (`outputs.staticFiles`)[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#static-files-outputsstaticfiles)

Static assets and auto-statically optimized pages:

### Middleware (`outputs.middleware`)[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#middleware-outputsmiddleware)

Middleware function (if present):

## Routes Information[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#routes-information)

The `routes` object in `onBuildComplete` provides complete routing information with processed patterns ready for deployment:

Each header route includes:

-   `source`: Original route pattern (e.g., `/about`)
-   `sourceRegex`: Compiled regex for matching requests
-   `headers`: Key-value pairs of headers to apply
-   `has`: Optional conditions that must be met
-   `missing`: Optional conditions that must not be met
-   `priority`: Optional flag for internal routes

### Redirects[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#redirects)

Each redirect route includes:

-   `source`: Original route pattern
-   `sourceRegex`: Compiled regex for matching
-   `destination`: Target URL (can include captured groups)
-   `statusCode`: HTTP status code (301, 302, 307, 308)
-   `has`: Optional positive conditions
-   `missing`: Optional negative conditions
-   `priority`: Optional flag for internal routes

### Rewrites[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#rewrites)

Rewrites are categorized into three phases:

-   `beforeFiles`: Checked before filesystem (including pages and public files)
-   `afterFiles`: Checked after pages/public files but before dynamic routes
-   `fallback`: Checked after all other routes

Each rewrite includes `source`, `sourceRegex`, `destination`, `has`, and `missing`.

### Dynamic Routes[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#dynamic-routes)

Generated from dynamic route segments (e.g., `[slug]`, `[...path]`). Each includes:

-   `source`: Route pattern
-   `sourceRegex`: Compiled regex with named capture groups
-   `destination`: Internal destination with parameter substitution
-   `has`: Optional positive conditions
-   `missing`: Optional negative conditions

## Use Cases[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#use-cases)

Common use cases for adapters include:

-   **Deployment Platform Integration**: Automatically configure build outputs for specific hosting platforms
-   **Asset Processing**: Transform or optimize build outputs
-   **Monitoring Integration**: Collect build metrics and route information
-   **Custom Bundling**: Package outputs in platform-specific formats
-   **Build Validation**: Ensure outputs meet specific requirements
-   **Route Generation**: Use processed route information to generate platform-specific routing configs