Last updated

June 16, 2025

The `use server` directive designates a function or file to be executed on the **server side**. It can be used at the top of a file to indicate that all functions in the file are server-side, or inline at the top of a function to mark the function as a [Server Function](https://19.react.dev/reference/rsc/server-functions). This is a React feature.

## Using `use server` at the top of a file[](https://nextjs.org/docs/app/api-reference/directives/use-server#using-use-server-at-the-top-of-a-file)

The following example shows a file with a `use server` directive at the top. All functions in the file are executed on the server.

### Using Server Functions in a Client Component[](https://nextjs.org/docs/app/api-reference/directives/use-server#using-server-functions-in-a-client-component)

To use Server Functions in Client Components you need to create your Server Functions in a dedicated file using the `use server` directive at the top of the file. These Server Functions can then be imported into Client and Server Components and executed.

Assuming you have a `fetchUsers` Server Function in `actions.ts`:

Then you can import the `fetchUsers` Server Function into a Client Component and execute it on the client-side.

## Using `use server` inline[](https://nextjs.org/docs/app/api-reference/directives/use-server#using-use-server-inline)

In the following example, `use server` is used inline at the top of a function to mark it as a [Server Function](https://19.react.dev/reference/rsc/server-functions):

## Security considerations[](https://nextjs.org/docs/app/api-reference/directives/use-server#security-considerations)

When using the `use server` directive, it's important to ensure that all server-side logic is secure and that sensitive data remains protected.

Always authenticate and authorize users before performing sensitive server-side operations.

## Reference[](https://nextjs.org/docs/app/api-reference/directives/use-server#reference)

See the [React documentation](https://react.dev/reference/rsc/use-server) for more information on `use server`.