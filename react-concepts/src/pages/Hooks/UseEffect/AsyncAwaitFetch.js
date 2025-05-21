import { useEffect, useState } from "react";

function AsyncAwaitFetch() {

    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(res => res.json())
        // .then(data => setUsers(data));
        // Async Await Way
        const fetchUsers = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = res.json();
            setUsers(data);
        }
        fetchUsers();
    }, []);

    return(
        <>
            <h4>Fetch Operation with Async Await in Fetch Call:</h4>
            <ul>
                { users.map((user) => <li key={user.id}>{ user.name }</li>) }
            </ul>
        </>
    );
}

export default AsyncAwaitFetch;
