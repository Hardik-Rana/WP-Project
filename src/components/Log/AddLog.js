import React,{useContext, useEffect, useState} from 'react'

import LogContext from '../../context/log/logContext';
import $ from "jquery";

const AddLog = () => {
  const  logContext=useContext(LogContext);
  const {username} = logContext;
  
  const [log, setName] = useState("");
  const [attention, setAtt] = useState(1);
  const [name, setUser] = useState("");
  const [result, setResult] = useState("");

    useEffect(()=>{
      setUser(username);
    },[]);
    const handleChange = (e) => {
        setName(e.target.value);
    };
    const handleChangeAtt = (e) => {
      attention?setAtt(0):setAtt(1); 
      console.log(attention,typeof(attention))
    };
    const handleChangeUser = (e) => {
        setUser(e.target.value);
    };
   

    const handleSumbit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
                window.location.reload(false);
        
            },
        });
    };

    return (    
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
        <form className='card p-3 mt-5'
             action="https://jk-diamonds.000webhostapp.com/wp_practicals/NewLog.php"
             method="post"
             onSubmit={(event) => {handleSumbit(event)}}
         > 

        <div className="mb-3 mt-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Add log</label>
          <input type="text" className="form-control"
                id="log" name="log" value={log}
                onChange={(event) => handleChange(event)}
          />

          <input type="text"  value={username} hidden
                  id="name" name="name"
                  onChange={(event) => handleChangeUser(event)}
          />
         
        </div>
        <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" 
             id="attention" name="attention" defaultChecked={!attention}
             onChange={(event) => {
              handleChangeAtt(event)          
            } }
    />
    <label className="form-check-label" htmlFor="exampleCheck1">Need Attention</label>
  </div>
        <button type="submit" className="btn btn-outline-dark text-danger"><b> Add </b></button>
      </form>
            </div>
            <div className="col-md-3"></div>
        </div>
    )
}

export default AddLog
