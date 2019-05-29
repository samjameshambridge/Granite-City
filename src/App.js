import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from 'components/pages/Landing';
import OurGym from 'components/pages/OurGym';
import Prices from 'components/pages/Prices';
import Store from 'components/pages/Store';
import Checkout from 'components/pages/Checkout';
import Contact from 'components/pages/Contact';
import NotFound from 'components/pages/NotFound';

import { Provider } from 'react-redux';
import store from 'store';

import 'main.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/our-gym" component={OurGym} />
            <Route exact path="/prices" component={Prices} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/store/checkout" component={Checkout} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>

    );
  }
}

export default App;
