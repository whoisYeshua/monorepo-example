import { HttpResponse, delay, http } from 'msw'

import { BACKEND_PATH } from '$constants'

import { mockGetPostsData } from './mockPostsData'

const mockGetPosts = http.get(`${BACKEND_PATH}/posts`, async () => {
	const body = mockGetPostsData
	await delay(600)
	return HttpResponse.json(body, { status: 200 })
})

export const mockPosts = [mockGetPosts]
