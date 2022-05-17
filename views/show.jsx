import React from 'react'

const Show = ({ pokemon }) => {
    const headerStyle = { padding: '2rem', backgroundColor: '#282c34', color: '#fff', fontWeight: 'bold' };
    const listElementStyle = { 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }

    return (
        <div>
            <h1 style={headerStyle}>Gotta Catch 'Em All!</h1>
            <h2>{ pokemon.name }</h2>
            <img src={pokemon.img} alt="pokemon" />
            <a href="/pokemon">Back</a>
        </div>
    )
}

export default Show