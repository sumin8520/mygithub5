'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function AddTopic() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title || !description) {
      alert('Title and description are required.')
    }
    try {
      const res = await fetch('http://localhost:3000/pp/api/topics', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      })
      if (res.ok) {
        router.push('/pp')
        router.refresh()
      } else {
        throw new Error('Failed to create a topic')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 p-4"
        type="text"
        placeholder="제목"
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 p-4 h-32"
        type="text"
        placeholder="글 내용"
      />
      <button
        type="submit"
        className="bg-green-800 text-white font-bold px-6 py-3 w-fit rounded-md"
      >
        완료
      </button>
    </form>
  )
}
