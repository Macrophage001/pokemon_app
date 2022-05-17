import React from 'react'

const Index = (props) => {
    const pageStyle = {
        padding: '1rem',
        backgroundColor: '#282c34'
    }
    const headerStyle = {
        color: '#fff',
        fontWeight: 'bold'
    }
    return (
        <div style={pageStyle}>
            <h1 style={headerStyle}>Pokedex - See all our Pokemon!</h1>
        </div>
    )
}

export default Index