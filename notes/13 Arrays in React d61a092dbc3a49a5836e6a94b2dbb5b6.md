# 13. Arrays in React

# Map function

```jsx
// index.jsx

...
const users = [
    {
        id: 1,
        name: 'dari dev',
        image: 'https://robohash.org/dari%20dev',
    },
    {
        id: 2,
        name: 'user 1',
        image: 'https://robohash.org/user%201',
    },
]

// Content inside the root
root.render(
    <>
        {/* Loop for each user */}
        {users.map((user) => {
            return (
                // react list element identifier
                <div key={user.id}>
                    {/* Use array elements */}
                    <h1>User name: {user.name}</h1>
                    <img src={user.image} />
                </div>
            )
        })}
    </>
)
```

![Untitled](13%20Arrays%20in%20React%20d61a092dbc3a49a5836e6a94b2dbb5b6/Untitled.png)