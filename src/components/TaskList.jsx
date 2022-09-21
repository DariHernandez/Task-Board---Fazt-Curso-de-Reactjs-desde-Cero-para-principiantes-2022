import TaskCard from './TaskCard'
import PropTypes from 'prop-types'

const TaskList = ({ tasks, deleteTask }) => {
    if (tasks.length === 0) {
        return <h1>No tasks founds</h1>
    }

    return (
        <div>
            {tasks.map((task) => (
                <TaskCard
                    task={task}
                    key={task.id}

                    // Submit delete task to each card
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    deleteTask: PropTypes.func.isRequired,
}

export default TaskList
