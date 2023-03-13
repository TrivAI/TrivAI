import './globals.css'
import { Roboto } from '@next/font/google';
import Nav from './components/Nav';
import Footer from './components/Footer';


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
    <html className={roboto.className + " lg:h-full"} lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className=" flex flex-col coolBackground" data-atr="this is the body">
          
          <Nav />
          <div className="h-[150vh] lg:h-auto">{children}</div>
          <Footer />
      </body>
    </html>
  )
}
