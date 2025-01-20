import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <h1 className="mb-6 text-2xl font-medium tracking-tighter">
        hi there, I'm Benedict 👨‍💻
      </h1>
      <div className="text-l dark:text-neutral-300">
        <p className="mb-4">
          I am a software engineer, rock-climber and coffee-lover.
        </p>
        <p className="mb-4">
          Today, I am proud to be part of the Observability team in <a rel="noopener noreferrer" target='_blank' href='https://www.visa.com.sg/' style={{ color: '#91e8ff' }}>
            Visa Inc</a> where I design and implement solutions to support monitoring and logging at scale.
        </p>
        <p className="mb-4">
          I mostly use React, Go and Python for <Link
            key="/work"
            href="/work"
            style={{ color: '#91e8ff' }}
          >work</Link>. When I have spare time, I love to explore new technologies and learnings through <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/chensxb97"
            style={{ color: '#91e8ff' }}>
            side projects
          </a> and document them in <Link
            key="/blog"
            href="/blog"
            style={{ color: '#91e8ff' }}
          >blogs</Link>.
        </p>
        <p className="mb-4">
          If you wish to reach out, the best way to do so is through <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/benedict-chen-1a8024189/"
            style={{ color: '#91e8ff' }}>
            LinkedIn
          </a>.
        </p>
      </div>
    </section >
  )
}
