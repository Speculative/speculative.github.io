import * as dotenv from 'dotenv';
import * as drive from '@googleapis/drive';
import { JWT } from 'google-auth-library';
import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

dotenv.config();

const { GOOGLE_CLIENT_EMAIL, GOOGLE_CLIENT_KEY, DRIVE_FOLDER_ID } = process.env;
const MODULE_DIR = path.dirname(url.fileURLToPath(import.meta.url));
const PATH_TO_JSON = '../src/routes/vlog/vlogs.json';
const OUT_PATH = path.resolve(MODULE_DIR, PATH_TO_JSON);

const client = new JWT({
	email: GOOGLE_CLIENT_EMAIL,
	key: GOOGLE_CLIENT_KEY,
	scopes: [
		'https://www.googleapis.com/auth/cloud-platform',
		'https://www.googleapis.com/auth/drive'
	]
});

const driveClient = drive.drive({
	version: 'v3',
	auth: client
});
const dirContents = await driveClient.files.list({
	supportsAllDrives: true,
	includeItemsFromAllDrives: true,
	q: `'${DRIVE_FOLDER_ID}' in parents and trashed = false`,
	fields:
		'nextPageToken, files(id, name, description, createdTime, thumbnailLink, webViewLink,  webContentLink)'
});

for (let file of dirContents.data.files) {
	console.log(file);
}

fs.writeFileSync(OUT_PATH, JSON.stringify(dirContents.data.files), {});
