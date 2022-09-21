import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

// Remove data import

function App() {

    // Remove global / context functions, and data

    return (
        <>
            {/* Don't submit data to child components */}
            <TaskForm />
            <TaskList />
        </>
    )
}

export default App
