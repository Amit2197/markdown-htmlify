import { fetchMarkdownFromUrl, fetchMarkdownFromLocalPath } from '../../src/utils/fetchMarkdown';

describe('fetchMarkdown', () => {
  test('fetches markdown from URL', async () => {
    const url = 'https://raw.githubusercontent.com/Amit2197/ProgramingSolved/main/README.md';
    const markdown = await fetchMarkdownFromUrl(url);
    expect(markdown).toContain('# ProgramingSolved');
  });

  test('fetches markdown from local path', async () => {
    const path = './README.md';
    const markdown = await fetchMarkdownFromLocalPath(path);
    expect(markdown).toContain('# Example');
  });
}); 