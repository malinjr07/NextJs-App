Last updated

October 23, 2025

Next.js includes support for the [React Compiler](https://react.dev/learn/react-compiler/introduction), a tool designed to improve performance by automatically optimizing component rendering. This reduces the need for manual memoization using `useMemo` and `useCallback`.

Next.js includes a custom performance optimization written in SWC that makes the React Compiler more efficient. Instead of running the compiler on every file, Next.js analyzes your project and only applies the React Compiler to relevant files. This avoids unnecessary work and leads to faster builds compared to using the Babel plugin on its own.

## How It Works[](https://nextjs.org/docs/app/api-reference/config/next-config-js/reactCompiler#how-it-works)

The React Compiler runs through a Babel plugin. To keep builds fast, Next.js uses a custom SWC optimization that only applies the React Compiler to relevant files—like those with JSX or React Hooks.

This avoids compiling everything and keeps the performance cost minimal. You may still see slightly slower builds compared to the default Rust-based compiler, but the impact is small and localized.

To use it, install the `babel-plugin-react-compiler`:

Then, add `reactCompiler` option in `next.config.js`:

## Annotations[](https://nextjs.org/docs/app/api-reference/config/next-config-js/reactCompiler#annotations)

You can configure the compiler to run in "opt-in" mode as follows:

Then, you can annotate specific components or hooks with the `"use memo"` directive from React to opt-in:

> **Note:** You can also use the `"use no memo"` directive from React for the opposite effect, to opt-out a component or hook.