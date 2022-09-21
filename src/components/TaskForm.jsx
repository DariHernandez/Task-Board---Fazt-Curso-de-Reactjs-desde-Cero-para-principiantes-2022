import React, {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

// Remove params
function TaskForm() {

    // Get "createTask" from context
    const {createTask} = useContext (TaskContext)

    const [title, setTitle] = useState('')

    const [description, setDescription] = useState('')

    const haldeSubmit = (e) => {
        e.preventDefault()
        createTask(title, description)

        setTitle('')
        setDescription('')
    }

    return (
        <form onSubmit={haldeSubmit}>
            <input
                type='text'
                placeholder='Write a task'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus={true}
            />

            <textarea
                placeholder='task description'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />

            <input
                type='submit'
                value='Submit'
            />
        </form>
    )
}

// Remove params datatypes

export default TaskForm
