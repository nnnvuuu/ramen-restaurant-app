
import './App.css';
import HomePage from './components/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from './components/Menu/MenuPage';


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
        </Router>
    </div>
  );
}

export default App;
