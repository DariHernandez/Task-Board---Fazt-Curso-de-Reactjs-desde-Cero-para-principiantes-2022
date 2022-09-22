# 10. Event Handlers

# Inline functions for events

```jsx
// Button.jsx

...
export function Button({ text, name }) {
    return (
        // Run funxtion when user click the button
        <button
            onClick={function () {
                console.log('Hola mundo')
            }}
        >
            {text} - {name}
        </button>
    )
}
...
```

![Untitled](10%20Event%20Handlers%20a4ac2aad1a9249e59ab33517eb2d7c58/Untitled.png)

# Arrow functions

```jsx
// Button.jsx

...
<button onClick={() => console.log('hello')}>
	{text} - {name}
</button>
...
```

![Untitled](10%20Event%20Handlers%20a4ac2aad1a9249e59ab33517eb2d7c58/Untitled.png)

# External function

```jsx
// Button.jsx

...
// Function with the name event
const HandleChange = (e) => {
    console.log (e.target.id)
}

export function Button({ text, name }) {
    return (
        // Run funxtion when user click the button, external to component
        <button id="btn" onClick={HandleChange}>
            {text} - {name}
        </button>
    )
...
```