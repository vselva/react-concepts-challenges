import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Jsx from './pages/Jsx';
import Props from './pages/Props/Props';
import Map from './pages/Map/Map';
import UseState from './pages/UseState/UseState';
import UseEffect from './pages/UseEffect/UseEffect';
import Components from './pages/Components/Components';

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="container">
                    <div className="row">
                        <div className="card shadow">
                            <div className="card-body">
                                <Router>
                                    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/Jsx">Jsx</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/Props">Props</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/Map">Map</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/UseState">useState</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/Components">Components</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/UseEffect">UseEffect</Link>
                                            </li>
                                        </ul>
                                    </nav>

                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/Jsx" element={<Jsx />} />
                                        <Route path="/Props" element={ <Props /> } />
                                        <Route path="/Map" element={ <Map /> } />
                                        <Route path="/UseState" element={ <UseState /> } />
                                        <Route path="/Components" element={ <Components /> } />
                                        <Route path="/UseEffect" element={ <UseEffect /> } />
                                    </Routes>
                                </Router>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
