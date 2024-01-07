'use client'

import { useContext } from 'react'
import { PokemonsContext } from '@/contexts/pokemons'
import { PokemonGrid } from '..'
import { IoHeart } from 'react-icons/io5'

export const PokemonFavorites = () => {

  const { favoritesPokemons } = useContext(PokemonsContext)

  return (
    favoritesPokemons.length === 0
      ? <NoFavorites />
      : <PokemonGrid pokemons={ favoritesPokemons } />
  )
}

export const NoFavorites = () => {
  return (
    <div className='flex flex-col h-[50vh] items-center justify-center'>
      <IoHeart size={ 100 } className=' text-red-500' />
      <p className='text-2xl text-gray-500'>No hay Pokemons Favoritos</p>
    </div>
  )
}
