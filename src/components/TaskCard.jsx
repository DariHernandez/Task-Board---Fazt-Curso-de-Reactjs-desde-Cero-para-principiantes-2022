import React from 'react'
import PropTypes from 'prop-types'

// New component
function TaskCard({task}) {
    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
    )
}

TaskCard.propTypes = {
    task: PropTypes.object.isRequired,
}

export default TaskCard
