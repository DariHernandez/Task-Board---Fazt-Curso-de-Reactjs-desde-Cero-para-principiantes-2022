// Import react modules
import React from 'react'
import ReactDom from 'react-dom/client'

// Get root tag from html
const root = ReactDom.createRoot (document.querySelector ("#root"))

// Content inside the root
root.render (<h1>Hello World</h1>)