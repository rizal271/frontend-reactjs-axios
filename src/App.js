import React, { Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import DetailPage from './container/Detailpage/Detailpage';
// import logo from './logo.svg';
import './App.css';
import Home from './container/Home/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" exact  component={Home}/>
          <Route path="/Detailpage/:id" exact  component={DetailPage}/>
        </Fragment>
      </Router>
    );
  }
}

export default App;
