import Image from 'next/image'
import Link from 'next/link'
import Button from 'components/Button'

const Pokemon = ( { data } ) => {
    console.log(data)
    return (
        <div>
            <h1 className="centrar">{data.name} numero #{data.id}</h1>
            <Image src={data.sprites.front_default} width={400} height={400} alt={data.name} style={{ display: 'block', margin: 'auto' }}/>
            <h2 className="centrar">Habilidades</h2>
            <p className="centrar">{data.abilities[0].ability.name}</p>
            <p className="centrar">{data.abilities[1].ability.name}</p>
            <Link href="/">
                <Button>
                    Volver al Inicio
                </Button>
            </Link>
        </div>
    )
}

export default Pokemon

export const getServerSideProps = async ({ params }) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await res.json()

    return{
        props: { data }
    }
}