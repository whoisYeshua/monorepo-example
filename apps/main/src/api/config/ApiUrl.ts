import { BACKEND_PATH } from '$constants'

type QueryParams = Record<string, string | number | boolean | bigint>

type PathSegments<Path extends string> = Path extends `${infer SegmentA}/${infer SegmentB}`
	? ParamOnly<SegmentA> | PathSegments<SegmentB>
	: ParamOnly<Path>

type ParamOnly<Segment extends string> = Segment extends `$${infer Param}` ? Param : never

type RouteParams<Path extends string> = Record<PathSegments<Path>, unknown>

interface DefaultOptions {
	queryParams?: QueryParams
}

type Options<Path extends string> =
	RouteParams<Path> extends infer Params
		? [keyof Params] extends [never]
			? DefaultOptions & { params?: never }
			: DefaultOptions & { params: Params }
		: never

export class ApiUrl<Path extends string> {
	href: string

	constructor(path: Path, options?: Options<Path>) {
		// Remove leading slash from relative URL to prevent path resolution issues
		const formattedPath = path.startsWith('/') ? path.slice(1) : path
		const url = new URL(`/${BACKEND_PATH}/${formattedPath}`, globalThis.location.origin)

		if (options?.queryParams) {
			url.search = new URLSearchParams(options.queryParams as Record<string, string>).toString()
		}

		if (options?.params) {
			for (const [key, value] of Object.entries(options.params)) {
				url.pathname = url.pathname.replaceAll(`$${key}`, String(value))
			}
		}
		this.href = url.toString()
	}
}
