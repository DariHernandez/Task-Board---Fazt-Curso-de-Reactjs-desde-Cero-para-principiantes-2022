import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { useState, useEffect } from 'react'
import { tasks as data } from './data/tasks'

function App() {
    const [tasks, setTasks] = useState([])
    useEffect(() => setTasks(data), [])

    function createTask(taskTitle, taskDescription) {
        const new_task = {
            id: tasks.length,
            title: taskTitle,
            description: taskDescription,
        }
        setTasks([...tasks, , new_task])
    }

    // New function for delete task
    function deleteTask (taskId) {

        // Remove element from array
        const taskFiltered = tasks.filter ((task) => task.id !== taskId)

        // Update tasks 
        setTasks (taskFiltered)
    }

    return (
        <>
            <TaskForm createTask={createTask} />

            {/* Submit delete task to TaskList */}
            <TaskList tasks={tasks} deleteTask={deleteTask} />
        </>
    )
}

export default App
