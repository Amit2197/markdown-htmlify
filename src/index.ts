import { fetchMarkdownFromUrl, fetchMarkdownFromLocalPath } from './utils/fetchMarkdown';
import { renderMarkdown } from './renderer';

async function renderMarkdownFromSource(source: string, isUrl: boolean): Promise<string> {
  let markdownContent: string;
  if (isUrl) {
    markdownContent = await fetchMarkdownFromUrl(source);
  } else {
    markdownContent = await fetchMarkdownFromLocalPath(source);
  }
  return renderMarkdown(markdownContent);
}

export { renderMarkdownFromSource };