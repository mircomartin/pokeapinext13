'use client'

import { useReducer } from 'react';
import { PokemonsContext, pokemonsReducer } from './';

export interface PokemonsState {
}

const POKEMONS_INITIAL_STATE: PokemonsState = {
}

export const PokemonsProvider = ({ children }: { children: React.ReactNode }) => {

const [state, dispatch] = useReducer(pokemonsReducer , POKEMONS_INITIAL_STATE)

  return (
    <PokemonsContext.Provider value={{
      ...state
    }}>
      { children }
    </PokemonsContext.Provider>
  )
}