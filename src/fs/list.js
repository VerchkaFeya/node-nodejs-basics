import fs from 'fs/promises';
import path from 'path';

export const list = async () => {
    const folderPath = path.resolve('src', 'fs', 'files');

		try {
			console.log(await fs.readdir(folderPath));
		} catch {
			throw new Error('FS operation failed');
		}
		
};

list();