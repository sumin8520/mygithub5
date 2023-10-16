import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'

const Header = () => {
  const { userId } = auth()

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
            {!userId ? (
              <>
                <Link
                  href="/sign-in"
                  className="text-green-300 hover:text-white mr-4"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="text-green-300 hover:text-white mr-4"
                >
                  Sign Up
                </Link>
              </>
            ) : (
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
                  href="https://mygithub5-6q64.vercel.app/dashboard"
                  className="text-yellow-300 hover:text-white mr-4"
                >
                  자기소개
                </Link>
                <Link
                  href="/profile"
                  className="text-yellow-300 hover:text-white mr-4"
                >
                  프로필
                </Link>
                <div className="ml-auto">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
export default Header
