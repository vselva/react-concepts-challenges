import './App.css'
import { createRef } from 'react'

function App() {
  const inputRef = createRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  }

  return (
    <>
      <h1>Un Controlled Components</h1>
      <div className="card">
        <form onSubmit={(e) => submitHandler(e)}>

          <input type='text'
            placeholder='Enter Name'
            id="name"
            className="form"
            ref={inputRef}
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
