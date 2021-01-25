
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './redux/stores/store';
import HomePage from './components/HomePage/HomePage';
import Menu from './components/Menu/MenuPage';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import CartPage from './components/CartPage/CartPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import SignInPage from './components/SignInPage/SignInPage';
import ResetAccountPage from './components/ResetAccountPage/ResetAccountPage';
import AskDelivery from './components/CheckoutPage/AskDelievry';
//fn + v =调整色彩


class App extends Component {
  render() {
  return (
    <div>
     <Provider store = {store}>
      <Router>
        <Switch>
           <Route path="/" exact component={HomePage}/>
           <Route path="/Menu" exact component={Menu}/>    
           <Route path="/order" exact component={Menu}/>
           <Route path="/checkout" exact component={CheckoutPage}/>
           <Route path="/cart" exact component={CartPage} />
           <Route path="/signUp" exact component={SignUpPage}/>
           <Route path="/signIn" exact component={SignInPage}/>
           <Route path="/resetAccount" exact component={ResetAccountPage}/>
           <Route path="/deliveryPage" exact component={AskDelivery}/>
         </Switch>
        </Router>
      </Provider>
    </div>
  );
}
}

export default App;
