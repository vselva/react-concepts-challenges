import { useState } from 'react'
import './App.css'
import Greeting from './Greeting'
import Wrapper from './Wrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
      </div>
      <h1>Component as Props</h1>
      <div className="card">
        <Wrapper Component={<Greeting />} />
      </div>
    </>
  )
}

export default App
