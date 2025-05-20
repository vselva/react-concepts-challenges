import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Welcome to React Fundamentals!</h1>
            <nav>
                <ul className="navbar-nav flex-row justify-content-center">
                    <li className="nav-item mx-2">
                        <Link className="nav-link btn btn-outline-primary" to="/">Home</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link btn btn-outline-primary" to="/Jsx">Jsx</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link btn btn-outline-primary" to="/Props">Props</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link btn btn-outline-primary" to="/Map">Map</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link btn btn-outline-primary" to="/UseState">useState</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link btn btn-outline-primary" to="/Components">Components</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link btn btn-outline-primary" to="/UseEffect">UseEffect</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;
