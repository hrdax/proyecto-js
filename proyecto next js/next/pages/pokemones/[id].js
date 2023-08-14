import Image from 'next/image'
import Link from 'next/link'

const Pokemon = ( { data } ) => {

    return (
        <div>
            <h1>{data.name} numero #{data.id}</h1>
            <Image src={data.sprites.front_default} width={400} height={400} alt={data.name}/>
            <Link href="/">Volver al Inicio</Link>
        </div>
    )
}

export default Pokemon

export const getServerSideProps = async ({ params }) => {
    console.log(params)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await res.json()

    return{
        props: { data }
    }
}