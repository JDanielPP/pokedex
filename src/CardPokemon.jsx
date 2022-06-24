import React from 'react'

const CardPokemon = ({id, image, name, tipo, altura, habilidad }) => {
    
    return (
        <div className="thumb-container">
            <div className="number"><small>{id}</small></div>
            <img src={image} alt={name} />
            <p>Tipo:  {tipo}</p>
            <p> altura:{altura}</p>
            <p>habilidad:{habilidad}</p>
            <h3>{name}</h3>
        </div>
    )
}

export default CardPokemon