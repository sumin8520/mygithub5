import EditTopicForm from '@/app/pp/components/EditTopicForm'
const getTopicById = async (id) => {
  try {
    const res = await fetch(
      `https://mygithub5-6q64.vercel.app/pp/api/topics/${id}`,
      {
        cache: 'no-store',
      }
    )
    if (!res.ok) {
      throw new Error('Failed to fetch topic.')
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}
export default async function EditTopic({ params }) {
  const { id } = params
  const { topic } = await getTopicById(id)
  const { title, description } = topic
  return <EditTopicForm id={id} title={title} description={description} />
}
