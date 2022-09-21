import TaskCard from './TaskCard';
import PropTypes from 'prop-types'

const TaskList = ({ tasks }) => {

    if (tasks.length === 0) {
        return <h1>No tasks founds</h1>
    }

    return (
        <div>
            {tasks.map((task) => (
                // Use card component, with key send sending props
                <TaskCard task={task} key={task.id}/>
            ))}
        </div>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
}

export default TaskList
