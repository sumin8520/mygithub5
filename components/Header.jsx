import Link from 'next/link'

const Header = () => {
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
                href="/dashboard"
                className="text-yellow-300 hover:text-white mr-4"
              >
                포토폴리오
              </Link>
              <div className="ml-auto"></div>
            </>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Header
