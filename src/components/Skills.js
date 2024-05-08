import React from 'react'
import { AiFillBulb } from 'react-icons/ai'
import Image from 'next/image'

function Skills() {
  return (
    <section>
      <div>
        <div>
          <p>
            <span><AiFillBulb /></span>
            使用言語
          </p>
        </div>
        <div>
          <div>
            <Image
              src={'/assets/skills/terraform.png'}
              width={100}
              height={100}
              alt='terraform'
            />
            <span>Terraform</span>
          </div>
          <div>
            <Image
              src={'/assets/skills/eks.png'}
              width={100}
              height={100}
              alt='eks'
            />
            <span>Amazon EKS</span>
          </div>
            <div>
            <Image
              src={'/assets/skills/ecs.png'}
              width={100}
              height={100}
              alt='esc'
            />
            <span>Amazon ECS</span>
          </div>
          <div>
            <Image
              src={'/assets/skills/fargate.png'}
              width={100}
              height={100}
              alt='fargate'
            />
            <span>AWS Fargate</span>
          </div>
          <div>
            <Image
              src={'/assets/skills/nextjs.png'}
              width={100}
              height={100}
              alt='nextjs'
            />
            <span>Next.js</span>
          </div>
          <div>
            <Image
              src={'/assets/skills/react.png'}
              width={100}
              height={100}
              alt='react'
            />
            <span>React</span>
          </div>
          <div>
            <Image
              src={'/assets/skills/rails.png'}
              width={100}
              height={100}
              alt='rails'
            />
            <span>Ruby on Rails</span>
          </div>
          <div>
            <Image
              src={'/assets/skills/fastapi.png'}
              width={100}
              height={100}
              alt='fastapi'
            />
            <span>FastAPI</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
