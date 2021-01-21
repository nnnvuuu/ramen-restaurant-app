
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
        </Router>
    </div>
  );
}

export default App;
