import fs from 'fs/promises';
import path from 'path';


export const create = async () => {
  const text = 'I am fresh and young';
  const pathToFile = path.resolve('src', 'fs', 'files', 'fresh.txt');

  
  try {
    await fs.writeFile(pathToFile, text, {flag: 'wx'});
  } catch {
    throw new Error('FS operation failed');
  }
};

create();