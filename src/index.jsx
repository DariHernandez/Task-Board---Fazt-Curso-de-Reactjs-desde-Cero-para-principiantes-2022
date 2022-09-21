// Import react modules
import React from 'react'
import ReactDom from 'react-dom/client'

// Import components
import { Sample } from './Sample'
import {Button} from './Button'
import {TaskCard} from "./Task"
import {GreatingClass} from './Greeting'

// Get root tag from html
const root = ReactDom.createRoot(document.querySelector('#root'))

// Content inside the root
root.render(
    <>
        <Button text="click me" />
    </>
)
