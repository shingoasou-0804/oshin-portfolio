import React from 'react'
import { AiFillBulb } from 'react-icons/ai'
import Image from 'next/image'

function Skills() {
  return (
    <section className='w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white' id='skills'>
      <div className='max-w-7xl mx-auto'>
        <div className='inline-block'>
          <p className='bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2'>
            <span><AiFillBulb className='w-4 h-4'/></span>
            使用技術
          </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 max-xs:grid-cols-1 mt-10'>
          <div className='flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center'>
            <Image
              src={'/assets/skills/terraform.png'}
              width={100}
              height={100}
              alt='terraform'
              className='mb-2'
            />
            <span>Terraform</span>
          </div>
          <div className='flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center'>
            <Image
              src={'/assets/skills/eks.png'}
              width={100}
              height={100}
              alt='eks'
              className='mb-2'
            />
            <span>Amazon EKS</span>
          </div>
            <div className='flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center'>
            <Image
              src={'/assets/skills/ecs.png'}
              width={100}
              height={100}
              alt='esc'
              className='mb-2'
            />
            <span>Amazon ECS</span>
          </div>
          <div className='flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center'>
            <Image
              src={'/assets/skills/fargate.png'}
              width={100}
              height={100}
              alt='fargate'
              className='mb-2'
            />
            <span>AWS Fargate</span>
          </div>
          <div className='flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center'>
            <Image
              src={'/assets/skills/nextjs.png'}
              width={100}
              height={100}
              alt='nextjs'
              className='mb-2'
            />
            <span>Next.js</span>
          </div>
          <div className='flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center'>
            <Image
              src={'/assets/skills/react.png'}
              width={100}
              height={100}
              alt='react'
              className='mb-2'
            />
            <span>React</span>
          </div>
          <div className='flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center'>
            <Image
              src={'/assets/skills/rails.png'}
              width={100}
              height={100}
              alt='rails'
              className='mb-2'
            />
            <span>Ruby on Rails</span>
          </div>
          <div className='flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center'>
            <Image
              src={'/assets/skills/python.png'}
              width={100}
              height={100}
              alt='fastapi'
              className='mb-2'
            />
            <span>Python(FastAPI・Django)</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
