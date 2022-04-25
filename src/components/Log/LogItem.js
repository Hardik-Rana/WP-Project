import React from 'react'


const Log = ({log}) => {

      console.log(typeof(log.ATTENTION));
      console.log(log.LOG)

    return (
      <ul className="list-group list-group-flush">
      <li className="list-group-item">
      <div>
        <a href="#edit-log-modal" className={`delete_link ${log.ATTENTION === "1" ? 'text-danger' : 'text-primary'}`}>{log.LOG}</a>
        <br/>

       
        <span className='grey-text'>
            <span className="black-text">ID #{log.ID}</span> last updated by {'  '}<span className="black-text">{log.USERNAME}</span> on {log.DATE}
        </span>
        <a href="#!" className="float-end">
            <i className="material-icons text-danger" >delete</i>
        </a>
        </div>
      </li>
    </ul>
    )
}

export default Log
