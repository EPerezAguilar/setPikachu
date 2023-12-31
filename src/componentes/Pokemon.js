import React, { useEffect, useState } from "react";

function Pokemon() {

    const [pokemon, setPokemon] = useState();
    const [id, setId] = useState(1)
    console.log(id)
    

    useEffect(() =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setPokemon(data);
                
            })
    }, [id])

    const handleAnterior = () =>{
        setId  (id -1 );
    }

    const handleSigiente = () =>{
        setId  (id +1 );
    }
    
    return(
        <div>{
                pokemon && 
                <div>
                    <h1>{ pokemon.name}</h1>
                    <img src= {pokemon.sprites.front_default} alt ={pokemon.name}/>
                
                </div>
            }
            {
                id > 1 ?  <button onClick={handleAnterior}>Anterior</button> : <button disabled> Anterior</button>
            }
            <button onClick={handleSigiente}>Siguiente</button>
            
        </div>
        
    )
}

export default Pokemon;