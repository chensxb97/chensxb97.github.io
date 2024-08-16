import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'my blog',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-6 tracking-tighter">my blog 🖊️</h1>
      <BlogPosts />
    </section>
  )
}
