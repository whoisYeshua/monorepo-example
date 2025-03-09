/** Makes all entity fields fully required (removing ?, undefined and null) */
export type FullRequired<Type> = {
	[Key in keyof Type]-?: FullRequired<NonNullable<Type[Key]>>
}

/** Adds null and optional (`:?`) to entity fields */
export type NullableDeep<Type> = {
	[Key in keyof Type]?: NullableDeep<Type[Key]> | null
}

/**
 * "Prettify" type output to improve hints displayed in editor/IDE
 * @see {@link https://github.com/sindresorhus/type-fest/blob/main/source/simplify.d.ts Source}
 * @example
```
interface SomeInterface {
	foo: number | null
}

interface SomeInterfaceSecond {
	test: string
}

type Ugly = SomeInterface & SomeInterfaceSecond // hint will be SomeInterface & SomeInterfaceSecond
type Pretty = Prittify<SomeInterface & SomeInterfaceSecond> // hint will be { foo: number | null; test: string }
``` 
 */
export type Prittify<T> = { [KeyType in keyof T]: T[KeyType] } & {}

/** Removes `null | undefined` from specified props in entity, but keeps optional (`:?`) */
export type SetNonNullable<BaseType, Keys extends keyof BaseType = keyof BaseType> = {
	[Key in keyof BaseType]: Key extends Keys ? NonNullable<BaseType[Key]> : BaseType[Key]
}

interface Flavoring<FlavoringType> {
	__type?: FlavoringType
}

export type Uuid = string
export type Id = string
export type Flavor<T, FlavoringType> = T & Flavoring<FlavoringType>

/** Used to create a new type based on an existing one, where some properties can accept null, undefined, or the original data type. Useful when you need to specify that certain object fields can be empty or missing.
@param BaseType - original type
@param Keys - list of properties that should become nullable. If this parameter is not specified, all properties will be nullable.
 */
export type SetNullable<BaseType, Keys extends keyof BaseType = keyof BaseType> = {
	[Key in keyof BaseType]: Key extends Keys ? BaseType[Key] | null | undefined : BaseType[Key]
}
