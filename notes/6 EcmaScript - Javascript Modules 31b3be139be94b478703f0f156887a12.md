# 6. EcmaScript - Javascript Modules

Components in separated files

# Components in separted modules

```jsx
// index.jsx

// Import react modules
import React from "react"
import ReactDom from "react-dom/client"

// Import components
import { Sample, User } from "./Sample"

// Get root tag from html
const root = ReactDom.createRoot(document.querySelector("#root"))

// Content inside the root
root.render(
    <>
        <Sample />
        <User />
    </>
)
```

```jsx
// Sample.jsx

// Exported components

export function Sample() {
    return <h1>Sample text</h1>
}

export function User() {
    return <h1>Sample User</h1>
}
```

![Untitled](6%20EcmaScript%20-%20Javascript%20Modules%2031b3be139be94b478703f0f156887a12/Untitled.png)

# Export default

Default component imported

```jsx
// index.jsx
...

// Import components
import { Sample, User } from "./Sample"
import Product, {Navbar} from "./Product"

// Get root tag from html
const root = ReactDom.createRoot(document.querySelector("#root"))

// Content inside the root
root.render(
    <>
        <Sample />
        <User />
        <Product />
        <Navbar />
    </>
)
```

```jsx
// Product.jsx

export default function Product() {
    return <h1>Procuct</h1>
}

export function Navbar () {
    return <nav>Navigation</nav>
}
```

![Untitled](6%20EcmaScript%20-%20Javascript%20Modules%2031b3be139be94b478703f0f156887a12/Untitled%201.png)

```
// Import react modules
import React from "react"
import ReactDom from "react-dom/client"

// Import components
import { Sample, User } from "./Sample"
import Product, {Navbar} from "./Product"

// Get root tag from html
const root = ReactDom.createRoot(document.querySelector("#root"))

// Content inside the root
root.render(
    <>
        <Sample />
        <User />
        <Product />
        <Navbar />
    </>
)
```