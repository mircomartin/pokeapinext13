import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons'


export const metadata = {
  title: 'Listado de Pokemons',
  description: 'Listado de todos los Pokemons',
};

const getPokemons = async ( limit = 20, offset = 0 ): Promise<SimplePokemon[]> => {
  const res = await fetch( `https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }` )
  const data: PokemonsResponse = await res.json()

  const pokemons = data.results.map( ( pokemon ) => {
    const urlParts = pokemon.url.split( '/' )
    const id = urlParts[ urlParts.length - 2 ]
    return {
      id,
      name: pokemon.name
    }
  })
  /* throw new Error('Error') */
  return pokemons
}

const PokemonsPage = async () => {
  
  const pokemons = await getPokemons(151)

  return (
    <div className='flex flex-col p-2'>

      <h3 className='text-5xl mb-5'>Listado de Pokemons <small  className='text-blue-500'>estático</small></h3>
      <PokemonGrid pokemons={ pokemons } />

    </div>
  )
}

export default PokemonsPage