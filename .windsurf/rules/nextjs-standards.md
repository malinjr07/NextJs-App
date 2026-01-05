# Next.js Project Standards

**Activation Mode:** Always On

**Priority:** High

## General Protocols

### Full-Stack Next.js Project

- **Context:** This is a **Full-Stack Next.js 16** project with App Router.
- **Architecture:** Supports both client-side and server-side components.
- **Documentation:** Before making changes, check `../rag-docs/` for official documentation of each library/package or existing markdown conversation logs.

## Package Manager

- **Core Tool:** `yarn` (version 4.12.0)
- **Installation:** `yarn add <package>` (or `yarn add -D <package>` for dev dependencies)
- **Scripts:** Use `yarn dev`, `yarn build`, `yarn start`, `yarn lint`
- **Commit:** Use `yarn commit` for conventional commits

## Import Aliases & Paths

**Strictly use the following aliases defined in `tsconfig.json`. Do not use relative paths (like `../../`) when an alias is available.**

| Alias           | Path                   | Description                   |
| :-------------- | :--------------------- | :---------------------------- |
| `@shadcn/*`     | `components/shadCn/*`  | Shadcn/UI components          |
| `@common/*`     | `components/common/*`  | Common shared components      |
| `@core/*`       | `components/core/*`    | Core logic components         |
| `@layouts/*`    | `components/layouts/*` | Layout components             |
| `@lib/*`        | `utils/lib/*`          | Utility libraries             |
| `@hooks/*`      | `utils/hooks/*`        | Custom React hooks            |
| `@services/*`   | `utils/services/*`     | API/service layers            |
| `@store/*`      | `utils/store/*`        | State management stores       |
| `@types/*`      | `utils/types/*`        | TypeScript type definitions   |
| `@components/*` | `components/*`         | General components (fallback) |
| `@utils/*`      | `utils/*`              | General utilities (fallback)  |

**Rule:** When importing, use the keyword alias.
_Example_: `import Button from '@shadcn/ui/button';`

## Coding Standards

### React 19 & Next.js 16

- **Components:** Use functional components with React 19 features
- **Server Components:** Leverage Next.js App Router server components by default
- **Client Components:** Use `'use client'` directive only when needed (interactivity, hooks, browser APIs)
- **Async Components:** Use async/await for data fetching in server components
- **Error Boundaries:** Implement error.tsx files for error handling

### State Management

- **Server State:** Use React Server Components and Next.js data fetching patterns
- **Client State:** Use React hooks (useState, useEffect, useContext) for client-side state
- **Global State:** Use Context API or store patterns in `@store/*`
- **Form State:** Use React 19 form actions or libraries like React Hook Form

### Styling & UI

- **Framework:** Tailwind CSS v4.1.18 with PostCSS
- **UI Components:** Shadcn/UI components in `@shadcn/*`
- **Styling Strategy:** Utility-first with Tailwind, component variants with class-variance-authority
- **Responsive:** Mobile-first responsive design
- **Animation:** Use tw-animate-css for CSS animations

### Environment Variables

- **Prefix:** `NEXT_PUBLIC_` for client-side variables (e.g., `NEXT_PUBLIC_API_URL`)
- **Server Variables:** No prefix for server-only variables
- **Access:** Import from process.env in server components, use process.env.NEXT*PUBLIC*\* in client components

## Implementation Guidelines

### File Structure

- **App Router:** Use `src/app/` directory with Next.js App Router conventions
- **Components:** Organize in `src/components/` by category (shadcn, common, core, layouts)
- **Utilities:** Place in `src/utils/` with subdirectories (hooks, services, store, types, lib)
- **Styles:** Global styles in `src/styles/`
- **Follow established directory structure** and maintain naming consistency

### Code Quality

- **TypeScript:** Use TypeScript for type safety with strict mode enabled
- **Type Definitions:** Use `type` keyword for type definitions, not `interface` keyword
- **ESLint:** Follow ESLint configuration with Next.js and React hooks rules
- **Prettier:** Use Prettier for code formatting with Tailwind plugin
- **Imports:** Ensure all imports use proper aliases
- **Testing:** Test components thoroughly before implementation

### API Integration

- **Data Fetching:** Use Next.js data fetching patterns (fetch, async components)
- **API Routes:** Create API routes in `src/app/api/` directory
- **Client Requests:** Use axios for HTTP requests in client components
- **Error Handling:** Implement proper error handling for API calls
- **Loading States:** Use React Suspense and loading.tsx files

### Performance Optimization

- **Code Splitting:** Leverage Next.js automatic code splitting
- **Images:** Use Next.js Image component for optimization
- **Dynamic Imports:** Use dynamic imports for large components
- **Caching:** Implement Next.js caching strategies
- **Bundle Analysis:** Use webpack-bundle-analyzer for optimization

## Examples

**Correct Import:**

```typescript
import Button from '@shadcn/ui/button';
import { userService } from '@services/user';
import { useAuth } from '@hooks/auth';
import { User } from '@types/user';
import { formatDate } from '@lib/date';
```

**Incorrect Import:**

```typescript
import Button from '../../components/shadcn/ui/button';
import { userService } from '../utils/services/user';
import { useAuth } from '../hooks/auth';
```

**Correct Component Structure:**

```typescript
// Server Component (default)
export default async function HomePage() {
  const data = await fetchData();
  return <div>{data.title}</div>;
}

// Client Component
'use client';
import { useState } from 'react';
export default function InteractiveComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

**Correct API Route:**

```typescript
// src/app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { userService } from '@services/user';

export async function GET(request: NextRequest) {
  try {
    const users = await userService.getAll();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 },
    );
  }
}
```

## Development Workflow

### Git & Commits

- **Commit Convention:** Use conventional commits with `yarn commit`
- **Branch Strategy:** Feature branches with descriptive names
- **Code Review:** Ensure all code follows these standards before merging
- **Husky:** Pre-commit hooks for linting and formatting

### Build & Deployment

- **Development:** `yarn dev` for local development
- **Production:** `yarn build` for production build
- **Start:** `yarn start` for production server
- **Linting:** `yarn lint` for code quality checks

### Best Practices

- **Component Composition:** Build small, reusable components
- **Props Destructuring:** Use destructuring for cleaner code
- **Error Boundaries:** Wrap components in error boundaries
- **Loading States:** Show loading states during data fetching
- **SEO:** Use Next.js SEO features (metadata, sitemaps)
- **Accessibility:** Follow WCAG guidelines and use semantic HTML
