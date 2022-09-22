# 4. Components

Componetns start with upper case

```jsx
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
```

![Untitled](4%20Components%2096cedf5281b54f27b64d424abeea7a3b/Untitled.png)