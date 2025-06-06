import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <div className="mb-4">
        <div className="flex mb-4">
          <Image
            src="/profile.png"
            alt="Profile picture"
            width={250}
            height={400}
            className="rounded rounded-xl"
          />
        </div>
        <h1 className="mb-4 text-2xl font-medium tracking-tighter">
          hi there, I'm Benedict 👨‍💻
        </h1>
        <div className="text-l dark:text-neutral-300">
          <p className="mb-4">
            I am a software engineer, rock-climber and coffee-lover.
          </p>
          <p className="mb-4">
            Today, I am proud to be part of the Observability team in <a rel="noopener noreferrer" target='_blank' href='https://www.visa.com.sg/' className="link">
              Visa</a> where I design and implement solutions to support monitoring and logging at scale.
          </p>
        </div>
      </div>
      <div className="text-l dark:text-neutral-300">
        <p className="mb-4">
          I mostly use Javascript, Go, and Python for <Link
            key="/work"
            href="/work"
            className="link"
          >work</Link>. During my spare time, I like to explore <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/chensxb97"
            className="link">
            side projects
          </a> and, occasionally, document personal experiences, thoughts and learnings in my <Link
            key="/blog"
            href="/blog"
            className="link"
          >blog</Link>.
        </p>
        <p className="mb-4">
          If you wish to reach out to me, I am happy to connect via <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/benedict-chen-1a8024189/"
            className="link">
            LinkedIn
          </a>.
        </p>
      </div>
    </section >
  )
}
