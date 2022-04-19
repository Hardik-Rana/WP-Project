import React from 'react'
import LogItem from './LogItem';
import Addlog from './AddLog';

const Logs = () => {

    const logs= [{
        "id": "1",
      "message": "Changed hard drive on workstation 005",
      "attention": true,
      "tech": "Rana Hardik",
      "date": "2022-03-01T00:52:44.991Z"
    },
    {
        "id": "2",
        "message": "Workstation 007 not posting",
        "attention": false,
        "tech": "Hiren",
        "date": "2022-03-01T01:34:46.120Z"
      },
      
      {
        "id": "3",
        "message": "Changed memory on workstation 050",
        "attention": false,
        "tech": "Dhyey",
        "date": "2022-03-01T01:34:40.658Z"
      },
      {
        "id": "4",
        "message": "Changed memory on workstation 050",
        "attention": false,
        "tech": "Shyam",
        "date": "2022-03-01T01:34:40.658Z"
      }
]; 

    return (
      <div>
           <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
    <form className="d-flex">
      <input className="form-control me-2 search" type="search"  placeholder="Search" aria-label="Search"/>
    </form>
    <div className="links">
      <ul className="text-white mt-2">
          <li className="mx-4"> <span className="h5"> Hello @username </span></li>
          <li className="mx-2"> <a href="#"> <b> Logout</b></a> </li>
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
    
    <h1>System Logs</h1>
  </div>
  {logs.map(log=> <LogItem key={log.id} log={log}/>)}
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
        </div>
      
    )
}

export default Logs
