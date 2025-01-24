export function renderMarkdown(markdown: string): string {
    // Convert headers
    markdown = markdown.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
    markdown = markdown.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
    markdown = markdown.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    markdown = markdown.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    markdown = markdown.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    markdown = markdown.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  
    // Convert bold and italic text
    markdown = markdown.replace(/\*\*\*(.*)\*\*\*/gim, '<b><i>$1</i></b>');
    markdown = markdown.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>');
    markdown = markdown.replace(/\*(.*)\*/gim, '<i>$1</i>');
  
    // Convert blockquotes
    markdown = markdown.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');
  
    // Convert unordered lists
    markdown = markdown.replace(/^\s*\n\* (.*)/gim, '<ul>\n<li>$1</li>\n</ul>');
    markdown = markdown.replace(/^\* (.*)/gim, '<li>$1</li>');
  
    // Convert ordered lists
    markdown = markdown.replace(/^\s*\n\d\. (.*)/gim, '<ol>\n<li>$1</li>\n</ol>');
    markdown = markdown.replace(/^\d\. (.*)/gim, '<li>$1</li>');
  
    // Convert images
    markdown = markdown.replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />");
  
    // Convert links
    markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>");
  
    // Convert paragraphs
    markdown = markdown.replace(/^\s*\n\s*\n/gim, '<p>');
    markdown = markdown.replace(/\n\s*\n/gim, '</p>\n<p>');
  
    // Convert line breaks
    markdown = markdown.replace(/\n/gim, '<br />');
  
    // Convert code blocks
    markdown = markdown.replace(/```(.*?)```/gim, '<pre><code>$1</code></pre>');
  
    // Convert inline code
    markdown = markdown.replace(/`(.*?)`/gim, '<code>$1</code>');
  
    return markdown.trim();
  }