import Repo from '@/components/Repo'
import RepoDirs from '@/components/RepoDirs'
import Link from 'next/link'
import { Suspense } from 'react'

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="flex flex-col items-col max-w-lg">
      <Link
        href="/repos"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        레포지토리로 돌아가기
      </Link>

      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>

      <Link
        href="https://hcj2-clerk2.vercel.app/"
        className="text-xl text-blue-700 font-bold"
      >
        clerk2 실습
      </Link>
      <p className="mb-2 text-green-800">
        클릭시 해당 실습내용이 담긴 링크로 이동
      </p>
    </div>
  )
}
export default RepoPage
