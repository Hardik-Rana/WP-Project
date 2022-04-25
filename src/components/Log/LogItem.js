import React from 'react'


const Log = ({log}) => {


    return (
      <ul className="list-group list-group-flush">
      <li className="list-group-item">
      <div>
        <a href="#edit-log-modal" className="delete_link">{log.LOG}</a>
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
