// import library for props
import PropTypes from 'prop-types'

export function Button({text, name}) {
    return <button>{text} - {name}</button>
}

// Define datatypes of the component props
Button.propTypes = {
    text: PropTypes.string.isRequired
}

// Defaulr ptops value
Button.defaultProps = {
    name: "User"
}