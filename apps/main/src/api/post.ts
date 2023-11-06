import { ApiUrl } from './config'

import type { Post } from '$models'

export const getPost = async (id: string) => {
	const res = await fetch(new ApiUrl('/post', { params: { id } }).href, {
		method: 'GET',
	})
	return res.json() as Promise<Post>
}
