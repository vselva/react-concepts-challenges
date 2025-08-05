import { useState } from "react"

export default function App() {
    const [count, setCount] = useState(0);
    return <>
        <h1>Counter</h1>
      <button type="button" onClick={() => { setCount((p) => p + 1) }}> Inc { count }</button>
    </>
}
