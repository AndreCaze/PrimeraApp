import React, { useState } from 'react'
import PropTypes from 'prop-types';
useState

export const Contador = ({contador}) => {

    const [valor, setValor] = useState(contador)

    const handleAdd = (event) => {
       setValor(valor+1)
    }

    const handleMinus = (event) => {
        setValor(valor-1)
     }

     const handleReset = (event) => {
        setValor(contador)
     }

  return (
    <div>
        <h1>Contador App</h1>
        <h2>Contador = {valor}</h2>

        <button onClick={handleAdd} >
            +1
        </button>
        <button onClick={handleMinus} >
            -1
        </button>
        <button onClick={handleReset} >
            Reset
        </button>
    </div>
  )
}

Contador.propTypes = {
    contador: PropTypes.number.isRequired,
}

export default Contador