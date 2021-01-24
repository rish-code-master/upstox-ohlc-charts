/**
 * Copyright (c) 2021
 *
 * long description for the file
 *
 * @summary App Component
 * @author Rishabh <rishabh.it.007@gmail.com>
 *
 * Created at     : 2021-01-16 05:00:00 
 * Last modified  : 2021-01-16 05:00:00 
 */
import React from "react";
import Header from "../header";
import Footer from "../footer";
import Home from '../home';
import LiveChart from '../live-chart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
          <Header />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/live-chart' component={LiveChart} />
          </Switch>
      </Router>
      <Footer />
      </React.StrictMode>
  );
};
export default App;
