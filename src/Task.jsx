// Import css file
import './Task.css'
import PropTypes from 'prop-types'

export function TaskCard({ ready }) {
    return (
        // Custom html class
        <div className='card'>
            <h1>My first task</h1>

            {/* Custom styles and text based in props */}
            <p className={ready ? 'done' : 'todo'}>
                {ready ? 'Task Done' : 'TODO Task'}
            </p>
        </div>
    )
}

TaskCard.propTypes = {
    ready: PropTypes.bool.isRequired,
}
