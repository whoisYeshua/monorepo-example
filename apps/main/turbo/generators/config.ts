import type { PlopTypes } from '@turbo/gen'

const requireField = (fieldName: string) => (value: string) => {
	if (String(value).length === 0) {
		return `${fieldName} is required`
	}
	return true
}

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	plop.setGenerator('main/api', {
		description: 'Add a new API in a main package',
		prompts: [
			{
				type: 'list',
				name: 'httpMethod',
				message: 'What is HTTP method for request? (Default: GET)',
				choices: ['GET', 'POST'],
				default: 'GET',
			},
			{
				type: 'input',
				name: 'name',
				message: 'What is the name of the API entity?',
				validate: requireField('name'),
			},
			{
				type: 'input',
				name: 'urlPath',
				message: 'What is the path of the request? (/back/[urlPath])',
				filter: (value: string) => value.trim().replace(/^\//, ''),
				validate: requireField('urlPath'),
			},
			{
				type: 'input',
				name: 'queryParamName',
				message: 'What is the name of URL query param?',
				validate: requireField('queryParamName'),
				when: (answers) => answers?.httpMethod === 'GET',
			},
			{
				type: 'confirm',
				name: 'withMock',
				message: 'Add mock for the request? (Default: Yes)',
				default: true,
			},
		],
		actions: (answers) => {
			const mockName = 'mock{{pascalCase name}}'

			const actions: PlopTypes.Actions = [
				{
					type: 'add',
					path: 'src/api/{{camelCase name}}.ts',
					templateFile: '../../../../plop-templates/api/rest.ts.hbs',
					skipIfExists: true,
				},
				{
					type: 'append',
					path: 'src/api/index.ts',
					pattern: '/* PLOP_INJECT_REEXPORT */',
					template: `export * from './{{camelCase name}}'`,
				},
			]
			if (answers?.withMock) {
				actions.push(
					{
						type: 'add',
						path: `src/mocks/handlers/${mockName}/${mockName}Data.ts`,
						templateFile: '../../../../plop-templates/api/mockData.ts.hbs',
						skipIfExists: true,
					},
					{
						type: 'add',
						path: `src/mocks/handlers/${mockName}/${mockName}.ts`,
						templateFile: '../../../../plop-templates/api/mock.ts.hbs',
						skipIfExists: true,
					},
					{
						type: 'add',
						path: `src/mocks/handlers/${mockName}/index.ts`,
						templateFile: '../../../../plop-templates/injectable-index.ts.hbs',
						skipIfExists: true,
					},
					{
						type: 'modify',
						path: `src/mocks/handlers/${mockName}/index.ts`,
						pattern: '/* PLOP_INJECT_REEXPORT */',
						template: `export { ${mockName} } from './${mockName}'`,
					},
					{
						type: 'add',
						path: `src/mocks/handlers/handlers.ts`,
						templateFile: '../../../../plop-templates/api/mockHandlers.ts.hbs',
						skipIfExists: true,
					},
					{
						type: 'append',
						path: `src/mocks/handlers/handlers.ts`,
						pattern: '/* PLOP_INJECT_IMPORT */',
						template: `import { ${mockName} } from './${mockName}'`,
					},
					{
						type: 'append',
						path: `src/mocks/handlers/handlers.ts`,
						pattern: '/* PLOP_INJECT_HANDLER */',
						template: `	...${mockName},`,
					}
				)
			}
			return actions
		},
	})

	plop.setGenerator('main/component', {
		description: 'Adds a new React component to main package',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is the name of the component?',
				validate: requireField('name'),
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
				templateFile: '../../../../plop-templates/Component/Component.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}/index.ts',
				templateFile: '../../../../plop-templates/Component/index.ts.hbs',
			},
			{
				type: 'add',
				path: 'src/components/index.ts',
				templateFile: '../../../../plop-templates/injectable-index.ts.hbs',
				skipIfExists: true,
			},
			{
				type: 'append',
				path: 'src/components/index.ts',
				pattern: '/* PLOP_INJECT_REEXPORT */',
				template: `export * from './{{pascalCase name}}'`,
			},
		],
	})

	plop.setGenerator('main/page', {
		description: 'Adds a new page to main package',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is the name of the page?',
				validate: requireField('name'),
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
				templateFile: '../../../../plop-templates/Component/Component.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/pages/{{pascalCase name}}/index.ts',
				templateFile: '../../../../plop-templates/Component/index.ts.hbs',
			},
			{
				type: 'add',
				path: 'src/pages/index.ts',
				templateFile: '../../../../plop-templates/injectable-index.ts.hbs',
				skipIfExists: true,
			},
			{
				type: 'append',
				path: 'src/pages/index.ts',
				pattern: '/* PLOP_INJECT_REEXPORT */',
				template: `export * from './{{pascalCase name}}'`,
			},
		],
	})
}
