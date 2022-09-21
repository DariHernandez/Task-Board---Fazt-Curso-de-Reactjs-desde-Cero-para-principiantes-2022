import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

// Manage data in parent component
import { useState, useEffect } from 'react'
import { tasks as data } from './data/tasks'

function App() {
    // States and events for local data
    const [tasks, setTasks] = useState([])
    useEffect(() => setTasks(data), [])

    function createTask(taskTitle, taskDescription) {
        // Add new task to array
        setTasks([
            ...tasks,
            {
                id: tasks.length,
                title: taskTitle,
                description: taskDescription,
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
