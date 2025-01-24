import { renderMarkdown } from '../src/renderer';

describe('Renderer', () => {
  test('renders markdown to HTML', () => {
    const markdown = '# Hello World';
    const html = renderMarkdown(markdown);
    expect(html).toBe('<h1>Hello World</h1>');
  });
});