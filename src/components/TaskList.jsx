import TaskCard from './TaskCard'
import { TaskContext } from '../context/TaskContext'
import { useContext } from 'react'

const TaskList = () => {
    const { tasks, deleteTask } = useContext(TaskContext)

    if (tasks.length === 0) {
        return (
            // Color white, text 4 times extra lñarge, font bold and text align center
            <h1 className='text-white text-4xl font-bold text-center'>
                No tasks founds
            </h1>
        )
    }

    console.log (tasks)

    return (
        // Display grid, 4 grid template columns and 2 of gap
        <div className='grid grid-cols-4 gap-2'>
            {tasks.map((task) => (
                <TaskCard
                    task={task}
                    key={task.id}
                />
            ))}
        </div>
    )
}

export default TaskList
