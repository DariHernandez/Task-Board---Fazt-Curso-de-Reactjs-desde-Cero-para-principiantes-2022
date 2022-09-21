// import library for props
import PropTypes from 'prop-types'

// Function with the name event
const HandleChange = (e) => {
    console.log (e.target.id)
}

export function Button({ text, name }) {
    return (
        // Run funxtion when user click the button, external to component
        <button id="btn" onClick={HandleChange} >
            {text} - {name}
        </button>
    )
}

// Define datatypes of the component props
Button.propTypes = {
    text: PropTypes.string.isRequired,
}

// Defaulr ptops value
Button.defaultProps = {
    name: 'User',
}
