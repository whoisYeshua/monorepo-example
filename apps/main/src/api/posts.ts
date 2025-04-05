import { ApiUrl } from './config'

import type { Post } from '$models'

export const getPost = async (id: string) => {
	const res = await fetch(new ApiUrl('/posts/$id', { params: { id } }).href, {
		method: 'GET',
	})
	if (!res.ok) throw new Error('Failed to fetch post')
	return res.json() as Promise<Post>
}

export const getPosts = async () => {
	const res = await fetch(new ApiUrl('/posts').href, {
		method: 'GET',
	})
	if (!res.ok) throw new Error('Failed to fetch posts')
	return res.json() as Promise<Post[]>
}
