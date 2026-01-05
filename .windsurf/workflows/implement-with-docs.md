---
description: Implement task using local documentation first, then web search as fallback
---
# Task Implementation with Documentation Priority

## Step 1: Search Local Documentation
First, search and retrieve relevant instructions from the ./.rag-docs directory (all Markdown files). Use semantic search to find the most relevant documentation chunks for this task.

## Step 2: Implement Based on Local Docs
If relevant local documentation is found, implement the solution EXACTLY as described in the local docs. Follow the specific patterns, code examples, and configurations provided in the local documentation.

## Step 3: Web Fallback (Only If Needed)
ONLY if no matching local content exists for the specific task, perform a web search and include citations. Clearly state: "No local documentation found, searching web..."

## Step 4: Quality Assurance
- Cite the specific file path from ./.rag-docs that guided your implementation
- Follow all project conventions from the Windsurf rules
- Verify all imports use proper aliases
- Test the implementation thoroughly

## Step 5: Documentation
If you found new information from web search, consider adding it to ./.rag-docs for future reference.