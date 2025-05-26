import { Component } from "react";

class ComponentDidMount extends Component {

    state = {
        users: [],
        loading: true
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => this.setState({ users: data, loading: false }))
            .catch((err) => console.log('Error in fetching users. Error:', err));
    }

    render() {
        const { users, loading } = this.state;
        console.log(users);

        if(loading) 
            return <div>Loading...</div>

        return (
            <>
                <h4>componentDidMount():</h4>
                <ul>
                    { users.map(user => <li key={user.id}>{ user.name }</li>) }
                </ul>
            </>
        )
    }
}

export default ComponentDidMount;
