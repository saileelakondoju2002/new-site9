import { useState } from 'react'
import './App.css'

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

function App() {
  const [name, setName] = useState('')

  return (
    <div className="App">
      <h1>Exam Project</h1>
      <div className="card">
        <h2>HMR Demo</h2>
        <p>
          Edit this file (<code>src/App.jsx</code>) and save to test HMR.
          You'll see changes without a full page reload!
        </p>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name && <p>Hello, {name}!</p>}
        <Counter initialCount={0} />
      </div>
    </div>
  )
}

export default App