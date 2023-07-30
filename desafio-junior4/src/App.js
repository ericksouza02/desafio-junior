import React, { useEffect, useState } from 'react';
import './App.css'
//import Pokemons from './components/Pokemons';
/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência

Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id


DICA:
imagem => sprites.front_default
experiência => base_experience

EXTRA: se puder ordene por nome.
*/

function App() {
  const [count, setCount] = useState(0);
  const [pokemans, setPokemans] = useState([])
  
  const url = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(()=>{
    fetch(url)
    .then(resp => resp.json())
    .then(dados => {

        const sortedArray = [...dados.results]

        sortedArray.sort((a,b) => {

          return a.name.localeCompare(b.name)

        })
        setPokemans(sortedArray) 
       })
  })

  return (
      <>
      <h3>desafio fernandev</h3>
      <h1>consumir api pokémon</h1>
      {pokemans.map(pokemon=>(
        <Pokemon key={pokemon.name} data={pokemon}/>
      ))}
    </>
  );
}
const Pokemon = ({data}) => {
  const [details, setDetails] = useState(null)
  
  fetch(data.url)
  .then(resp=>resp.json())
  .then(dados=> setDetails(dados))



  if(details === null){
    return <div>-</div>
  }


  return( <div className='pokemon--window'>
            
            <div className='pokemon--img'>
              <img src={details.sprites.front_default}/>
            </div>

            <div className='pokemons--info'>
              <span className='pokemon--name'>{details.name}</span> EXP: {details.base_experience} 
            </div>
          </div>
  )
}

export default App;
