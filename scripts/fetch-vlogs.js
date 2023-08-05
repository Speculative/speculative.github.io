import * as dotenv from 'dotenv';
import * as drive from '@googleapis/drive';
import { JWT } from 'google-auth-library';
import fetch from 'node-fetch';
import * as mime from 'mime-types';

import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

dotenv.config();

const { GOOGLE_CLIENT_EMAIL, GOOGLE_CLIENT_KEY, DRIVE_FOLDER_ID } = process.env;

const PATH_TO_JSON = '../src/routes/vlog/vlogs.json';
const PATH_TO_THUMBNAILS = '../static/vlog';
const MODULE_DIR = path.dirname(url.fileURLToPath(import.meta.url));

const JSON_OUT_PATH = path.resolve(MODULE_DIR, PATH_TO_JSON);
const THUMBNAIL_OUT_PATH = path.resolve(MODULE_DIR, PATH_TO_THUMBNAILS);

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

fs.mkdirSync(THUMBNAIL_OUT_PATH);

for (let file of dirContents.data.files) {
	console.log('Fetching thumbnail:', file.id, file.thumbnailLink);

	const res = await fetch(file.thumbnailLink);
	const blob = await res.blob();
	const imgBuffer = await blob.arrayBuffer();
	const ext = mime.extension(res.headers.get('Content-Type'));

	const thumbnailPath = path.resolve(THUMBNAIL_OUT_PATH, `${file.id}.${ext}`);

	fs.writeFileSync(thumbnailPath, Buffer.from(imgBuffer));

	// Rewrite thumbnail path in place
	file.thumbnailLink = `/vlog/${file.id}.${ext}`;
}

fs.writeFileSync(JSON_OUT_PATH, JSON.stringify(dirContents.data.files), {});
