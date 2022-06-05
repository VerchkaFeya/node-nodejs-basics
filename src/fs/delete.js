import fs from 'fs/promises';
import path from 'path';

export const remove = async () => {
  const pathToFile = path.resolve('src', 'fs', 'files', 'fileToRemove.txt');
  try {
    await fs.rm(pathToFile);
    console.log('file deleted');
  } catch {
    throw new Error('FS operation failed');
  }
};

remove();