## How to install Tailwind CSS v3 in your Next.js application

Last updated

August 6, 2025

This guide will walk you through how to install [Tailwind CSS v3](https://v3.tailwindcss.com/) in your Next.js application.

> **Good to know:** For the latest Tailwind 4 setup, see the [Tailwind CSS setup instructions](https://nextjs.org/docs/app/getting-started/css#tailwind-css).

## Installing Tailwind v3[](https://nextjs.org/docs/app/guides/tailwind-v3-css#installing-tailwind-v3)

Install Tailwind CSS and its peer dependencies, then run the `init` command to generate both `tailwind.config.js` and `postcss.config.js` files:

## Configuring Tailwind v3[](https://nextjs.org/docs/app/guides/tailwind-v3-css#configuring-tailwind-v3)

Configure your template paths in your `tailwind.config.js` file:

Add the Tailwind directives to your global CSS file:

Import the CSS file in your root layout:

## Using classes[](https://nextjs.org/docs/app/guides/tailwind-v3-css#using-classes)

After installing Tailwind CSS and adding the global styles, you can use Tailwind's utility classes in your application.

## Usage with Turbopack[](https://nextjs.org/docs/app/guides/tailwind-v3-css#usage-with-turbopack)

As of Next.js 13.1, Tailwind CSS and PostCSS are supported with [Turbopack](https://turbo.build/pack/docs/features/css#tailwind-css).