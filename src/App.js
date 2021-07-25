import React, {lazy, Suspense} from 'react'
import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
const ToDo = lazy(() => import('./to-do'));

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Suspense fallback={'Loading'} >
            <Route path={'/to-do'} component={ToDo} />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
