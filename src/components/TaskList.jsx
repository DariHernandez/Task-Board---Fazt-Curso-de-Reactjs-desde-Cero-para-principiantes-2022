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
