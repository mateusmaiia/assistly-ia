'use client';

import Avatar from '@/components/Avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CREATE_CHATBOT } from '@/graphql/mutations/mutations'
import { useMutation } from '@apollo/client'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'

export default function CreateChatbot() {
  const {user} = useUser()
  const [name, setName] = useState("") 
  const router = useRouter()

  const [createChatbot, {data, loading, error}] = useMutation(
    CREATE_CHATBOT, 
    {
      variables: {
        clerk_user_id: user?.id,
        name
      },
    }
  )

  async function handleSubmit(e: FormEvent ){
    e.preventDefault()

    try {
      const data = await createChatbot()

      setName("")

      router.push(`/edit-chatbot/${data.data.insertChatbots.id}`)
    } catch (error) {
      console.log(error)
    }
  }

  if(!user){
    return null
  }

  return (
    <div className='flex flex-col items-center justify-center md:flex-row md:space-x-10 bg-white p-10 rounded-md m-10'>
      <Avatar seed='create-chatbot' />
      <div >
          <h1 className='text-xl lg:text-3xl font-semibold'>Create</h1>
          <h2 className='font-light'>
            Create a new chatbot to assist you in conversations with your customers.
          </h2>
          <form className='flex flex-col md:flex-row gap-5 mt-5' onSubmit={handleSubmit}>
            <Input 
              type='text'
              className='max-w-lg'
              onChange={(e) => setName(e.target.value)}
              placeholder='Chatbot name...'
              required
              />

            <Button type='submit' disabled={loading || !name}>
              {loading ? "Craeting Chatbot..." : "Create Chatbot"}
            </Button>
        </form>
        <p className='text-gray-300 mt-5'>Example: Customer Support Chatbot</p>
      </div>
    </div>
  )
}
