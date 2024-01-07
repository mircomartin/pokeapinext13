import { PokemonCard, SimplePokemon } from '..'

interface Props {
  pokemons: SimplePokemon[]
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className='flex flex-wrap gap-10 items-center'>
      {
        pokemons.map( ( pokemon: SimplePokemon ) => (
          <PokemonCard key={pokemon.id} pokemon={ pokemon } />
        ))
      }
    </div>
  )
}
