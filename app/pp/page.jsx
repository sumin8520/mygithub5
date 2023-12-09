import TopicList from '@/app/pp/components/TopicList'
export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">환영합니다</h1>
      <p className="mb-4">아무글이나 적어보세요!</p>
      <TopicList />
    </>
  )
}
