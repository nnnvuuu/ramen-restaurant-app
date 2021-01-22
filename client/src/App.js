
import './App.css';
import HomePage from './components/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from './components/Menu/MenuPage';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import CartPage from './components/CartPage/CartPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import SignInPage from './components/SignInPage/SignInPage';
import ResetAccountPage from './components/ResetAccountPage/ResetAccountPage';
import AskDelivery from './components/CheckoutPage/AskDelievry';
//fn + v =调整色彩
function App() {
  return (
    <div>
      <Router>
        <Switch>
           <Route path="/" exact component={HomePage}/>
         </Switch>
         <Switch>
           <Route path="/Menu" exact component={Menu}/>
         </Switch>
         <Switch>
           <Route path="/order" exact component={Menu}/>
         </Switch>
         <Switch>
           <Route path="/checkout" exact component={CheckoutPage}/>
         </Switch>
         <Switch>
           <Route path="/cart" exact component={CartPage}/>
         </Switch>
         <Switch>
           <Route path="/signUp" exact component={SignUpPage}/>
         </Switch>
         <Switch>
           <Route path="/signIn" exact component={SignInPage}/>
         </Switch>
         <Switch>
           <Route path="/resetAccount" exact component={ResetAccountPage}/>
         </Switch>
         <Switch>
           <Route path="/deliveryPage" exact component={AskDelivery}/>
         </Switch>
        </Router>
    </div>
  );
}

export default App;
