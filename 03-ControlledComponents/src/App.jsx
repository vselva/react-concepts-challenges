import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      <h1>Controlled Component</h1>
      <div className="card">
          <Form />
      </div>
      <p className="read-the-docs">
      </p>
    </>
  )
}

export default App
