import { Component } from "react";

class M4ComponentDidMount extends Component {

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

        if(loading) 
            return <div>Loading...</div>

        return (
            <div className="card p-4 m-3">
                <h4>4. componentDidMount():</h4>
                <ul>
                    { users.map(user => <li key={user.id}>{ user.name }</li>) }
                </ul>
            </div>
        )
    }
}

export default M4ComponentDidMount;
