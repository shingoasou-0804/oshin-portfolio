'use client'

import React from 'react'
import Image from 'next/image'
import { AiFillGithub } from 'react-icons/ai'
import { FaDev } from 'react-icons/fa'
import { useMenuStore } from '@/store/useMenuStore'

function SideMenu() {
  const {isOpen, closeMobileMenu} = useMenuStore()
  return (
    <section
      className={
        `${isOpen ? 'max-lg:block': 'max-md:hidden'}`
      }>
      <div>
        <Image
          src={'/assets/logo.png'}
          width={100}
          height={100}
          alt='Oshin Image'
        />
        <p>Oshin</p>
      </div>

      <div>
        <div>
          <a href=''>
            <AiFillGithub />
          </a>
          <a href=''>
            <FaDev />
          </a>
        </div>
        <p>© 2024 Oshin</p>
      </div>
    </section>
  )
}

export default SideMenu
