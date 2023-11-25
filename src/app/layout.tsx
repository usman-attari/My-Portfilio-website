
import Navbar from './Component/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Footer from './Component/footer'





const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
