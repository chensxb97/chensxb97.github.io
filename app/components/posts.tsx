import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row md:space-x-3 space-y-1 md:space-y-0">
              <p className="md:w-1/4 text-sm dark:text-neutral-400 mt-1">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <div className="w-full">
                <p className="text-l font-medium text-neutral-900 dark:text-neutral-100">
                  {post.metadata.title}
                </p>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
                  {post.metadata.summary}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
