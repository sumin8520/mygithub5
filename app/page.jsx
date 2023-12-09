import Link from 'next/link'
import { VscGithub } from 'react-icons/vsc'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/signIn')
  }
  return (
    <>
      <h1 className="text-4xl mb-4 font-bold text-green-800">
        <p className="text-5xl mb-1 px-10 py-5 text-black font-bold">
          <VscGithub />
        </p>
        수민의 깃허브
      </h1>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://github.com/sumin8520"
          className="text-xl text-blue-700 font-bold"
        >
          my github
        </Link>
        <p className="mb-2 text-green-800">클릭시 깃허브로 이동합니다.</p>
      </div>

      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://mygithub5-6q64.vercel.app/dashboard"
          className="text-xl text-blue-700 font-bold"
        >
          나에 대한 소개
        </Link>
        <p className="mb-2 text-green-800"> Introduce</p>
      </div>

      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://mygithub5-6q64.vercel.app/project"
          className="text-xl text-blue-700 font-bold"
        >
          Project
        </Link>
        <p className="mb-2 text-green-800"> 진행중인 프로젝트 소개</p>
      </div>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg"></div>
    </>
  )
}
