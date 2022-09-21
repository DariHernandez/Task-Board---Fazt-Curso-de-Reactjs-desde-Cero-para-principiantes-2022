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
