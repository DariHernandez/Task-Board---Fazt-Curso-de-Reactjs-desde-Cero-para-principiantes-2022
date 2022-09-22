# 19. Split in components

Create a new component “TaskCard”, description in form, move components to “components” folder, clean form

```jsx
// data/task.js
// No changes, just moved

export const tasks = [
    {
        id: 0,
        title: 'first task',
        description: 'first task in list',
    },
    {
        id: 1,
        title: 'second task',
        description: 'second task in list',
    },
]
```

```jsx
// components/TaskCard.jsx

import React from 'react'
import PropTypes from 'prop-types'

// New component
function TaskCard({task}) {
    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
    )
}

TaskCard.propTypes = {
    task: PropTypes.object.isRequired,
}

export default TaskCard
```

```jsx
// components/TaskForm.jsx

import React from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function TaskForm({ createTask }) {
    const [title, setTitle] = useState('')

    // State for task description
    const [description, setDescription] = useState('')

    const haldeSubmit = (e) => {
        e.preventDefault()
        createTask(title, description)

        // Resetart form value
        setTitle ('')
        setDescription ('')
    }

    return (
        <form onSubmit={haldeSubmit}>
            <input
                type='text'
                placeholder='Write a task'
                onChange={(e) => setTitle(e.target.value)}
                
                // Set value with hooks, for allow cleanning
                value={title}

                // Alwais focus the input when load
                autoFocus={true}
            />

            {/* unput for task desciption */}
            <textarea
                placeholder='task description'
                onChange={(e) => setDescription(e.target.value)}

                // Set value with hooks, for allow cleanning
                value={description}
            />

            <input
                type='submit'
                value='Submit'
            />
        </form>
    )
}

TaskForm.propTypes = {
    createTask: PropTypes.func,
}

export default TaskForm
```

```jsx
// components/TaskList.jsx

import TaskCard from './TaskCard';
import PropTypes from 'prop-types'

const TaskList = ({ tasks }) => {

    if (tasks.length === 0) {
        return <h1>No tasks founds</h1>
    }

    return (
        <div>
            {tasks.map((task) => (
                // Use card component, with key send sending props
                <TaskCard task={task} key={task.id}/>
            ))}
        </div>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
}

export default TaskList
```

![Vite + React (2).gif](19%20Split%20in%20components%20e3fb51f0411c4a0f98ae9e33adcc770e/Vite__React_(2).gif)