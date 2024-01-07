'use client'

import { SimplePokemon } from '@/pokemons'
import { createContext } from 'react';

interface ContextProps {
  isReady: boolean;
  favoritesPokemons: SimplePokemon[];

  //Methods
  addOne: () => void;
  restOne: () => void;
  resetCounter: (value: number) => void;
  initCounterState: (value: number) => void;
  toggleFavorite: (pokemon: SimplePokemon) => void;
  getInitialFavorites: () => void;
}

export const PokemonsContext = createContext({} as ContextProps )