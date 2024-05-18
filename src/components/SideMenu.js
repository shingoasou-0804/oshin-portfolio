'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { AiFillGithub } from 'react-icons/ai'
import { FaDev } from 'react-icons/fa'
import { useMenuStore } from '@/store/useMenuStore'
import { sideMenuLinks } from '@/constants/sideMenuLinks'

function SideMenu() {
  const {isOpen, closeMobileMenu} = useMenuStore()
  const [activeLink, setActiveLink] = useState(sideMenuLinks[0])
  const handleLinkClick = (link) => {
    closeMobileMenu()
    setActiveLink(link)
  }
  const handleScroll = () => {
    const sections = sideMenuLinks.map((link) =>
      document.getElementById(link.sectionId)
    )
    const scrollPosition = window.scrollY
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i]
      if(section.offsetTop <= scrollPosition + 150) {
        setActiveLink(sideMenuLinks[i])
        break
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [isOpen])

  return (
    <section
      className={
        ` fixed left-0 top-0 z-50 flex h-screen max-w-[300px] flex-col justify-between py-10 px-[20px] lg:px-[100px] max-lg:max-w-[146px] bg-white border-r
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
        </div>
        <div>
          {
            sideMenuLinks.map((link) => {
              const isActive = activeLink === link
              return (
                <a key={link.label} href={link.route}
                  className={`
                    relative flex justify-center rounded-lg p-3
                    ${isActive ? 'bg-cadetblue text-white' : ''}
                  `}
                  onClick={() => handleLinkClick(link)}
                >
                  <p>{link.label}</p>
                </a>
              )
            })
          }
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
