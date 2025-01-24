# Markdown Renderer

A versatile Node.js package for converting Markdown to HTML. Fetch Markdown content from a URL, local file, or text string, and render it into HTML.

## Features

- Fetch Markdown from various sources: URL, local path, or text.
- Convert Markdown to HTML using a custom renderer.
- Lightweight and dependency-free.

## Installation

To install the package, run:

```
npm install markdown-htmlify
```

## Usage

### Importing the Package

You can import the package in your TypeScript or JavaScript file as follows:

```typescript
import { renderMarkdown } from 'markdown-htmlify';
```

### Rendering Markdown

You can render Markdown from a URL, local path, or text string:

```typescript
// change https://example.com/readme.md to your own markdown path
const markdownFromUrl = await renderMarkdown('https://example.com/readme.md');
const markdownFromFile = await renderMarkdown('/path/to/local/file.md');
const markdownFromText = await renderMarkdown('# Hello World\nThis is a markdown text.');
```

### Example

Here’s a simple example of how to use the package:

```typescript
import { renderMarkdown } from 'markdown-htmlify';

async function main() {
    const html = await renderMarkdown('https://example.com/readme.md');
    console.log(html);
}

main();
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.