import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DrippyhippiebyNikki',
  description: 'Art and jewlery for sale by Nikki-marie',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body class="bg-gradient-to-r from-zinc-800 to-slate-50" className={inter.className}>{children}</body>
    </html>
  )
}
