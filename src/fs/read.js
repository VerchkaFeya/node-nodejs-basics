import fs from 'fs/promises';
import path from 'path';

export const read = async () => {
	const pathToFile = path.resolve('src', 'fs', 'files', 'fileToRead.txt');
    
	try {
		console.log(await fs.readFile(pathToFile, 'utf-8'));
	} catch {
		throw new Error('FS operation failed');
	}
};

read();