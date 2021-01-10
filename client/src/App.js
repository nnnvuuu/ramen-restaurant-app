
import './App.css';
import HomePage from './components/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Switch>
           <Route path="/" exact component={HomePage}/>
  
         </Switch>
        </Router>
    </div>
  );
}

export default App;
