import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InterviewerLogin from './interviewerlogin';
import AdminLogin from './adminlogin';
import Hello from './hello';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>

        <Router>
          <div>

            <Switch>
              <Route exact path={'/'} component={Hello} />
              <Route exact path={'/AdminLogin'} component={AdminLogin} />
              <Route exact path={'/InterviewerLogin'} component={InterviewerLogin} />
            </Switch></div>
        </Router></div>

    );
  }
}

export default App;










