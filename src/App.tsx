import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { TodoDone } from './components/TodoDone'
import { TodoHome } from './components/TodoHome'

import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/TodoDone">Already Done</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/TodoDone">
            <TodoDone />
          </Route>
          <Route path="/">
            <TodoHome />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
