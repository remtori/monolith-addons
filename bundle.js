const fs = require('fs');
const zip = require('bestzip');
const path = require('path');
const manifest = require('./manifest.json');

const distDir = path.resolve(__dirname, './dist');

(async () => {
	if (!fs.existsSync(distDir))
	fs.mkdirSync(distDir);

	await zip({
		source: [
			'./build',
			'./manifest.json',
		],
		destination: path.join(distDir, `bundle-${manifest.version}.zip`),
	});
})();
