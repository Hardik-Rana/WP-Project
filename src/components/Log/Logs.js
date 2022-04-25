import React,{useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import LogItem from './LogItem';
import Addlog from './AddLog';
import LogContext from '../../context/log/logContext';

const Logs = (props) => {

  const  logContext=useContext(LogContext);
  const {username,clearUser,setLoading} = logContext;
  const [data, setData] = useState(null);
  var logs1;
  
  const getLogs= async ()=>{

    await fetch("https://jk-diamonds.000webhostapp.com/wp_practicals/ReadAll.php")
    .then((response) => response.text())
    .then((response) => setData(response)); 

    // response ma string ayi rai che ane me setData me store kari ahiya!
    
  }
  
  
  useEffect(() => {
    getLogs();
    logs1 = JSON.parse(data);      // logs1 ma json object ayi jase 
    console.log(typeof(logs1),logs1);
    console.log("Hello");
  },[data]);
  


    const logs= [{
      "ID": "1",
      "LOG": "Changed hard drive on workstation 005",
      "attention": true,
      "USERNAME": "Rana Hardik",
      "DATE": "2022-03-01T00:52:44.991Z"
    },
    {
      "ID": "2",
      "LOG": "Workstation 007 not posting",
      "attention": false,
      "USERNAME": "Hiren",
      "DATE": "2022-03-01T01:34:46.120Z"
    },
    
    {
      "ID": "3",
        "LOG": "Changed memory on workstation 050",
        "attention": false,
        "USERNAME": "Dhyey",
        "DATE": "2022-03-01T01:34:40.658Z"
      },
      {
        "ID": "4",
        "LOG": "Changed memory on workstation 050",
        "attention": false,
        "USERNAME": "Shyam",
        "DATE": "2022-03-01T01:34:40.658Z"
      }
    ]; 
    
    
    
    if(username){
      
  return (
    <div>
           <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
    <form className="d-flex">
      <input className="form-control me-2 search" type="search"  placeholder="Search" aria-label="Search"/>
    </form>
    <div className="links">
      <ul className="text-white mt-2">
         {username && <li className="mx-4"> <span className="h5">Hello {username} <i className="fa fa-hand-spock-o" aria-hidden="true"></i></span></li>}
          <li className="mx-2"> <Link to="/" onClick={()=>{
            clearUser();
          }}><b>Logout</b></Link> </li>
      </ul>
    </div>
  </div>
</nav>
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">

              <div className="row"></div>
              <Addlog/>
            <div className="card mt-5" >
  <div className="card-header bg-dark text-danger text-center">
    
    <h1> System Logs</h1>
  </div>

{logs1 && logs1.map(log=> <LogItem key={log.ID} log={log}/>)}   
</div>
                </div>
            </div>
            <div className="col-md-1"></div>

            {/* <div className='fixed-action-btn'>

<a href="#add-log-modal"className="fixedButton">
<div className="roundedFixedBtn">
<i className="fa fa-plus"></i>
</div>
</a>
</div> */}
        {/* <div>{data ? data : 'No data yet...'}</div>; */}
        </div>
      
    )
  }
  else{
    return(
      <div>
       
        {props.history.push('/')}
      </div>
    )
  
  }
    
}

  export default Logs
  