'use client'

import Image from 'next/image'
import Link from 'next/link'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { SimplePokemon } from '..'
import { PokemonsContext } from '@/contexts/pokemons'
import { useContext, useMemo } from 'react'


interface Props {
  pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {

  const { favoritesPokemons, toggleFavorite } = useContext(PokemonsContext)
  const newPokemon = useMemo(() => favoritesPokemons.find(poke => poke.id === pokemon.id), [favoritesPokemons, pokemon])

  return (
    <div className='mt-2 w-60'>
      <div className='bg-white rounded overflow-hidden shadow-lg'>
        <div className='flex flex-col items-center text-center p-6 bg-gray-800 border-b'>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemon.id }.svg`}
            height={100}
            width={100}
            alt={ pokemon.name }
            priority={ false }
          />
          <p className='pt-2 text-lg font-semibold text-gray-50 capitalize'>{ pokemon.name }</p>
          <div className='mt-5'>
            <Link href={`/dashboard/pokemons/${ pokemon.name }`} className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'>Más Información</Link>
          </div>
        </div>
        <div className='border-b cursor-pointer' onClick={ () => toggleFavorite(pokemon) }>
          <Link href='' className='px-4 py-2 hover:bg-gray-100 flex items-center'>
            <div className='text-red-600'>
              {
                newPokemon
                ? <IoHeart />
                : <IoHeartOutline />
              }
            </div>
            <div className='pl-3'>
              {
                newPokemon
                ?  <p className='text-sm font-medium text-gray-800 leading-none'>Es favorito</p>
                :  <p className='text-sm font-medium text-gray-800 leading-none'>Agregar a favorito</p>
              }
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
