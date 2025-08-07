import { useState } from 'react'
import { Profiler } from 'react'; 
import './App.css'
import MyComponent from './MyComponent'

function App() {
  const [count, setCount] = useState(0)

  const callback = (id, phase, actualDuration) => {
    console.log('id: ' + id, 'phase: ' + phase, 'actualDuration: ' + actualDuration);
  }

  return (
    <>
      <Profiler id="myComponent" onRender={callback}>
        <MyComponent />
      </Profiler>
    </>
  )
}

export default App
