import fs from 'fs/promises';
import path from 'path';

export const copy = async () => {
    const pathSrc = path.resolve('src', 'fs', 'files');
    const pathDest = path.resolve('src', 'fs', 'files_copy');

      try {
        await fs.cp(pathSrc, pathDest, {
          recursive: true,
          errorOnExist: true,
          force: false
        });
      } catch {
        throw new Error('FS operation failed!');
      }
};

copy();