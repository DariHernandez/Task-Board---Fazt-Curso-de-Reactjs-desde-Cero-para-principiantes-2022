import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import './index.css'

import { TaskContextProvider } from './context/TaskContext'

const root = ReactDom.createRoot(document.querySelector('#root'))

root.render(
    <React.StrictMode>
        {/* Encapsulate the app in the context */}
        <TaskContextProvider>
            <App />
        </TaskContextProvider>
    </React.StrictMode>
)
