import React from 'react'
import {useState} from 'react'
import $ from "jquery";


const Log = ({log}) => {

  const [delid, setID] = useState("");
  const [result, setResult] = useState("");

  
  const handleChange = (e) => {
    setID(e.target.value);
  };


    const handleSumbit = (e) => {

      setID(log.ID);

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
      <ul className="list-group list-group-flush">
      <li className="list-group-item">
      <div>
        <a href="#edit-log-modal" className={`delete_link ${log.ATTENTION === "1" ? 'text-danger' : 'text-primary'}`}>{log.LOG}</a>
        <br/>

       
        <span className='grey-text'>
            <span className="black-text">ID #{log.ID}</span> last updated by {'  '}<span className="black-text">{log.USERNAME}</span> on {log.DATE}
        </span>
        {/* <a href="#!" className="float-end" 
            action="https://jk-diamonds.000webhostapp.com/wp_practicals/Delete.php"
            method="post"
            onSubmit={(event) => {handleSumbit(event)}}>
            <i className="material-icons text-danger" >delete</i>
          </a> */}

        <form action="https://jk-diamonds.000webhostapp.com/wp_practicals/Delete.php"
            method="post"
            onSubmit={(event) => {handleSumbit(event)}}>

              <input type="text"  value={log.ID} hidden
                        id="delid" name="delid"
                        onChange={(event) => handleChange(event)}
              />

        <button type='submit'  className='btn btn-sm btn-outline-danger float-end'>Delete</button>
        </form>
        </div>
      </li>
    </ul>
    )
}

export default Log
