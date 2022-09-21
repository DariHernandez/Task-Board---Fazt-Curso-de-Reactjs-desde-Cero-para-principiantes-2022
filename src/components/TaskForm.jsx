import React, { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {
    const { createTask } = useContext(TaskContext)

    const [title, setTitle] = useState('')

    const [description, setDescription] = useState('')

    const haldeSubmit = (e) => {
        e.preventDefault()
        createTask(title, description)

        setTitle('')
        setDescription('')
    }

    return (
        
        // Max with mediam and margins auto (right and left margins)
        <div className='max-w-md mx-auto'>
            <form
                onSubmit={haldeSubmit}

                // background color blue, paddin 10 and margin bottom 4
                className='bg-slate-800 p-10 mb-4'
            >

                {/* text two times extra large, bold, white and a margin bottom of 3 */}
                <h1 className='text-2xl font-bold text-white mb-3'>Add task</h1>
                <input
                    type='text'
                    placeholder='Write a task'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    autoFocus={true}

                    // input light blue, padding 3, with 100% amd margin botton 2
                    className='bg-slate-300 p-3 w-full mb-2'
                />

                <textarea
                    placeholder='task description'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}

                    // textarea light blue, padding 3, with 100% amd margin botton 2
                    className='bg-slate-300 p-3 w-full mb-2'
                />

                <input
                    type='submit'
                    value='Submit'

                    // Button with background color blue, 3 of passing left and right, 1 of padding top and bottom, color white
                    className='bg-indigo-500 px-3 py-1 text-white'
                />
            </form>
        </div>
    )
}

export default TaskForm
