import React from 'react';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import store from './store/index'
export class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router basename="">
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/users">Users</Link>
                                </li>
                            </ul>
                        </nav>

                        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                        <Switch>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }

}


export default App;
