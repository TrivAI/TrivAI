import './globals.css'
import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={roboto.className} lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="h-screen flex flex-col">
        <nav className='flex flex-col items-center justify-center my-4 lg:flex-row lg:flex lg:items-center lg:flex-wrap lg:justify-between lg:mx-4'>
          <Link className="coolText text-3xl" href="/"><b>Welcome to TrivAI</b></Link>
          <div className='flex flex-row space-x-4 mb-2 lg:mb-0'>
            <Link className="text-black bg-[#DD7DFF]" href="/quiz"><b>Quiz Page</b></Link>
            <Link className="text-black bg-[#88FF8A]" href="/about"><b>About Page</b></Link>
            <Link className="text-black bg-[#f4b709]" href="/settings"><b>Settings Page</b></Link>
          </div>
        </nav>
        {children}
        <footer className="flex justify-end items-center">
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={90}
            height={30}
            priority
          />
          <div className={styles.thirteen}>
            <Image src="/thirteen.svg" alt="13" width={20} height={20} priority />
          </div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={500}
                priority
              />
            </a>
        </footer>

      </body>
    </html>
  )
}
