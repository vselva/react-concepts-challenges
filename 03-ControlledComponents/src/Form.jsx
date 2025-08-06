import { useState } from "react"


export default function Form() {

    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("name: " + name);
    }

    return <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
                type="text"
                value={name}
                onChange={(e) => handleChange(e)}/>
            
            <button 
                type="submit"> Submit </button>
        </form>
    </>
}