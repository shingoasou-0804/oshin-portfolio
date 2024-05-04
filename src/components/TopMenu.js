import Link from 'next/link'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RiMenu3Fill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'

function TopMenu() {
  return (
    <section>
      <div>
        <div>
          <Link href={'/'}>
            <h1>Oshin portfolio</h1>
          </Link>
          <div>
            <AiOutlineClose />
          </div>
        </div>
        <div>
          <div>
            <MdEmail />
            <span>oshin-drone@gmail.com</span>
          </div>
          <button>
            資料ダウンロード
          </button>
        </div>
      </div>
    </section>
  )
}

export default TopMenu
