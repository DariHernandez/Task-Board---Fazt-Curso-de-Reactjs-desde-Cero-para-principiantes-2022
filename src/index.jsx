// Import react modules
import React from 'react'
import ReactDom from 'react-dom/client'

// Import components
import { Sample } from './Sample'
import {Button} from './Button'
import {TaskCard} from "./Task"

// Get root tag from html
const root = ReactDom.createRoot(document.querySelector('#root'))

// Content inside the root
root.render(
    <>
        <TaskCard ready={true}/>
        <TaskCard ready={false}/>
    </>
)
