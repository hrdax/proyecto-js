const Pokemon = ({ pokemon }) => {
  return (
    <li>
      {pokemon.name}
    </li>
  )
}

export default function Pokemones({ pokemones }) {
  return (
    <div>
      <p>Pokemones</p>
      <ul>
        {pokemones.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name} />)}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await res.json()
  return {
    props: { pokemones: data.results }
  }
}