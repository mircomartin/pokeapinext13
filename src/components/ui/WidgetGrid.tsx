'use client'

import { useContext } from 'react'
import { IoCafeOutline } from 'react-icons/io5'
import { SimpleWidget } from '..'
import { PokemonsContext } from '@/contexts/pokemons'

export const WidgetGrid = () => {

  const { count } = useContext(PokemonsContext)

  return (
    <div className='flex flex-wrap p-2 justify-center items-center gap-5'>
      <SimpleWidget title={ count } href='/dashboard/counter' icon={<IoCafeOutline size={ 50 } />} label='Es el label' subTitle='Test subtitle' />
    </div>
  )
}
