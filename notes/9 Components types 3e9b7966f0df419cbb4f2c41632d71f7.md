# 9. Components types

# Funtion components

```jsx
function GreatingFunction () {
    return <h1>hello world</h1>
}
```

# Arrow function components

```jsx
const GreatingFunction = () =>  {
    return <h1>hello world</h1>
}
```

# Class components

```jsx
// Import component base class
import {Component} from 'react'

// Class who extneds a react component
export class GreatingClass extends Component {

    // Function for renderize the content
    render () {
        // Return html
        return <h1>Hello World</h1>
    }
}
```