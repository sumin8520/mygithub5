'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const { status, data: session } = useSession()
  return (
    <>
      <nav className="bg-blue-900 py-5 px-8">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-orange-600">My Github</div>
            </Link>
          </div>

          <div className="flex items-center font-bold">
            {status === 'authenticated' ? (
              <>
                <Link
                  href="/repos"
                  className="text-yellow-300 hover:text-white mr-4"
                >
                  나의 레포지토리
                </Link>
                <Link
                  href="/project"
                  className="text-yellow-300 hover:text-white mr-4"
                >
                  프로젝트
                </Link>
                <Link
                  href="/dashboard"
                  className="text-yellow-300 hover:text-white mr-4"
                >
                  자기소개
                </Link>
                <Link
                  href="/pp"
                  className="text-yellow-300 hover:text-white mr-4"
                >
                  글남기기
                </Link>

                <Link
                  href="/courses"
                  className="text-yellow-300 hover:text-white mr-4"
                >
                  배운것
                </Link>
                <Link
                  href="/dashboard"
                  className="text-yellow-300 hover:text-white mr-4"
                >
                  포토폴리오
                </Link>

                <button
                  onClick={() => signOut()}
                  className="bg-blue-600 hover:bg-blue-700 text-yellow-300 px-1 py-1 rounded-md text-lg font-bold"
                >
                  로그아웃
                </button>
                <div className="flex gap-2 items-center">
                  <Image
                    className="rounded-full"
                    src={session?.user?.image}
                    width={40}
                    height={40}
                    alt={session?.user?.name}
                  />
                  <span className="text-white font-bold">
                    {session?.user?.name}
                  </span>
                </div>
              </>
            ) : (
              <Link
                href="/signIn"
                className="bg-blue-600 hover:bg-blue-700 text-yellow-300 px-4 py-2 rounded-md text-lg font-bold"
              >
                로그인
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
export default Header
