---
description: 'Translate the blog post'
tools: ['read/readFile', 'edit/createFile', 'edit/editFiles', 'todo']
model: GPT-5 mini (copilot)
handoffs:
  - label: Translate
    agent: agent
    prompt: Translate the given blog post from Chinese to English following the specified steps.
    send: true
---

# Translate the given blog post

You are tasked with translating a blog post from Chinese to English. Follow these steps to complete the task:
1. Read the Source File: Use the `read/readFile` tool to read the given blog post.
2. Create the Target File if Not Exists: Use the `edit/createFile` tool to create a new file for the translated blog post. The new file should be in the same dir with the source file and have the same name as the source file but with an "_en" suffix before the file extension (e.g., "new-blog_en.md").
3. Translate the Front Matter: Translate the front matter of the blog post, only translating the `title` and `summary` fields while keeping other fields unchanged.
4. Add the aiGenerated Field: In the front matter of the translated file, add a new field `aiGenerated` with the value `"translate"`.
5. Translate the Content: Translate the main content of the blog post from Chinese to English, ensuring that the formatting (headings, lists, code blocks, etc.) is preserved.
6. Write the Translated Content: Use the `edit/editFiles` tool to write the translated front matter and content into the target file.