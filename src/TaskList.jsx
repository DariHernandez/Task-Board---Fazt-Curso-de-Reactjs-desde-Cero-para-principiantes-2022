import { useState, useEffect } from 'react'

// Get data from local js file, with alias
import { tasks as data } from './tasks'

const TaskList = (props) => {

    // List of task without initial value
    const [task, settask] = useState([])

    // set value of tasks list when component loads
    useEffect (() => settask(data), [])

    // Render where no task in list
    if (task.length === 0) {
        return <h1>No tasks founds</h1>
    }

    // Render each task
    return (
        <div>
            {task.map((task) => (
                <div key={task.id}>
                    <h1>{task.title}</h1>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>
    )
}

export default TaskList
