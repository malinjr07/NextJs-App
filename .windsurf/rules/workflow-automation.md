# Workflow Automation Rules

**Activation Mode:** Always On

**Priority:** Medium

## Automated Development Workflow

### Task Execution Protocol

When assigned a development task, follow this automated sequence:

#### 1. Context Analysis Phase
- **Analyze the task requirements** and identify the main objective
- **Search local documentation** in `./.rag-docs` for relevant patterns and solutions
- **Check existing codebase** for similar implementations or established patterns
- **Identify dependencies** and required imports based on the task

#### 2. Planning Phase
- **Break down complex tasks** into smaller, manageable steps
- **Create a mental checklist** of what needs to be implemented
- **Identify potential edge cases** and error handling requirements
- **Plan the file structure** and component organization

#### 3. Implementation Phase
- **Follow local documentation patterns** exactly when available
- **Use established project conventions** (imports, styling, structure)
- **Implement incrementally** - build and test each component
- **Add proper error handling** and validation
- **Include relevant comments** for complex logic

#### 4. Quality Assurance Phase
- **Review implementation** against requirements
- **Check for consistency** with existing code patterns
- **Verify all imports** use proper aliases
- **Test the implementation** thoroughly
- **Document any deviations** from standard patterns

## Specific Workflow Rules

### For Component Development
1. **Check `./.rag-docs`** for component patterns first
2. **Use proper import aliases** based on component type
3. **Follow Shadcn/UI patterns** for UI components
4. **Implement proper TypeScript types**
5. **Add responsive design** considerations
6. **Test component interactions**

### For Route/Feature Development
1. **Search for routing documentation** in local docs
2. **Follow SvelteKit routing conventions**
3. **Implement proper navigation** and links
4. **Add loading states** and error handling
5. **Ensure client-side only** implementation (ssr = false)
6. **Test route transitions** and data flow

### For Service/API Integration
1. **Check Firebase documentation** in `./.rag-docs`
2. **Use `@services` directory** for API logic
3. **Implement proper error handling** for API calls
4. **Add loading states** for async operations
5. **Use environment variables** for configuration
6. **Test API integration** thoroughly

## Automation Triggers

### When to Use Web Search
- **No local documentation** found for the specific task
- **Official docs are outdated** or don't cover the use case
- **Need current best practices** for new libraries/features
- **Looking for troubleshooting solutions** not in local docs

### When to Stick to Local Docs
- **Local docs cover the scenario** adequately
- **Project has established patterns** for similar features
- **Library versions are specific** and documented locally
- **Security considerations** are documented in project

## Error Prevention

### Common Pitfalls to Avoid
- **Don't skip local doc search** - always check first
- **Don't use relative imports** when aliases are available
- **Don't implement server-side code** in client-side project
- **Don't ignore TypeScript** type safety
- **Don't forget error handling** for async operations
- **Don't deviate from established patterns** without reason

### Quality Checkpoints
- **Before coding:** Have you checked local docs?
- **During coding:** Are you following project conventions?
- **After coding:** Does it match the documented patterns?
- **Before completion:** Have you tested thoroughly?

## Continuous Improvement

### Learning from Implementation
- **Document new patterns** discovered during development
- **Update local documentation** when better approaches are found
- **Note common issues** and their solutions
- **Share knowledge** with team through documentation updates

### Feedback Loop
- **Track what works well** in local docs
- **Identify gaps** in current documentation
- **Suggest improvements** to existing patterns
- **Contribute new findings** back to `./.rag-docs`

## Examples

**Good Workflow:**
1. "Task: Add user authentication"
2. "Searching `./.rag-docs/firebase/auth.md`..."
3. "Found authentication patterns - implementing as documented"
4. "Using `@services/firebase` and `@store/auth`"
5. "Testing login/logout functionality"
6. "Implementation complete and tested"

**Bad Workflow:**
1. "Task: Add user authentication"
2. "Starting to code immediately..."
3. "Using relative imports and custom patterns"
4. "Not checking existing authentication setup"
5. "Creating duplicate or conflicting code"
