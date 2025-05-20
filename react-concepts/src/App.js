import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import Jsx from './pages/Jsx';
import Props from './pages/Props';

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
                                                <Link className="nav-link" to="/Jsx">Jsx</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/Props">Props </Link>
                                            </li>
                                            
                                        </ul>
                                    </nav>

                                    <Routes>
                                        <Route path="/Jsx" element={<Jsx />} />
                                        <Route path="/Props" element={ <Props /> } />
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
