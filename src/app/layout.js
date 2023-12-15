import { Inter } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DrippyhippiebyNikki',
  description: 'Art and jewlery for sale by Nikki-marie',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gradient-to-r from-zinc-800 to-green-200" ${inter.className}`}>
        <Theme appearance="light" accentColor="amber" grayColor="slate" panelBackground="solid" scaling="90%">
          {children}
        </Theme>
        </body>
    </html>
  )
}
