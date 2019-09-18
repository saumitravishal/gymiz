import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../../features/nav/NavBar/NavBar'
import HomePage from '../../features/home/HomePage';
import TestComponent from '../../features/testarea/TestComponent';
//import logo from './logo.svg';
//import './App.css';


class App extends React.Component {
  render() {
    return (
      <div>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
      <Route
        path="/(.+)"
        render={() => (
          <div>
            <NavBar />
            <Container className="main">
              <Switch>
                <Route path="/test" component={TestComponent} />
              </Switch>
            </Container>
          </div>
        )}
      />
    </div>
    );
  }
}

export default App;