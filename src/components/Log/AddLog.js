import React from 'react'

const AddLog = () => {
    return (    
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <form className='card p-3 mt-5'>
        <div className="mb-3 mt-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Add log</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
         
        </div>
        <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
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
