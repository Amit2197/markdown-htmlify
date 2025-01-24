import * as fs from 'fs/promises';
import * as https from 'https';

export async function fetchMarkdownFromUrl(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        resolve(data);
      });
    }).on('error', (error) => {
      reject(new Error(`Failed to fetch markdown from URL: ${(error as Error).message}`));
    });
  });
}

export async function fetchMarkdownFromLocalPath(path: string): Promise<string> {
  try {
    const data = await fs.readFile(path, 'utf-8');
    return data;
  } catch (error) {
    throw new Error(`Failed to read markdown from local path: ${(error as Error).message}`);
  }
}