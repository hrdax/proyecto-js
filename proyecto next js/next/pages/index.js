import Link from 'next/link' 
import Button from 'components/Button'

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url.split('/').filter(x => x).pop()
  return (
    <li>
      <Link href={`pokemones/${id}`}>{pokemon.name}</Link>
      <Link href={`pokemones/${id}`}><Button>Ver Pokemon</Button></Link>
      <br/>
    </li>
  )
}

export default function Pokemones({ pokemones }) {
  return (
    <div>
      <h1 className="centrar">Pokemones</h1>
      <br/>
        <ul className="centrar">
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