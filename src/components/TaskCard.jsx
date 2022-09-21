import PropTypes from 'prop-types'
import { TaskContext } from '../context/TaskContext'
import { useContext } from 'react'

function TaskCard({ task }) {
    const { deleteTask } = useContext(TaskContext)

    return (
        // background gray, text white, padding 4, border rounded
        <div className='bg-gray-800 text-white p-4 rounded-md'>

            {/* text extra large, bold and capitalize */}
            <h1 className='text-xl font-bold capitalize'>{task.title}</h1>

            {/* Text grau and small */}
            <p className='text-gray-500 text-sm'>{task.description}</p>
            <button

                // Button with background red, passing 2, border radios and change color on hover
                className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400'
                onClick={() => deleteTask(task.id)}
            >
                Delete
            </button>
        </div>
    )
}

TaskCard.propTypes = {
    task: PropTypes.object.isRequired,
}

export default TaskCard
