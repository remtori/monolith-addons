module.exports = {
	arrowParens: 'avoid',
	bracketSameLine: true,
	bracketSpacing: false,
	overrides: [
		{
			files: ['*.html', '*.ejs'],
			options: {
				tabWidth: 2,
			},
		},
		{
			files: ['*.ts', '*.tsx', '*.js'],
			options: {
				tabWidth: 4,
			},
		},
	],
	printWidth: 120,
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	useTabs: true,
};
