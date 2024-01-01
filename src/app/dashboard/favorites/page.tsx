import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons'


export const metadata = {
  title: 'Listado de Pokemons Favoritos',
  description: 'Listado Pokemons agregados a favoritos',
};

const FavoritesPage = () => {
  
  return (
    <div className='flex flex-col p-2'>

      <h3 className='text-5xl mb-5'>Listado de Pokemons Favoritos <small className='text-blue-500'>Global State</small></h3>
      <PokemonGrid pokemons={ [] } />

    </div>
  )
}

export default FavoritesPage