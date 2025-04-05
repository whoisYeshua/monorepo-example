import { memo, useMemo, use, Component, Suspense } from 'react'
import { BulletList, Skeleton, Text } from '@monorepo-example/ui'

import type { Post } from '$models'
import type { ReactNode } from 'react'

class PostsErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }> {
	state = { hasError: false }

	static getDerivedStateFromError() {
		return { hasError: true }
	}

	render() {
		const { hasError } = this.state
		const { children, fallback } = this.props

		if (hasError) return fallback

		return children
	}
}

const PostsContent = memo(({ postsPromise }: { postsPromise: Promise<Post[]> }) => {
	const data = use(postsPromise)
	const postsTitles = useMemo(() => data?.map((post) => post.title), [data])

	if (!postsTitles) return 'No data'

	return (
		<div>
			<BulletList list={postsTitles} />
		</div>
	)
})

PostsContent.displayName = 'PostsContent'

export const Posts = memo(({ postsPromise }: { postsPromise: Promise<Post[]> }) => (
	<PostsErrorBoundary
		fallback={
			<Text color="red.600">Something went wrong loading posts. Please try again later.</Text>
		}
	>
		<Suspense fallback={<Skeleton height="500px" width="100%" />}>
			<PostsContent postsPromise={postsPromise} />
		</Suspense>
	</PostsErrorBoundary>
))

Posts.displayName = 'Posts'
