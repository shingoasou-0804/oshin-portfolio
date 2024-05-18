import React from 'react'
import Image from 'next/image'
import { AiFillGithub } from 'react-icons/ai'
import { FaDev } from 'react-icons/fa'

function SideMenu() {
  return (
    <section>
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
