const Pokemon = ( { data } ) => {
    console.log(data)
    return (
        <div>
            <p>Pokemon</p>
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