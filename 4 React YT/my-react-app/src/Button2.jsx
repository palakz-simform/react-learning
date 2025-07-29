// inline css style
import React from 'react'

function Button2() {
    const styles={
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px',
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer'
    }
    return (
        <button style={styles}>Hello</button>
      )
}

export default Button2
