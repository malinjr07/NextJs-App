Last updated

November 5, 2025

`refresh` allows you to refresh the client router from within a [Server Action](https://nextjs.org/docs/app/getting-started/updating-data).

## Usage[](https://nextjs.org/docs/app/api-reference/functions/refresh#usage)

`refresh` can **only** be called from within Server Actions. It cannot be used in Route Handlers, Client Components, or any other context.

## Parameters[](https://nextjs.org/docs/app/api-reference/functions/refresh#parameters)

## Returns[](https://nextjs.org/docs/app/api-reference/functions/refresh#returns)

`refresh` does not return a value.

## Examples[](https://nextjs.org/docs/app/api-reference/functions/refresh#examples)

```javascript
'use server'
 
import { refresh } from 'next/cache'
 
export async function createPost(formData: FormData) {
  const title = formData.get('title')
  const content = formData.get('content')
 
  // Create the post in your database
  const post = await db.post.create({
    data: { title, content },
  })
 
  refresh()
}
```

### Error when used outside Server Actions[](https://nextjs.org/docs/app/api-reference/functions/refresh#error-when-used-outside-server-actions)

```javascript
import { refresh } from 'next/cache'
 
export async function POST() {
  // This will throw an error
  refresh()
}
```