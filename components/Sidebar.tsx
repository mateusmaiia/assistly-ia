import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='bg-white p-5 text-white'>
      <ul className='gap-5 flex lg-flex-col '>
        <li className='flex-1 '>
          <Link href="/create-chatbot" className='hover:opacity-50 flex flex-c0
          ol text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#2991EE]'>Link</Link>
        </li>
        <li className='flex-1 '>
          <Link href="/view-chatbots" className='hover:opacity-50 flex flex-c0
          ol text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#2991EE]'>Link</Link>
        </li>
        <li className='flex-1 '>
          <Link href="/review-sessions" className='hover:opacity-50 flex flex-c0
          ol text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#2991EE]'>Link</Link>
        </li>
      </ul>
    </div>
  )
}
