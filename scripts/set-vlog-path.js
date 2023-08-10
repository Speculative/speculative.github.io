import * as dotenv from 'dotenv';

import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

dotenv.config();

const MODULE_DIR = path.dirname(url.fileURLToPath(import.meta.url));
const PATH_TO_VLOGS = '../src/routes/vlog/';
const PUBLISH_PATH = `../src/routes/${process.env.VLOG_PUBLISH_PATH}`;

fs.renameSync(path.resolve(MODULE_DIR, PATH_TO_VLOGS), path.resolve(MODULE_DIR, PUBLISH_PATH));
