import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import Home from './containers/Home';
import Generator from './containers/Generator';
import About from './containers/About';



class App extends Component {
  render() {
    return (
      <div className="pink-text text-lighten-3">
        <Router>
          <div>
            <Navbar />
              <div className="col s-12">
                <Switch>
                  <Route exact path= '/' component={Home}></Route>
                  <Route exact path= '/generator' component={Generator}></Route>
                  <Route exact path= '/about' component={About}></Route>             
                </Switch>
              </div>
              <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
