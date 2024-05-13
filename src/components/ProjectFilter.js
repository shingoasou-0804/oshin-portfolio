'use client'

import React, { useEffect } from 'react'
import { projects } from '@/constants/projects'

function ProjectFilter({ activeCategory, setActiveCategory, setFiltered }) {
  useEffect(() => {
    if (activeCategory === 'all') {
      setFiltered(projects)
      return
    }
    const filterd = projects.filter((project) =>
      project.category.includes(activeCategory)
    )
    setFiltered(filterd)
  },[activeCategory,setFiltered])

  return (
    <div className='flex gap-5 my-10'>
      <button
        className={
          activeCategory == 'all'
          ? 'bg-darkblue py-1 px-3 text-white rounded-lg'
          : null
        }
        onClick={() => setActiveCategory('all')}
      >すべて</button>
      <button
        className={
          activeCategory == 'business' ? 'bg-darkblue py-1 px-3 text-white rounded-lg' : null
        }
        onClick={() => setActiveCategory('business')}
      >ビジネス</button>
      <button
        className={
          activeCategory == 'aws' ? 'bg-darkblue py-1 px-3 text-white rounded-lg' : null
        }
        onClick={() => setActiveCategory('aws')}
      >インフラ</button>
      <button
        className={
          activeCategory == 'nextjs' ? 'bg-darkblue py-1 px-3 text-white rounded-lg' : null
        }
        onClick={() => setActiveCategory('nextjs')}
      >フロントエンド</button>
      <button
        className={
          activeCategory == 'python' ? 'bg-darkblue py-1 px-3 text-white rounded-lg' : null
        }
        onClick={() => setActiveCategory('python')}
      >バックエンド</button>
    </div>
  )
}

export default ProjectFilter
