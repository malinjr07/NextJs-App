## How to think about data security in Next.js

Last updated

December 4, 2025

[React Server Components](https://react.dev/reference/rsc/server-components) improve performance and simplify data fetching, but also shift where and how data is accessed, changing some of the traditional security assumptions for handling data in frontend apps.

This guide will help you understand how to think about data security in Next.js and how to implement best practices.

## Data fetching approaches[](https://nextjs.org/docs/app/guides/data-security#data-fetching-approaches)

There are three main approaches we recommend for fetching data in Next.js, depending on the size and age of your project:

-   [HTTP APIs](https://nextjs.org/docs/app/guides/data-security#external-http-apis): for existing large applications and organizations.
-   [Data Access Layer](https://nextjs.org/docs/app/guides/data-security#data-access-layer): for new projects.
-   [Component-Level Data Access](https://nextjs.org/docs/app/guides/data-security#component-level-data-access): for prototypes and learning.

We recommend choosing one data fetching approach and avoiding mixing them. This makes it clear for both developers working in your code base and security auditors what to expect.

### External HTTP APIs[](https://nextjs.org/docs/app/guides/data-security#external-http-apis)

You should follow a **Zero Trust** model when adopting Server Components in an existing project. You can continue calling your existing API endpoints such as REST or GraphQL from Server Components using [`fetch`](https://nextjs.org/docs/app/api-reference/functions/fetch), just as you would in Client Components.

This approach works well when:

-   You already have security practices in place.
-   Separate backend teams use other languages or manage APIs independently.

### Data Access Layer[](https://nextjs.org/docs/app/guides/data-security#data-access-layer)

For new projects, we recommend creating a dedicated **Data Access Layer (DAL)**. This is a internal library that controls how and when data is fetched, and what gets passed to your render context.

A Data Access Layer should:

-   Only run on the server.
-   Perform authorization checks.
-   Return safe, minimal **Data Transfer Objects (DTOs)**.

This approach centralizes all data access logic, making it easier to enforce consistent data access and reduces the risk of authorization bugs. You also get the benefit of sharing an in-memory cache across different parts of a request.

> **Good to know:** Secret keys should be stored in environment variables, but only the Data Access Layer should access `process.env`. This keeps secrets from being exposed to other parts of the application.

### Component-level data access[](https://nextjs.org/docs/app/guides/data-security#component-level-data-access)

For quick prototypes and iteration, database queries can be placed directly in Server Components.

This approach, however, makes it easier to accidentally expose private data to the client, for example:

You should sanitize the data before passing it to the Client Component:

## Reading data[](https://nextjs.org/docs/app/guides/data-security#reading-data)

### Passing data from server to client[](https://nextjs.org/docs/app/guides/data-security#passing-data-from-server-to-client)

On the initial load, both Server and Client Components run on the server to generate HTML. However, they execute in isolated module systems. This ensures that Server Components can access private data and APIs, while Client Components cannot.

**Server Components:**

-   Run only on the server.
-   Can safely access environment variables, secrets, databases, and internal APIs.

**Client Components:**

-   Run on the server during pre-rendering, but must follow the same security assumptions as code running in the browser.
-   Must not access privileged data or server-only modules.

This ensures the app is secure by default, but it's possible to accidentally expose private data through how data is fetched or passed to components.

### Tainting[](https://nextjs.org/docs/app/guides/data-security#tainting)

To prevent accidental exposure of private data to the client, you can use React Taint APIs:

-   [`experimental_taintObjectReference`](https://react.dev/reference/react/experimental_taintObjectReference) for data objects.
-   [`experimental_taintUniqueValue`](https://react.dev/reference/react/experimental_taintUniqueValue) for specific values.

You can enable usage in your Next.js app with the [`experimental.taint`](https://nextjs.org/docs/app/api-reference/config/next-config-js/taint) option in `next.config.js`:

This prevents the tainted objects or values from being passed to the client. However, it's an additional layer of protection, you should still filter and sanitize the data in your [DAL](https://nextjs.org/docs/app/guides/data-security#data-access-layer) before passing it to React's render context.

> **Good to know:**
> 
> -   By default, environment variables are only available on the Server. Next.js exposes any environment variable prefixed with `NEXT_PUBLIC_` to the client. [Learn more](https://nextjs.org/docs/app/guides/environment-variables).
> -   Functions and classes are already blocked from being passed to Client Components by default.

### Preventing client-side execution of server-only code[](https://nextjs.org/docs/app/guides/data-security#preventing-client-side-execution-of-server-only-code)

To prevent server-only code from being executed on the client, you can mark a module with the [`server-only`](https://www.npmjs.com/package/server-only) package:

This ensures that proprietary code or internal business logic stays on the server by causing a build error if the module is imported in the client environment.

## Mutating Data[](https://nextjs.org/docs/app/guides/data-security#mutating-data)

Next.js handles mutations with [Server Actions](https://react.dev/reference/rsc/server-functions).

### Built-in Server Actions Security features[](https://nextjs.org/docs/app/guides/data-security#built-in-server-actions-security-features)

By default, when a Server Action is created and exported, it creates a public HTTP endpoint and should be treated with the same security assumptions and authorization checks. This means, even if a Server Action or utility function is not imported elsewhere in your code, it's still publicly accessible.

To improve security, Next.js has the following built-in features:

-   **Secure action IDs:** Next.js creates encrypted, non-deterministic IDs to allow the client to reference and call the Server Action. These IDs are periodically recalculated between builds for enhanced security.
-   **Dead code elimination:** Unused Server Actions (referenced by their IDs) are removed from client bundle to avoid public access.

> **Good to know**:
> 
> The IDs are created during compilation and are cached for a maximum of 14 days. They will be regenerated when a new build is initiated or when the build cache is invalidated. This security improvement reduces the risk in cases where an authentication layer is missing. However, you should still treat Server Actions like public HTTP endpoints.

### Validating client input[](https://nextjs.org/docs/app/guides/data-security#validating-client-input)

You should always validate input from client, as they can be easily modified. For example, form data, URL parameters, headers, and searchParams:

You should always ensure that a user is authorized to perform an action. For example:

Learn more about [Authentication](https://nextjs.org/docs/app/guides/authentication) in Next.js.

### Closures and encryption[](https://nextjs.org/docs/app/guides/data-security#closures-and-encryption)

Defining a Server Action inside a component creates a [closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) where the action has access to the outer function's scope. For example, the `publish` action has access to the `publishVersion` variable:

Closures are useful when you need to capture a _snapshot_ of data (e.g. `publishVersion`) at the time of rendering so that it can be used later when the action is invoked.

However, for this to happen, the captured variables are sent to the client and back to the server when the action is invoked. To prevent sensitive data from being exposed to the client, Next.js automatically encrypts the closed-over variables. A new private key is generated for each action every time a Next.js application is built. This means actions can only be invoked for a specific build.

> **Good to know:** We don't recommend relying on encryption alone to prevent sensitive values from being exposed on the client.

### Overwriting encryption keys (advanced)[](https://nextjs.org/docs/app/guides/data-security#overwriting-encryption-keys-advanced)

When **self-hosting** your Next.js application across multiple servers, each server instance may end up with a different encryption key, leading to potential inconsistencies.

To mitigate this, you can overwrite the encryption key using the `process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY` environment variable. Specifying this variable ensures that your encryption keys are persistent across builds, and all server instances use the same key. This variable **must** be AES-GCM encrypted.

This is an advanced use case where consistent encryption behavior across multiple deployments is critical for your application. You should consider standard security practices such key rotation and signing.

### Allowed origins (advanced)[](https://nextjs.org/docs/app/guides/data-security#allowed-origins-advanced)

Since Server Actions can be invoked in a `<form>` element, this opens them up to [CSRF attacks](https://developer.mozilla.org/en-US/docs/Glossary/CSRF).

Behind the scenes, Server Actions use the `POST` method, and only this HTTP method is allowed to invoke them. This prevents most CSRF vulnerabilities in modern browsers, particularly with [SameSite cookies](https://web.dev/articles/samesite-cookies-explained) being the default.

As an additional protection, Server Actions in Next.js also compare the [Origin header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) to the [Host header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host) (or `X-Forwarded-Host`). If these don't match, the request will be aborted. In other words, Server Actions can only be invoked on the same host as the page that hosts it.

For large applications that use reverse proxies or multi-layered backend architectures (where the server API differs from the production domain), it's recommended to use the configuration option [`serverActions.allowedOrigins`](https://nextjs.org/docs/app/api-reference/config/next-config-js/serverActions) option to specify a list of safe origins. The option accepts an array of strings.

Learn more about [Security and Server Actions](https://nextjs.org/blog/security-nextjs-server-components-actions).

### Avoiding side-effects during rendering[](https://nextjs.org/docs/app/guides/data-security#avoiding-side-effects-during-rendering)

Mutations (e.g. logging out users, updating databases, invalidating caches) should never be a side-effect, either in Server or Client Components. Next.js explicitly prevents setting cookies or triggering cache revalidation within render methods to avoid unintended side effects.

Instead, you should use Server Actions to handle mutations.

> **Good to know:** Next.js uses `POST` requests to handle mutations. This prevents accidental side-effects from GET requests, reducing Cross-Site Request Forgery (CSRF) risks.

## Auditing[](https://nextjs.org/docs/app/guides/data-security#auditing)

If you're doing an audit of a Next.js project, here are a few things we recommend looking extra at:

-   **Data Access Layer:** Is there an established practice for an isolated Data Access Layer? Verify that database packages and environment variables are not imported outside the Data Access Layer.
-   **`"use client"` files:** Are the Component props expecting private data? Are the type signatures overly broad?
-   **`"use server"` files:** Are the Action arguments validated in the action or inside the Data Access Layer? Is the user re-authorized inside the action?
-   **`/[param]/.`** Folders with brackets are user input. Are params validated?
-   **`proxy.ts` and `route.ts`:** Have a lot of power. Spend extra time auditing these using traditional techniques. Perform Penetration Testing or Vulnerability Scanning regularly or in alignment with your team's software development lifecycle.