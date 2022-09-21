import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

function TaskForm({ createTask }) {
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

TaskForm.propTypes = {
    createTask: PropTypes.func,
}

export default TaskForm
