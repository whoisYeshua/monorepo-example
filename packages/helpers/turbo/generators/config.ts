// eslint-disable-next-line import/no-extraneous-dependencies -- turbo должен быть на root уровне проекта
import type { PlopTypes } from '@turbo/gen'

const requireField = (fieldName: string) => (value: string) => {
	if (String(value).length === 0) {
		return `${fieldName} is required`
	}
	return true
}

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	// A simple generator to add a new React component to the internal UI library
	plop.setGenerator('helpers/hook', {
		description: 'Add a custom React hook to helpers package',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is the name of the hook?',
				validate: requireField('name'),
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/hooks/use{{pascalCase name}}.ts',
				templateFile: '../../../../plop-templates/hook.ts.hbs',
			},
			{
				type: 'add',
				path: 'src/hooks/index.ts',
				templateFile: '../../../../plop-templates/injectable-index.ts.hbs',
				skipIfExists: true,
			},
			{
				type: 'append',
				path: 'src/hooks/index.ts',
				pattern: `/* PLOP_INJECT_REEXPORT */`,
				template: `export * from './use{{pascalCase name}}'`,
			},
		],
	})
}
