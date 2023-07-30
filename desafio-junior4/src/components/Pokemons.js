import React from "react";


const Pokemons = props => {
    
    return(
        <section>
            <ul>
                <li>{props.pokemon.name}</li>
                <li>{props.pokemon.base_experience}</li>
            </ul>
        </section>
    )
}

export default Pokemons;