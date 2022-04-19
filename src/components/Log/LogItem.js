import React from 'react'


const Log = ({log}) => {


    return (
      <ul className="list-group list-group-flush">
      <li className="list-group-item">
      <div>
        <a href="#edit-log-modal" className="delete_link">{log.message}</a>
        <br/>
        <span className='grey-text'>
            <span className="black-text">ID #{log.id}</span> last updated by {'  '}<span className="black-text">{log.tech}</span> on {log.date}
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
