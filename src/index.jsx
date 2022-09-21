// Import react modules
import React, {useState, useEffect} from 'react'
import ReactDom from 'react-dom/client'

// Get root tag from html
const root = ReactDom.createRoot(document.querySelector('#root'))

function Counter() {

    // Get state variables and the update functions
    const [ counter, setCounter ] = useState(0)
    const [ text, setText ] = useState('')

    // Funtion to run only when specific state change
    useEffect (() => {
        console.log ("Input updated")
    }, [text])

    return (
        <>
            {/* Display counter */}
            <h1>Counter: {counter}</h1>

            <button onClick={() => {
                // Update counter with update function
                setCounter (counter + 1)
            }}>
                Incress
            </button>

            <hr />

            <input onChange={(e) => {
                setText (e.target.value)
            }}/>
        </>
    )
}

root.render(
    <>
        <Counter/>
    </>
)
