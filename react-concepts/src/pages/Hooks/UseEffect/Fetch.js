import { useState, useEffect } from "react";

function Fetch() {

    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    return(
        <>
            <h4> Fetch an API with useContext and fetch API </h4>
            <p> useEffect with empty array as 2nd argument = <b>ComponentDidMount</b> (runs only one)</p>
            <p> useEffect with array of elements (dependencies) as 2nd argument = <b>ComponentDidUpdate</b> (runs when dep changes)</p>
            <p> useEffect with array of elements as 2nd argument & return cleanup function = <b>ComponentWillUnMount</b> (Cleanup runs when unmounting the component)</p>
            <p> useEffect with array as 2nd argument & return cleanup function = <b>componentDidUpdate + ComponentWillUnMount</b> (Cleanup runs before effect re-runs and on unmount)</p>
            <kr />
            <p><b>Users from the API: https://jsonplaceholder.typicode.com/users</b></p>
            { users.map((user) => <li key={user.id}> { user.name } </li>) }
        </>
    );
}

export default Fetch;
