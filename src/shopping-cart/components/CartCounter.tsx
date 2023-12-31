'use client'

import { useState } from 'react'

interface Props {
  value: number
}

export const CartCounter = ({ value }: Props) => {

  const [count, setCount] = useState(value)
  return (
    <div className='flex flex-col items-center justify-center'>
      <span className='text-9xl'>{ count }</span>
      <div className='flex gap-2'>
        <button
          onClick={() => setCount(count - 1)}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-28 mr-2'
        >
          -1
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-28 mr-2'
        >
          +1
        </button>
      </div>
    </div>
  )
}
