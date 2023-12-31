import { PokemonByID } from '@/pokemons'

interface Props {
  params: {
    id: string
  }
}

const getPokemonById = async ( id: string ) => {
  const res = await fetch( `https://pokeapi.co/api/v2/pokemon/${ id }` )
  const data: PokemonByID = await res.json()
  return data
}

const PokemonPage = async ({ params }: Props) => {
  const pokemon = await getPokemonById( params.id )
  return (
    <div>
      Pokemon nº: { params.id } <br/>
      { pokemon.name }
      
    </div>
  )
}

export default PokemonPage