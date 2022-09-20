// Exported components

export function Sample({ prefix, name, greet }) {
    console.log (greet)
    return <h1>{`${prefix} ${name}`}</h1>
}

export function User() {
    return <h1>Sample User</h1>
}