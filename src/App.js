import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from './Views/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
