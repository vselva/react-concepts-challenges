import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Jsx from './pages/Jsx';
import PropsBase from './pages/Props/Base';
import Map from './pages/Map/Map';
import UseEffect from './pages/Hooks/3-UseEffect/Base';
import Components from './pages/Components/Components';
import FormsBase from './pages/Forms/Base';
import HooksBase from './pages/Hooks/Base';
import CoreFunctionsBase from './pages/CoreFunctions/Base';
import NotFound from './pages/NotFound';
import LifeCycleBase from './pages/LifeCycle/Base';

import LazyLoading from './pages/LazyLoading/Base';


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
                                                <Link className="nav-link" to="/PropsBase">Props</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/Map">Map</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/Components">Components</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/Forms">Forms</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/Hooks">Hooks</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/CoreFunctions">Core Functions</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/LifeCycle">Component Life Cycles</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/LazyLoading">Lazy Loading</Link>
                                            </li>
                                        </ul>
                                    </nav>

                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/Jsx" element={<Jsx />} />
                                        <Route path="/PropsBase" element={ <PropsBase /> } />
                                        <Route path="/Map" element={ <Map /> } />
                                        <Route path="/Components" element={ <Components /> } />
                                        <Route path="/UseEffect" element={ <UseEffect /> } />
                                        <Route path="/Forms" element={ <FormsBase /> } />
                                        <Route path="/Hooks" element={ <HooksBase /> } />
                                        <Route path="/CoreFunctions" element={ <CoreFunctionsBase /> } />
                                        <Route path="/LifeCycle" element={ <LifeCycleBase /> } />
                                        <Route path="/LazyLoading" element={ <LazyLoading /> } />
                                        <Route path="*" element={<NotFound /> } />
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
