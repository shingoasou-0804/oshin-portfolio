import React from 'react'
import { BsArrowUpSquareFill } from 'react-icons/bs'

function TopButton() {
  return (
    <div>
      <a href='#home'>
        <BsArrowUpSquareFill className='text-cadetblue shadow-md' size={40}/>
      </a>
    </div>
  )
}

export default TopButton
