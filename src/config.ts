import { resolveResource } from '@tauri-apps/api/path';
import { readTextFile } from '@tauri-apps/api/fs';

import {
	PUBLIC_DEBUG,
} from '$env/static/public';

let initialConfig: Record<string, string> = {};

try {
	const resourcePath = await resolveResource('config.json');
	initialConfig = JSON.parse(await readTextFile(resourcePath));
} catch (e) {
	console.error('Error fetching config.json', e);
}

console.log(initialConfig);

const { debug } = initialConfig;

const config = {
	debug: debug ?? PUBLIC_DEBUG,
};

export default config;
