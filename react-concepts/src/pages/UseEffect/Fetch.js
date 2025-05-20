import { useState, useEffect } from "react";

function Fetch() {

    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            });
    }, []);

    return(
        <>
            <h4> Fetch an API with useContext and fetch API </h4>
            { users.map((user) => <li key={user.id}> { user.name } </li>) }
        </>
    );
}

export default Fetch;
