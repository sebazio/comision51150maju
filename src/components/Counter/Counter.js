import { useState } from 'react'
import Button from '../Button/Button'

const Counter = ({ title, initial, stock }) => {
    const [count, setCount] = useState(initial)
    const [message, setMessage] = useState('')

    console.log('render de Counter')

    // const decrement = () => {
    //     setMessage('')
    //     if(count > 1) {
    //         setCount(count - 1)
    //     } else {
    //         setMessage('No puede comprar menos de 1')
    //     }
    // }

    // const increment = () => {
    //     setMessage('')
    //     if(count < stock) {
    //         setCount(count + 1)
    //     } else {
    //         setMessage('No puede agregar mas productos')
    //     }
    // }

    // const reset = () => {
    //     setCount(initial)
    //     setMessage('')
    // }
    const increment = () => {
        setCount(count + 1)
        console.log(count)
    }

    return (
        <div>
            <h1>{title}</h1>
            <h2>{count}</h2>
            <h3>Cantidad disponible: {stock}</h3>
            {/* <Button label="restar" handleClick={decrement}/> */}
            <Button label="sumar" handleClick={increment}/>
            {/* <Button label="reiniciar" handleClick={reset}/> */}
            {/* <button onClick={decrement}>restar</button>
            <button onClick={increment}>sumar</button>
            <button onClick={reset}>reiniciar</button> */}
            <h2 style={{color: 'red'}}>{message}</h2>
        </div>
    )
}

export default Counter