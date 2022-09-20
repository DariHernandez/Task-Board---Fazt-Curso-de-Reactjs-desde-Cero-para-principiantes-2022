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
