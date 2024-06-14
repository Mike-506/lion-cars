import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lion Cars',
  description: 'Here are some of my favorite cars, you will find photos and info about each',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body className={inter.className} >

        <NavBar />

          <div className='p-5 md:px-20 md:py-12 flex justify-center items-center'>
            {children}
          </div>

        <Footer />

        </body>
    </html>
  )
}

