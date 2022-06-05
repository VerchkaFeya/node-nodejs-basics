import fs from 'fs';
import path from 'path';
import { stdout } from 'process';
import { pipeline } from 'stream/promises';

export const read = async () => {
    const stream =  fs.createReadStream(path.resolve('src', 'streams', 'files', 'fileToRead.txt'));
    await pipeline(stream, stdout);
  };

read();
