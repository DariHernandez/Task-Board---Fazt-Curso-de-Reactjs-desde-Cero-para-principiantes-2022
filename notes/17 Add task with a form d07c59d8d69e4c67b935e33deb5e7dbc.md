# 17. Add task with a form

Add form and manage data from parent component

```jsx
// App.jsx

import TaskList from './TaskList'
import TaskForm from './TaskForm'

// Manage data in parent component
import { useState, useEffect } from 'react'
import { tasks as data } from './tasks'

function App() {
    // States and events for local data
    const [tasks, setTasks] = useState([])
    useEffect(() => setTasks(data), [])

    function createTask(taskTitle) {
        // Add new task to array
        setTasks([
            ...tasks,
            {
                id: tasks.length,
                title: taskTitle,
                description: 'new task',
            },
        ])
    }

    return (
        <>
            {/* Send function to add new task */}
            <TaskForm createTask={createTask} />

            {/* Send data */}
            <TaskList tasks={tasks} />
        </>
    )
}

export default App
```

```jsx
// TaskForm.jsx

import React from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function TaskForm({ createTask }) {
    const [title, setTitle] = useState('')

    const haldeSubmit = (e) => {
        // Don't submit form
        e.preventDefault()

        // Add task to list
        createTask(title)
    }

    return (
        <form onSubmit={haldeSubmit}>
            <input
                type='text'
                placeholder='Write a task'
                onChange={(e) => setTitle(e.target.value)}
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
// TaskList.jsx

import PropTypes from 'prop-types'

const TaskList = ({ tasks }) => {
    // Render where no task in list
    if (tasks.length === 0) {
        return <h1>No tasks founds</h1>
    }

    // Render each task
    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h1>{task.title}</h1>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
}

export default TaskList
```

![Vite + React (1).gif](17%20Add%20task%20with%20a%20form%20d07c59d8d69e4c67b935e33deb5e7dbc/Vite__React_(1).gif)