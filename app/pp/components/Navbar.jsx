'use client'
import Link from 'next/link'
export default function Navbar() {
  return (
    <nav className=" bg-blue-900 py-5 px-8 flex-shrink">
      <Link
        className="bg-yellow-200 text-lg font-bold px-4 py-2 rounded-md"
        href="/pp/addTopic"
      >
        글 남기기
      </Link>
      <Link
        className="bg-yellow-200 text-lg font-bold px-4 py-2 rounded-md"
        href={'https://mygithub5-6q64.vercel.app/'}
      >
        Home
      </Link>
    </nav>
  )
}
