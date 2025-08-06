import { useState } from 'react'
import './App.css'
import Child from './Child'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Child id={1} name="Selva"/>
      </div>
      <p className="read-the-docs">
        
      </p>
    </>
  )
}

export default App
