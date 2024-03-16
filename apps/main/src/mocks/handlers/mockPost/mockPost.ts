import { HttpResponse, delay, http } from 'msw'

import { BACKEND_PATH } from '$constants'

import { mockGetPostData } from './mockPostData'

const mockGetPost = http.get(`${BACKEND_PATH}/v1/posts`, async () => {
	const body = mockGetPostData
	await delay(600)
	return HttpResponse.json({ sucess: true, body }, { status: 200 })
})

export const mockPost = [mockGetPost]
