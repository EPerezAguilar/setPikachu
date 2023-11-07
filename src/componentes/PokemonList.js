
import React, { useEffect, useState } from "react";

function PokemonList() {

  const [objetList, setObjetList] = useState([]);
  const [link, setLink] = useState("https://pokeapi.co/api/v2/pokemon?limit=5offset=0")
  const [next, setNext] = useState ("");
  const [previous, setPrevious] = useState("");

  const handleAnterior = () => {
      previous && setLink(previous);
  }

  const handleSigiente = () => {
    setLink(next);
}
  console.log(objetList);
  
  useEffect(() => {
    fetch(link)
      .then((resp) => resp.json())
      .then((data) => {
        setObjetList(data);
        setNext(data.next);
        setPrevious(data.previous);


      })
  }, [link])

    

  return(

    <div>
      <h1>Hola hola</h1>
      {
        objetList.results && 
        <div>
          {objetList.results.map((pokemon) => {
            return (
              <div>{ pokemon.name }</div>
            )
          })} 

      </div>}

      
      {
        previous ?  <button onClick={handleAnterior}>Anterior</button> : <button disabled> Anterior</button>
      }
      <button onClick={handleSigiente}>Siguiente</button>
      
      
      
    </div>
    
  )
}

export default PokemonList;
