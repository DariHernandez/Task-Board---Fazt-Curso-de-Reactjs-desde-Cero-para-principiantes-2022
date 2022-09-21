import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
    return (
        // background black, height 100vh, passing 10
        <main className='bg-zinc-900 h-screen p-10'>
            {/* Magrin left and right auto */}
            <section className='container mx-auto'>
                <TaskForm />
                <TaskList />
            </section>
        </main>
    )
}

export default App
