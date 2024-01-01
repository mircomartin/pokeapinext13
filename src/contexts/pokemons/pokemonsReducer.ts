import { PokemonsState } from './PokemonsProvider'

type PokemonsActionType =
| { type: 'Pokemons - ActionName' }

export const pokemonsReducer = ( state: PokemonsState, action: PokemonsActionType ): PokemonsState => {
  switch (action.type) {
    case 'Pokemons - ActionName':
      return {
        ...state,
      };
    default:
      return state;
    }
}