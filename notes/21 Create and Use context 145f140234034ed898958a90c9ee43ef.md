# 21. Create and Use context

# createContext

Create a new “component” for save and manage the global state.

```jsx
// context/TaskContext.jsx

import { createContext, useState, useEffect } from 'react'

// Iport data
import { tasks as data } from '../data/tasks'

// Get context and set a name
export const TaskContext = createContext()

export function TaskContextProvider(props) {

    // Paste data functions from "App"
    const [tasks, setTasks] = useState([])

    function createTask(taskTitle, taskDescription) {
        const new_task = {
            id: tasks.length,
            title: taskTitle,
            description: taskDescription,
        }
        setTasks([...tasks, , new_task])
    }

    function deleteTask(taskId) {
        const taskFiltered = tasks.filter((task) => task.id !== taskId)
        setTasks(taskFiltered)
    }

    useEffect(() => setTasks(data), [])

    // return a context who encapsulate their own children
    return (
        <TaskContext.Provider
            // Set as value an object with the context data and functions
            value={{
                tasks,
                createTask,
                deleteTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContext
```

```jsx
// main.jsx

...
// Import context component
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
```

```jsx
// App.jsx

import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

// Remove data import

function App() {

    // Remove global / context functions, and data

    return (
        <>
            {/* Don't submit data to child components */}
            <TaskForm />
            <TaskList />
        </>
    )
}

export default App
```

# useContext

Get functions and data from context

```jsx
// components/TaskCard.jsx

import PropTypes from 'prop-types'
import { TaskContext } from '../context/TaskContext'
import { useContext } from 'react'

// Remove deleteTask param
function TaskCard({ task }) {
    const { deleteTask } = useContext(TaskContext)

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
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

import React, { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

// Remove params
function TaskForm() {

    // Get "createTask" from context
    const {createTask} = useContext (TaskContext)

    const [title, setTitle] = useState('')

    const [description, setDescription] = useState('')

    const haldeSubmit = (e) => {
        e.preventDefault()
        createTask(title, description)

        setTitle('')
        setDescription('')
    }

    return (
        <form onSubmit={haldeSubmit}>
            <input
                type='text'
                placeholder='Write a task'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus={true}
            />

            <textarea
                placeholder='task description'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />

            <input
                type='submit'
                value='Submit'
            />
        </form>
    )
}

// Remove params datatypes

export default TaskForm
```

```jsx
// components/TaskList.jsx

import TaskCard from './TaskCard'
import { TaskContext } from '../context/TaskContext'
import { useContext } from 'react'

// Remove params
const TaskList = () => {

    // Get "task" from context
    const {tasks, deleteTask} = useContext (TaskContext)

    if (tasks.length === 0) {
        return <h1>No tasks founds</h1>
    }

    return (
        <div>
            {tasks.map((task) => (
                <TaskCard
                    task={task}
                    key={task.id}

                    // Don't send the function 'delete task'
                />
            ))}
        </div>
    )
}

// Remove params datatypes

export default TaskList
```

![Vite + React (3).gif](20%20Delete%20task%207c952fa090c74164997389fec3baf134/Vite__React_(3).gif)