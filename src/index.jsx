// Import react modules
import React from "react";
import ReactDom from "react-dom/client";

// Get root tag from html
const root = ReactDom.createRoot(document.querySelector("#root"));

// Sample component
function Greeting() {
  // return html code
  return (
    <div> {/* Div container */}
      <h1>Sample title</h1>
      <p>Sample text</p>
    </div>
  );
}

// Content inside the root
root.render(
  // Invoke the component "Greeting" many times
  <div>
    <Greeting /> {/* self closing tag */}
    <Greeting></Greeting> {/* regular tag */}
  </div>
);
