# 12. Third Party Modules

# Icons: react-icons

install: [https://react-icons.github.io/react-icons/](https://react-icons.github.io/react-icons/)

## Use icons

```jsx
// Posts.jsx

import './Posts.css'

// import material design icons
import { MdDownloadForOffline } from 'react-icons/md'

...

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
```

```css
/* Posts.css */

button {
    display: flex;
    align-items: center;
    justify-content: center;
}

button svg {
    padding: 5px;
}
```

![Untitled](12%20Third%20Party%20Modules%20eaa254fb8ec0488bb0f1ea77ce49d807/Untitled.png)