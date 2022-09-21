// Import react modules
import React from 'react'
import ReactDom from 'react-dom/client'

// Import components
import { Sample } from './Sample'
import { Button } from './Button'
import { TaskCard } from './Task'
import { GreatingClass } from './Greeting'
import { Posts } from './Posts'

// Get root tag from html
const root = ReactDom.createRoot(document.querySelector('#root'))

const users = [
    {
        id: 1,
        name: 'dari dev',
        image: 'https://robohash.org/dari%20dev',
    },
    {
        id: 2,
        name: 'user 1',
        image: 'https://robohash.org/user%201',
    },
]

// Content inside the root
root.render(
    <>
        {/* Loop for each user */}
        {users.map((user) => {
            return (
                // react list element identifier
                <div key={user.id}>
                    {/* Use array elements */}
                    <h1>User name: {user.name}</h1>
                    <img src={user.image} />
                    
                </div>
            )
        })}
    </>
)
