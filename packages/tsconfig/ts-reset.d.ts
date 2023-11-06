/* 
  https://www.npmjs.com/package/@total-typescript/ts-reset?activeTab=readme
  https://www.totaltypescript.com/ts-reset
 */
type NonFalsy<T> = T extends false | 0 | '' | null | undefined | 0n ? never : T

/* Make .filter(Boolean) filter out falsy values */
interface Array<T> {
	filter(predicate: BooleanConstructor, thisArg?: any): NonFalsy<T>[]
}

interface ReadonlyArray<T> {
	filter(predicate: BooleanConstructor, thisArg?: any): NonFalsy<T>[]
}
