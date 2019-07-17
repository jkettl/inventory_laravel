import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import Home from './screens/home';
import ListOfThings from './screens/list';

ReactDom.render((
    <BrowserRouter>
        <div>
            <nav className="container">
                <ul className="nav mt-2 mb-2">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/list">List</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/list" component={ ListOfThings } />
                <Route component={ Home } />
            </Switch>
        </div>
    </BrowserRouter>
),document.getElementById('root'));