## Monorepo structure:

### Business modules (Apps):

| Directory                      | Description                         |
| ------------------------------ | ----------------------------------- |
| [./apps/main](./apps/main)     | Main app monorepo example           |
| [./apps/widget](./apps/widget) | Another app widget monorepo example |

### Packages:

| Directory                                            | Package Name                      | Description                                     |
| ---------------------------------------------------- | --------------------------------- | ----------------------------------------------- |
| [./packages/eslint-config](./packages/eslint-config) | `@monorepo-example/eslint-config` | Common _ESLint_ config for monorepo example     |
| [./packages/helpers](./packages/helpers)             | `@monorepo-example/helpers`       | Helper utility functions for monorepo example   |
| [./packages/jest-config](./packages/jest-config)     | `@monorepo-example/jest-config`   | _Jest_ config and setup for monorepo example    |
| [./packages/tsconfig](./packages/tsconfig)           | `@monorepo-example/tsconfig`      | Common _Typescript_ config for monorepo-example |
| [./packages/ui](./packages/ui)                       | `@monorepo-example/ui`            | Common UI components for apps                   |

## ⚠️ Requirements ⚠️

- _node.js_ - install version 20.12.2 (LTS). This is required to run the builder. You can check the installed version by typing the command `node -v` in the terminal/console.
- _npm_ - it should be installed along with _node.js_. It is required for installing modules and running scripts. You can check the installed version by typing the command `npm -v` in the terminal/console, it should be _10.5.0_.
- _git_

## Installation

1. Clone (requires _git_) or download the repository:

```bash
git clone https://github.com/whoisYeshua/monorepo-example.git
```

2. Navigate to the folder

```bash
cd monorepo-example
```

3. Install dependencies via _npm_:

```bash
npm i
```

## Commands

Start the dev server for all business modules with proxying requests to the DEV environment:

```bash
npm run dev
```

Start the dev server for the main microfrontend with proxying requests to the DEV environment:

```bash
npm run dev:main
```

Start the dev server for the widget microfrontend with proxying requests to the DEV environment:

```bash
npm run dev:widget
```

⭐ Start the dev server for the main microfrontend on local mocks using msw:

```bash
npm run dev:mock:main
```

Start the dev server for the main microfrontend for presentation on local BE:

```bash
npm run dev:local:main
```

Production build for all business modules:

```bash
npm run build
```

Production build for the main microfrontend:

```bash
npm run build:main
```

Production build for the widget microfrontend:

```bash
npm run build:widget
```

- ### Linter, formatting, and test commands

  running scripts in all monorepo packages

  Run `format:eslint` & `format:prettier`:

  ```bash
  npm run format
  ```

  Check the project with _ESLint_ and fix code sections available for _auto-fix_:

  ```bash
  npm run format:eslint
  ```

  Format files according to the _prettier_ config:

  ```bash
  npm run format:prettier
  ```

  ⭐ Run `lint:eslint` & `lint:prettier` & `lint:typescript`:

  ```bash
  npm run lint
  ```

  Check the project with _ESLint_ for non-compliance with the config rules. Will not change the checked files:

  ```bash
  npm run lint:eslint
  ```

  Check the project with _ESLint_ for non-compliance with the config rules (⚠️ for CI environment, where warnings are considered errors). Will not change the checked files:

  ```bash
  npm run lint:eslint:ci
  ```

  Check the project with _prettier_ for non-compliance with the config rules. Will not change the checked files:

  ```bash
  npm run lint:prettier
  ```

  Check the project with _Typescript_ for type errors. Will not change the checked files:

  ```bash
  npm run lint:ts
  ```

  ⭐ Run unit tests on the project:

  ```bash
  npm run test
  ```

  Run unit tests on the project (⚠️ for CI environment):

  ```bash
  npm run test:ci
  ```

⭐ Clean `node_modules`, `dist`, and cache

```bash
npm run clean
```

⭐ Check the project with _Knip_ for unused code

```bash
npm run knip
```

Clean the project from unused code

```bash
npm run knip:fix
```

⭐ Generate components, pages, API, transactions, and functions:

```bash
npm run generate
```

⭐ Start preview and test environment for components from the package (`@monorepo-example/ui`):

```bash
npm run storybook
```

Build a dependency graph for the `build` command (debugging):

```bash
npm run graph:build
```

Build a dependency graph for the `dev` command (debugging):

```bash
npm run graph:dev
```

Build a dependency graph for the `format` command (debugging):

```bash
npm run graph:format
```

Build a dependency graph for the `lint` command (debugging):

```bash
npm run graph:lint
```

### NPM Updating dependencies tips

_To run changes only in `package-lock.json` (without installing in `node_modules`), you can use the argument: `npm i --package-lock-only`_

#### In `@monorepo-example/ui`

Simply installing a new version in the `package.json` of the UI package and then running npm i started leading to moving dependencies from the global space (flat location - `node_modules/@tiptap/extension-placeholder`) to the package space (`packages/ui/node_modules/@tiptap/extension-placeholder`). This leads to duplication of dependencies and bloating of `node_modules` if the library is used in a single instance for the entire monorepo. To solve this, you can try the following path:

1. In the root of the monorepo, type in the terminal `npm i package@version -w @monorepo-example/ui --include-workspace-root` to update. For example, with `@tiptap` packages:

```bash
npm i @tiptap/extension-placeholder@2.11.0 @tiptap/pm@2.11.0 @tiptap/react@2.11.0 @tiptap/starter-kit@2.11.0 -w @monorepo-example/ui --include-workspace-root
```

2. Clean the root `package.json` from these dependencies;
3. Run `npm i` to also clean `package-lock.json` from them.

#### In any module

1. Remove the packages to be updated from all `package.json` files
2. `npm run clean`
3. `npm i package@version -w=module_location --legacy-peer-deps`

```bash
npm i -w=apps/main  -w=packages/ui react@latest --legacy-peer-deps
npm i -w=apps/main -w=apps/widget -w=packages/helpers react@latest --legacy-peer-deps
```

4. `npm run clean`
5. `npm i`
