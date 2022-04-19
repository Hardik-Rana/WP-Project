import './App.css';
import Login from "./components/Auth/Login";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Email from "./components/Auth/Email";
import Logs from "./components/Log/Logs"
import AddLog from "./components/Log/AddLog";
import Registration from "./components/Auth/Registration";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (<div>
    <Router>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/registration' component={Registration}/>
        <Route exact path='/' component={Login}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/password' component={Email}/>
        <Route exact path='/log' component={Logs}/>
        {/* <Route exact path='/add' component={AddLog}/> */}

        {/* <Route component={NotFound}/> */}

        </Switch>
        
      
      </Router>
      </div>
  );
}

export default App;
