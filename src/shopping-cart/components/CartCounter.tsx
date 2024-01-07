'use client'

import { useContext, useEffect } from 'react'
import { PokemonsContext } from '@/contexts/pokemons'

interface Props {
  value: number
}

interface ApiCounter {
  count: number
}

const getApiCounter = async (): Promise<ApiCounter> => {
  const res = await fetch('/api/counter')
  const data = await res.json()
  
  return data
}

export const CartCounter = ({ value }: Props) => {

  const { addOne, restOne, resetCounter, initCounterState, count } = useContext(PokemonsContext)
  
  /* useEffect(() => {
    initCounterState(value)
  }, [initCounterState, value]) */

  useEffect(() => {
    const getCounter = async () => {
      const data = await getApiCounter()
      initCounterState(data.count)
    }
    getCounter()
  }, [initCounterState])
  
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <span className='text-9xl'>{ count }</span>
      <div className='flex gap-2'>
        <button
          onClick={ restOne }
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-28 mr-2'
        >
          -1
        </button>
        <button
          onClick={ addOne }
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-28 mr-2'
        >
          +1
        </button>
      </div>
      <div>
        <button onClick={ () => resetCounter(value) } className='flex items-center justify-center p-2 rounded-xl bg-red-900 text-white hover:bg-red-600 transition-all w-28'>
          Reset
        </button>
      </div>
    </div>
  )
}
