import { ApiUrl } from './config'

import type { Post } from '$models'

export const getPosts = async () => {
	const res = await fetch(new ApiUrl('/posts').href, {
		method: 'GET',
	})
	if (!res.ok) throw new Error('Failed to fetch posts')
	return res.json() as Promise<Post[]>
}
