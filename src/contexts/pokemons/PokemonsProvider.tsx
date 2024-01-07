'use client'

import { useEffect, useReducer } from 'react';
import { PokemonsContext, pokemonsReducer } from './';
import { SimplePokemon } from '@/pokemons'

export interface PokemonsState {
  count: number;
  isReady: boolean;
  favoritesPokemons: SimplePokemon[];
}

const POKEMONS_INITIAL_STATE: PokemonsState = {
  count: 5,
  isReady: false,
  favoritesPokemons: [/* { id: '1', name: 'bulbasaur' }, { id: '4', name: 'charmander' } */]
}

export const PokemonsProvider = ({ children }: { children: React.ReactNode }) => {

  const [state, dispatch] = useReducer(pokemonsReducer , POKEMONS_INITIAL_STATE)

  useEffect(() => {
    getInitialFavorites()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addOne = () => {
    dispatch({ type: 'Counter - AddOne' })
  }
  const restOne = () => {
    dispatch({ type: 'Counter - RestOne' })
  }
  const resetCounter = (value: number) => {
    dispatch({ type: 'Counter - Reset', payload: value })
  }
  const initCounterState = (value: number) => {
    dispatch({ type: 'Counter - Init', payload: value })
  }
  const toggleFavorite = (pokemon: SimplePokemon) => {

    const isFavorite = state.favoritesPokemons.find(poke => poke.id === pokemon.id)
    let newFavorites: SimplePokemon[] = []

    if (isFavorite) {
      newFavorites = state.favoritesPokemons.filter(poke => poke.id !== pokemon.id)
    } else {
      newFavorites = [...state.favoritesPokemons, pokemon]
    }

    dispatch({ type: 'Pokemon - Toggle Favorite', payload: newFavorites })

    localStorage.setItem('favoritesPokemons', JSON.stringify(newFavorites))

  }
  const getInitialFavorites = (): void => {
    const favoritesPokemons = JSON.parse( localStorage.getItem('favoritesPokemons') ?? '[]' )
    dispatch({ type: 'Pokemon - Set Favorites', payload: favoritesPokemons })
  }

  return (
    <PokemonsContext.Provider value={{
      ...state,

      //Methods
      addOne,
      restOne,
      resetCounter,
      initCounterState,
      toggleFavorite,
      getInitialFavorites
    }}>
      { children }
    </PokemonsContext.Provider>
  )
}