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

