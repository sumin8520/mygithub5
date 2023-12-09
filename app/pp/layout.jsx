import Navbar from '@/app/pp/components/Navbar'
import '@/app/globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'MongoDB CRUD',
  description: 'Create, Read, Update, Delete in MongoDB',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-5x2 p-4">
          <Navbar />
          <div className="mt-9">{children}</div>
        </div>
      </body>
    </html>
  )
}
