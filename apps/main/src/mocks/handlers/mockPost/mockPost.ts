import { rest } from 'msw'

import { BACKEND_PATH } from '$constants'

import { mockGetPostData } from './mockPostData'

const mockGetPost = rest.get(`${BACKEND_PATH}/v1/posts`, async (_req, res, ctx) => {
	const body = mockGetPostData

	return res(ctx.status(200), ctx.delay(600), ctx.json({ sucess: true, body }))
})

export const mockPost = [mockGetPost]
