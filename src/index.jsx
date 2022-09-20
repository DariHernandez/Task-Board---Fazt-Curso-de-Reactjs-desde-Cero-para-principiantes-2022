// Import react modules
import React from "react"
import ReactDom from "react-dom/client"

// Get root tag from html
const root = ReactDom.createRoot(document.querySelector("#root"))

// Sample component
// function Sample() {
//     // return html code
//     const name = "Dari Dev"
//     return (
//         <div>
//             <p>name</p> {/* h1 with the text "name" */}
//             <p>{name}</p> {/* use variable insde jsx */}
//             <p>{10 + 10}</p>
//         </div>
//     )
// }

// function Sample() {
//     // Conditional returns
//     const married = false
//     if (married) {
//         return <p>I am married</p>
//     } else {
//         return <p>I am happy</p>
//     }
// }

// function Sample() {
//     // Conditional returns with ternary operator
//     const married = true
//     return (
//         <div>
//             <p> {married ? "I am married" : "I am happy"} </p>
//         </div>
//     )
// }

// function Sample() {
//     // returns objects as string

//     const user = {
//         firstname: "dari",
//         lastname: "daveloper",
//     }

//     // Convert objeto to json string
//     return <p>
//         {JSON.stringify(user)}
//     </p>
// }

// function Sample() {
//     // returns objects as tags

//     const user = {
//         firstname: "dari",
//         lastname: "daveloper",
//     }

//     // Get element from objet and insert in tag
//     return <p>{user.firstname}</p>
// }

function Sample() {
    // Functions nested in return
    function add(x, y) {
        return x + y
    }

    // Convert objeto to json string
    return <p>result: {add(10, 20)}</p>
}

// Content inside the root
root.render(
    <>
        {/* Open fragment */}
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        {/* Close fragment */}
    </>
)
