import { BACKEND_PATH } from '$constants'

export type QueryParams = Record<string, string>

interface Options {
	params?: QueryParams
}

export class ApiUrl {
	#baseUrl = new URL(`/${BACKEND_PATH}/`, globalThis.location.origin)

	href: string

	constructor(relativeURL: string, options?: Options) {
		// Create a URL object with the base and relative URLs
		const url = new URL(relativeURL, this.#baseUrl)

		// If there are query parameters, append them to the URL
		if (options?.params) {
			for (const key of Object.keys(options.params)) {
				const value = options.params[key]
				url.searchParams.append(key, value.toString())
			}
		}

		// Set the full URL string
		this.href = url.toString()
	}
}
