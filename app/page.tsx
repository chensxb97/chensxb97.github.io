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
          Today, I work as a full-stack developer at <a rel="noopener noreferrer" target='_blank' href='https://www.visa.com.sg/' style={{ color: '#91e8ff' }}>
            Visa Inc</a>.
          As part of the Observability team, I design and implement new solutions to support infrastructure monitoring and logging.
        </p>
        <p className="mb-4">
          I mostly use React, Golang and Python for my work and side projects.
        </p>
        <p className="mb-4">
          The best way to reach out to me is through <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/benedict-chen-1a8024189/"
            style={{ color: '#91e8ff' }}>
            LinkedIn
          </a>.
          Additionally, feel free to explore my  <Link
            key="/work"
            href="/work"
            style={{ color: '#91e8ff' }}
          >
            work
          </Link> and <Link
            key="/blog"
            href="/blog"
            style={{ color: '#91e8ff' }}
          >
            blog posts
          </Link>.
        </p >
      </div>
    </section >
  )
}
