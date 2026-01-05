## ESLint Plugin

Last updated

November 10, 2025

Next.js provides an ESLint configuration package, [`eslint-config-next`](https://www.npmjs.com/package/eslint-config-next), that makes it easy to catch common issues in your application. It includes the [`@next/eslint-plugin-next`](https://www.npmjs.com/package/@next/eslint-plugin-next) plugin along with recommended rule-sets from [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) and [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks).

The package provides two main configurations:

-   **`eslint-config-next`**: Base configuration with Next.js, React, and React Hooks rules. Supports both JavaScript and TypeScript files.
-   **`eslint-config-next/core-web-vitals`**: Includes everything from the base config, plus upgrades rules that impact [Core Web Vitals](https://web.dev/vitals/) from warnings to errors. Recommended for most projects.

Additionally, for TypeScript projects:

-   **`eslint-config-next/typescript`**: Adds TypeScript-specific linting rules from [`typescript-eslint`](https://typescript-eslint.io/). Use this alongside the base or core-web-vitals config.

## Setup ESLint[](https://nextjs.org/docs/app/api-reference/config/eslint#setup-eslint)

Get linting working quickly with the ESLint CLI (flat config):

1.  Install ESLint and the Next.js config:
    
2.  Create `eslint.config.mjs` with the Next.js config:
    
3.  Run ESLint:
    

## Reference[](https://nextjs.org/docs/app/api-reference/config/eslint#reference)

The `eslint-config-next` package includes the `recommended` rule-sets from the following ESLint plugins:

-   [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)
-   [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)
-   [`@next/eslint-plugin-next`](https://www.npmjs.com/package/@next/eslint-plugin-next)

### Rules[](https://nextjs.org/docs/app/api-reference/config/eslint#rules)

The `@next/eslint-plugin-next` rules included are:

We recommend using an appropriate [integration](https://eslint.org/docs/user-guide/integrations#editors) to view warnings and errors directly in your code editor during development.

`next lint` removal

Starting with Next.js 16, `next lint` is removed.

As part of the removal, the `eslint` option in your Next config file is no longer needed and can be safely removed.

## Examples[](https://nextjs.org/docs/app/api-reference/config/eslint#examples)

### Specifying a root directory within a monorepo[](https://nextjs.org/docs/app/api-reference/config/eslint#specifying-a-root-directory-within-a-monorepo)

If you're using `@next/eslint-plugin-next` in a project where Next.js isn't installed in your root directory (such as a monorepo), you can tell `@next/eslint-plugin-next` where to find your Next.js application using the `settings` property in your `eslint.config.mjs`:

`rootDir` can be a path (relative or absolute), a glob (i.e. `"packages/*/"`), or an array of paths and/or globs.

### Disabling rules[](https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules)

If you would like to modify or disable any rules provided by the supported plugins (`react`, `react-hooks`, `next`), you can directly change them using the `rules` property in your `eslint.config.mjs`:

### With Core Web Vitals[](https://nextjs.org/docs/app/api-reference/config/eslint#with-core-web-vitals)

Enable the `eslint-config-next/core-web-vitals` configuration in your ESLint config.

`eslint-config-next/core-web-vitals` upgrades certain lint rules in `@next/eslint-plugin-next` from warnings to errors to help improve your [Core Web Vitals](https://web.dev/vitals/) metrics.

> The `eslint-config-next/core-web-vitals` configuration is automatically included for new applications built with [Create Next App](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### With TypeScript[](https://nextjs.org/docs/app/api-reference/config/eslint#with-typescript)

In addition to the Next.js ESLint rules, `create-next-app --typescript` will also add TypeScript-specific lint rules with `eslint-config-next/typescript` to your config:

Those rules are based on [`plugin:@typescript-eslint/recommended`](https://typescript-eslint.io/linting/configs#recommended). See [typescript-eslint > Configs](https://typescript-eslint.io/linting/configs) for more details.

### With Prettier[](https://nextjs.org/docs/app/api-reference/config/eslint#with-prettier)

ESLint also contains code formatting rules, which can conflict with your existing [Prettier](https://prettier.io/) setup. We recommend including [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) in your ESLint config to make ESLint and Prettier work together.

First, install the dependency:

Then, add `prettier` to your existing ESLint config:

### Running lint on staged files[](https://nextjs.org/docs/app/api-reference/config/eslint#running-lint-on-staged-files)

If you would like to use ESLint with [lint-staged](https://github.com/okonet/lint-staged) to run the linter on staged git files, add the following to the `.lintstagedrc.js` file in the root of your project:

## Migrating existing config[](https://nextjs.org/docs/app/api-reference/config/eslint#migrating-existing-config)

If you already have ESLint configured in your application, there are two approaches to integrate Next.js linting rules, depending on your setup.

#### Using the plugin directly[](https://nextjs.org/docs/app/api-reference/config/eslint#using-the-plugin-directly)

Use `@next/eslint-plugin-next` directly if you have any of the following already configured:

-   Conflicting plugins installed separately or through another config (such as `airbnb` or `react-app`):
    -   `react`
    -   `react-hooks`
    -   `jsx-a11y`
    -   `import`
-   Custom `parserOptions` different from Next.js defaults (only if you have [customized your Babel configuration](https://nextjs.org/docs/pages/guides/babel))
-   `eslint-plugin-import` with custom Node.js and/or TypeScript [resolvers](https://github.com/benmosher/eslint-plugin-import#resolvers)

In these cases, use `@next/eslint-plugin-next` directly to avoid conflicts:

First, install the plugin:

Then add it to your ESLint config:

This approach eliminates the risk of collisions or errors that can occur when the same plugins or parsers are imported across multiple configurations.

#### Adding to existing config[](https://nextjs.org/docs/app/api-reference/config/eslint#adding-to-existing-config)

If you're adding Next.js to an existing ESLint setup, spread the Next.js config into your array:

When you spread `...nextConfig`, you're adding multiple config objects that include file patterns, plugins, rules, ignores, and parser settings. ESLint applies configs in order, so later rules can override earlier ones for matching files.

> **Good to know:** This approach works well for straightforward setups. If you have a complex existing config with specific file patterns or plugin configurations that conflict, consider using the plugin directly (as shown above) for more granular control.

| Version |                                                               Changes                                                               |
|---------|-------------------------------------------------------------------------------------------------------------------------------------|
| `v16.0.0` | `next lint` and the `eslint` next.config.js option were removed in favor of the ESLint CLI. A codemod is available to help you migrate. |