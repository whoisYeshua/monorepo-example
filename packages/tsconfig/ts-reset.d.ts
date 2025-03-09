/* 
  https://www.npmjs.com/package/@total-typescript/ts-reset?activeTab=readme
  https://www.totaltypescript.com/ts-reset
 */

type Falsy = false | 0 | '' | null | undefined
type NonFalsy<T> = Exclude<T, Falsy>

/* Make .filter(Boolean) filter out falsy values. Modified version for TS5+ - https://github.com/total-typescript/ts-reset/issues/168#issuecomment-2037805462 */
interface Array<T> {
	filter<S extends T>(
		predicate: (value: T, index: number, array: readonly T[]) => value is S,
		thisArg?: unknown
	): S[] // duplicated from DOM types
	filter<P extends (value: T, index: number, array: T[]) => unknown>(
		predicate: P,
		thisArg?: unknown
	): (P extends BooleanConstructor ? NonFalsy<T> : T)[]
}

interface ReadonlyArray<T> {
	filter<S extends T>(
		predicate: (value: T, index: number, array: readonly T[]) => value is S,
		thisArg?: unknown
	): S[] // duplicated from DOM types
	filter<P extends (value: T, index: number, array: T[]) => unknown>(
		predicate: P,
		thisArg?: unknown
	): (P extends BooleanConstructor ? NonFalsy<T> : T)[]
}
