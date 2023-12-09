'use client'
import Courses from '@/app/components/courses/Courses'
import { useState, useEffect } from 'react'
import LoadingPage from '../loading'
import CourseSearch from '@/app/components/courses/CourseSearch'
import { CiForkAndKnife } from 'react-icons/ci'
import Link from 'next/link'

const CoursesPage = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses')
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    }

    fetchCourses()
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <div className="text-center flex flex-col items-center">
      <Link href="/courses">
        <h1 className="text-5xl font-bold mb-7 mt-8 flex items-center">
          Food Search<CiForkAndKnife></CiForkAndKnife>
        </h1>
      </Link>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </div>
  )
}
export default CoursesPage
