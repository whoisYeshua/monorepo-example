import { BACKEND_PATH } from '$constants'

import { ApiUrl } from './ApiUrl'

describe('ApiUrl', () => {
	test('should create a URL with base path and relative URL', () => {
		const apiUrl = new ApiUrl('users')
		expect(apiUrl.href).toBe(`http://localhost/${BACKEND_PATH}/users`)
	})

	test('should handle trailing slashes correctly', () => {
		const apiUrl = new ApiUrl('/users/')
		expect(apiUrl.href).toBe(`http://localhost/${BACKEND_PATH}/users/`)
	})

	test('should append query parameters correctly', () => {
		const apiUrl = new ApiUrl('users', {
			queryParams: {
				id: '123',
				name: 'John',
			},
		})
		expect(apiUrl.href).toBe(`http://localhost/${BACKEND_PATH}/users?id=123&name=John`)
	})

	test('should handle empty query parameters', () => {
		const apiUrl = new ApiUrl('users', { queryParams: {} })
		expect(apiUrl.href).toBe(`http://localhost/${BACKEND_PATH}/users`)
	})

	test('should handle undefined options', () => {
		const apiUrl = new ApiUrl('users')
		expect(apiUrl.href).toBe(`http://localhost/${BACKEND_PATH}/users`)
	})

	test('should replace route parameters correctly', () => {
		const apiUrl = new ApiUrl('users/$id', {
			params: {
				id: 123,
			},
		})
		expect(apiUrl.href).toBe(`http://localhost/${BACKEND_PATH}/users/123`)
	})

	test('should replace multiple route parameters correctly', () => {
		const apiUrl = new ApiUrl('users/$id/posts/$postId', {
			params: {
				id: 123,
				postId: 456,
			},
		})
		expect(apiUrl.href).toBe(`http://localhost/${BACKEND_PATH}/users/123/posts/456`)
	})

	test('should handle route parameters with query parameters', () => {
		const apiUrl = new ApiUrl('users/$id', {
			params: {
				id: 123,
			},
			queryParams: {
				sort: 'desc',
				limit: 10,
			},
		})
		expect(apiUrl.href).toBe(`http://localhost/${BACKEND_PATH}/users/123?sort=desc&limit=10`)
	})

	test('should handle string non-numeric route parameters', () => {
		const apiUrl = new ApiUrl('users/$username/profile', {
			params: {
				username: 'johndoe',
			},
		})
		expect(apiUrl.href).toBe(`http://localhost/${BACKEND_PATH}/users/johndoe/profile`)
	})

	test('should handle special characters in route parameters', () => {
		const apiUrl = new ApiUrl('search/$query', {
			params: {
				query: 'hello world',
			},
		})
		expect(apiUrl.href).toBe(`http://localhost/${BACKEND_PATH}/search/hello%20world`)
	})

	test('should handle boolean query parameters', () => {
		const apiUrl = new ApiUrl('users', {
			queryParams: {
				active: true,
				verified: false,
			},
		})
		expect(apiUrl.href).toBe(`http://localhost/${BACKEND_PATH}/users?active=true&verified=false`)
	})

	test('should handle numeric query parameters', () => {
		const apiUrl = new ApiUrl('users', {
			queryParams: {
				limit: 10,
				offset: 20,
			},
		})
		expect(apiUrl.href).toBe(`http://localhost/${BACKEND_PATH}/users?limit=10&offset=20`)
	})

	test('should handle path with no parameters', () => {
		// Type test - this should compile without errors
		const apiUrl = new ApiUrl('users/list', {
			queryParams: {
				page: 1,
			},
		})
		expect(apiUrl.href).toBe(`http://localhost/${BACKEND_PATH}/users/list?page=1`)
	})

	test('should replace all occurrences of the same parameter', () => {
		const apiUrl = new ApiUrl('users/$id/posts/$id', {
			params: {
				id: 123,
			},
		})
		expect(apiUrl.href).toBe(`http://localhost/${BACKEND_PATH}/users/123/posts/123`)
	})

	test('should handle deep nested paths correctly', () => {
		const apiUrl = new ApiUrl('organizations/$orgId/teams/$teamId/members/$memberId', {
			params: {
				orgId: 100,
				teamId: 200,
				memberId: 300,
			},
		})
		expect(apiUrl.href).toBe(
			`http://localhost/${BACKEND_PATH}/organizations/100/teams/200/members/300`
		)
	})
})
