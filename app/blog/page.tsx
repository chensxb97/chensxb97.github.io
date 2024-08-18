import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'My Blog Page',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-6 text-2xl font-medium tracking-tighter">my blog 🖊️</h1>
      <BlogPosts />
    </section>
  )
}
