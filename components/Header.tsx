import Link from 'next/link'
import React from 'react'
import Avatar from './Avatar'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <header className='bg-white shadow-sm text-gray-800 flex justify-between p-5'>
      <Link href='/'className='flex items-center font-thin text-4xl '>
        <Avatar 
          seed='Maia Support Agent'
        />
        <div className='space-y-1 ml-2'>
          <h1>Assistly</h1>
          <h2 className='text-sm'>Your Customisable AI Chat Agent</h2>
        </div>
      </Link>

      <div className='flex items-center'>
          <SignedIn>
            <UserButton showName/>
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
      </div>
    </header>
  )
}

export default Header