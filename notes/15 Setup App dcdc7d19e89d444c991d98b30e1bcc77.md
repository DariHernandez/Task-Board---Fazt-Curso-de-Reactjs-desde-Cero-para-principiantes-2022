# 15. Setup App

Start app with Vite Js and initial files

```jsx
// main.jsx

import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'

const root = ReactDom.createRoot(document.querySelector('#root'))

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
```

```jsx
// App.jsx

export default function App () {
    return <h1>Hello World</h1>
}
```

![Untitled](15%20Setup%20App%20dcdc7d19e89d444c991d98b30e1bcc77/Untitled.png)