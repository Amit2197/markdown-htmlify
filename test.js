const { renderMarkdownFromSource } = require('markdown-htmlify');

(async () => {
  const markdownUrl = 'https://raw.githubusercontent.com/Amit2197/ProgramingSolved/main/README.md';
  const html = await renderMarkdownFromSource(markdownUrl, true);
  console.log(html);
})();