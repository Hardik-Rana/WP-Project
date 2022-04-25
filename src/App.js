import './App.css';
import Login from "./components/Auth/Login";
import About from "./components/Pages/About";
import Logs from "./components/Log/Logs"
import AddLog from "./components/Log/AddLog";
import Registration from "./components/Auth/Registration";
import AlertState from './context/alert/AlertState';
import LogState from './context/log/LogState';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {

  
  return (
    <AlertState>
      <LogState>
  <div>
    <Router>
    <Switch>
      
        <Route exact path='/registration' component={Registration}/>
        <Route exact path='/' component={Login}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/log' component={Logs}/>
        {/* <Route exact path='/add' component={AddLog}/> */}

        {/* <Route component={NotFound}/> */}

        </Switch>
        
      
      </Router>
      </div>
      </LogState>
      </AlertState>
  );
}

export default App;
