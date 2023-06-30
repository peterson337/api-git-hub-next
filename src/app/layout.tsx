import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Web app consultador de repositórios ',
  description: 'Web app feito com a api do github',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        {children}

      </body>
    </html>
  )
}
