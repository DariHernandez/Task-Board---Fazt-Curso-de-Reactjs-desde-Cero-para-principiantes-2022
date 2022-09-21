import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([])

    function createTask(taskTitle, taskDescription) {
        const new_task = {
            id: tasks.length,
            title: taskTitle,
            description: taskDescription,
        }
        setTasks([...tasks, new_task])
    }

    function deleteTask(taskId) {
        const taskFiltered = tasks.filter((task) => task.id !== taskId)
        setTasks(taskFiltered)
    }

    useEffect(() => setTasks(data), [])

    return (
        <TaskContext.Provider
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
