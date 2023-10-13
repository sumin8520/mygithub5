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
    </div>
  )
}
export default RepoPage
