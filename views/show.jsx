import React from 'react'

const Show = ({ pokemon }) => {
    const headerStyle = { padding: '2rem', backgroundColor: '#282c34', color: '#fff', fontWeight: 'bold' };
    const listElementStyle = { 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }

    pokemon.forEach(p => {
        p.name = p.name[0].toUpperCase() + p.name.slice(1);
    });

    return (
        <div>
            <h1 style={headerStyle}>Pokedex - See all our Pokemon!</h1>
            <ul>
                {pokemon.map((p, i) => <li style={listElementStyle}><h2>{p.name}</h2><img src={p.img} alt="pokemon" width={'25vw'} height={'25vh'}/> <a href={`/pokemon/${i}`}>Show More...</a> </li> )}
            </ul>
        </div>
    )
}

export default Show