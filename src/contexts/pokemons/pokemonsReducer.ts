import { SimplePokemon } from '@/pokemons'
import { PokemonsState } from './PokemonsProvider'

type PokemonsActionType =
| { type: 'Counter - AddOne' }
| { type: 'Counter - RestOne' }
| { type: 'Counter - Reset', payload: number }
| { type: 'Counter - Init', payload: number }
| { type: 'Pokemon - Toggle Favorite', payload: SimplePokemon[] }
| { type: 'Pokemon - Set Favorites', payload: SimplePokemon[] }


export const pokemonsReducer = ( state: PokemonsState, action: PokemonsActionType ): PokemonsState => {
  switch (action.type) {
    case 'Counter - AddOne':
      return {
        ...state,
        count: state.count + 1
      };
    case 'Counter - RestOne':
      if (state.count < 0) {
        return {
          ...state,
          count: 0
        }
      }
      return {
        ...state,
        count: state.count - 1
      };
    case 'Counter - Reset':
      return {
        ...state,
        count: action.payload
      };
    case 'Counter - Init':
      if (state.isReady === true) return state;
      return {
        ...state,
        count: action.payload,
        isReady: true
      };

    case 'Pokemon - Toggle Favorite':
      return {
        ...state,
        favoritesPokemons: action.payload
      }
    case 'Pokemon - Set Favorites':
      return {
        ...state,
        favoritesPokemons: action.payload
      }
    default:
      return state;
    }
}