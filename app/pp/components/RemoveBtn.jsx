'use client'
import { useRouter } from 'next/navigation'

import { HiOutlineTrash } from 'react-icons/hi'
export default function RemoveBtn({ id }) {
  const router = useRouter()
  const removeTopic = async () => {
    const confirmed = confirm(`정말로 삭제하시겠습니까? ${id}?`)
    if (confirmed) {
      const res = await fetch(`/pp/api/topics?id=${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        router.refresh()
      }
    }
  }
  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  )
}
