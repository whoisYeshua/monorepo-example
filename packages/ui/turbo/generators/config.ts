import type { PlopTypes } from '@turbo/gen'

const requireField = (fieldName: string) => (value: string) => {
	if (String(value).length === 0) {
		return `${fieldName} is required`
	}
	return true
}

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	// A simple generator to add a new React component to the internal UI library
	plop.setGenerator('ui/component', {
		description: 'Adds a new React component to ui package',
		prompts: [
			{
				type: 'list',
				name: 'componentType',
				message: 'What is your component entity? (Default: atoms)',
				choices: ['atoms', 'molecules', 'organisms'],
				default: 'atoms',
			},
			{
				type: 'input',
				name: 'name',
				message: 'What is the name of the component?',
				validate: requireField('name'),
			},
			{
				type: 'confirm',
				name: 'withStories',
				message: 'Add stories to the component? (Default: No)',
				default: false,
			},
		],
		actions: (answers) => {
			const actions = [
				{
					type: 'add',
					path: 'src/{{componentType}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
					templateFile: '../../../../plop-templates/Component/Component.tsx.hbs',
				},
				{
					type: 'add',
					path: 'src/{{componentType}}/{{pascalCase name}}/index.ts',
					templateFile: '../../../../plop-templates/Component/index.ts.hbs',
				},
				{
					type: 'add',
					path: 'src/{{componentType}}/index.ts',
					templateFile: '../../../../plop-templates/injectable-index.ts.hbs',
					skipIfExists: true,
				},
				{
					type: 'append',
					path: 'src/{{componentType}}/index.ts',
					pattern: '/* PLOP_INJECT_REEXPORT */',
					template: `export * from './{{pascalCase name}}'`,
				},
			]

			if (answers?.withStories) {
				actions.push({
					type: 'add',
					path: 'src/{{componentType}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
					templateFile: '../../../../plop-templates/Component/Component.stories.tsx.hbs',
				})
			}
			return actions
		},
	})
}
