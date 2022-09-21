import React from 'react'
import PropTypes from 'prop-types'

function TaskCard({ task, deleteTask }) {

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>

            {/* Button for call delete function when click */}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    )
}

TaskCard.propTypes = {
    task: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
}

export default TaskCard
