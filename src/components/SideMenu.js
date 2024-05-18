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
        ` fixed left-0 top-0 z-50 flex h-screen max-w-[300px] flex-col justify-between py-10 px-[20px] lg:px-[80px] max-lg:max-w-[146px] bg-white border-r
        ${isOpen ? 'max-lg:block': 'max-md:hidden'}`
      }
    >
      <div className='flex w-full flex-1 flex-col gap-10 justify-between items-center'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <Image
            src={'/assets/logo.png'}
            width={100}
            height={100}
            alt='Oshin Image'
          />
          <p className='font-bold text-darkblue'>Oshin</p>
        </div>
        <div className='flex flex-col items-center justify-center text-center'>
          <div className='flex flex-col lg:flex-row item-center gap-4 mb-3'>
            <a href='' target='_blank' className='bg-darkblue p-2 rounded-full cursor-pointer hover:bg-darkblue/75 text-white'>
              <AiFillGithub />
            </a>
            <a href='' target='_blank' className='bg-darkblue p-2 rounded-full cursor-pointer hover:bg-darkblue/75 text-white'>
              <FaDev />
            </a>
          </div>
          <p className='max-lg:hidden'>© 2024 Oshin</p>
        </div>
      </div>
    </section>
  )
}

export default SideMenu
