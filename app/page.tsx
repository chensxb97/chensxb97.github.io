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
            I'm a software engineer and rock-climber who enjoys his coffee with two shots.
          </p>
          <p className="mb-4">
            Today, I am proud to be part of the observability team in <a rel="noopener noreferrer" target='_blank' href='https://www.visa.com.sg/' className="link">
              Visa</a> where I design and build solutions for monitoring applications at scale. Most of <Link
                key="/work"
                href="/work"
                className="link"
              >my work</Link> involves Javascript, Go, and Python.
          </p>
        </div>
      </div>
      <div className="text-l dark:text-neutral-300">
        <p className="mb-4">
          In my spare time, I enjoy exploring the latest technologies through <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/chensxb97"
            className="link">
            side projects
          </a>, mostly related to AI and Observability. I also like to reflect on my personal experiences, learnings and thoughts in <Link
            key="/blog"
            href="/blog"
            className="link"
          >my blog</Link>.
        </p>
        <p className="mb-4">
          If you'd like to reach out, I'm happy to connect via <a
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
