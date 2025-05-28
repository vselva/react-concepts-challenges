import { useEffect, useState } from "react";
import axios from 'axios';

function FetchAxios() {

    const [ posts, setPosts ] = useState([]);
    const [ albums, setAlbums ] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(res => setAlbums(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col">
                    <h1 className="mb-4">Fetch &amp; Axios:</h1>
                    <h2 className="mb-3">Fetch:</h2>
                    <p>
                        GET call to <code>https://jsonplaceholder.typicode.com/posts</code> to retrieve posts using fetch API:
                    </p>
                    <div className="card mb-4">
                        <div className="card-body">
                            <ul className="list-group">
                                { posts && posts.length > 0 ?
                                    posts
                                        .filter(p => p.id < 10)
                                        .map( p => (
                                            <li className="list-group-item" key={p.id}>{ p.title }</li>
                                        )) :
                                    <li className="list-group-item">There are no posts!</li>
                                }
                            </ul>
                        </div>
                    </div>
                    <h2 className="mb-3">Axios</h2>
                    <p>
                        GET call to <code>https://jsonplaceholder.typicode.com/albums</code> to retrieve albums using axios API:
                    </p>
                    <div className="card mb-4">
                        <div className="card-body">
                            <ul className="list-group">
                                { albums && albums.length > 0 ? 
                                    albums
                                        .filter( a => a.id < 10 )
                                        .map( m => (
                                            <li className="list-group-item" key={m.id}>{ m.title }</li>
                                        )) :
                                    <li className="list-group-item">There are no albums</li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FetchAxios;
