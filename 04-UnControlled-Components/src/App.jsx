import './App.css'
import { createRef, useState } from 'react'

function App() {
  const nameRef = createRef("");
  const [name, setName] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    setName(nameRef.current.value);
  }

  return (
    <>
      <h1>Un Controlled Components</h1>
      <h4> Entered Text: {name} </h4>
      <div className="card">
        <form onSubmit={(e) => submitHandler(e)}>

          <input type='text'
            placeholder='Enter Name'
            id="name"
            className="form"
            ref={nameRef}
          />

          <button type='submit'
            id="submit"
            className='btn'>
            Submit
          </button>
        </form>
      </div>

    </>
  )
}

export default App
