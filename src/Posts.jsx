import './Posts.css'

// import material design icons
import { MdDownloadForOffline } from 'react-icons/md'

const HandleClick = () => {
    fetch('https://jsonplaceholder.typicode.com/posts') // query data to api
        .then((response) => response.json()) // convert data to json
        .then((data) => console.log(data)) // show data in terminal
        .catch((error) => console.error(error)) // if error, catch it and sho in terminal
}

export const Posts = () => {
    return (
        <button onClick={HandleClick}>
            {/* use icon */}
            <MdDownloadForOffline />
            <span>
                Request data
            </span>
        </button>
    )
}
