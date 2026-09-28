import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destDir = path.join(__dirname, 'src', 'lib');
const destFile = path.join(destDir, 'anime.es.js');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

https.get('https://unpkg.com/animejs@3.2.2/lib/anime.es.js', (response) => {
    const file = fs.createWriteStream(destFile);
    response.pipe(file);
    file.on('finish', () => {
        file.close();
        console.log('Download completed successfully.');
    });
}).on('error', (err) => {
    console.error('Download error:', err);
});
