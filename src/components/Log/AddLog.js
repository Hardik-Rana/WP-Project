import React from 'react'

const AddLog = () => {
    return (    
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <form className='card p-3 mt-5'>
        <div class="mb-3 mt-3">
          <label for="exampleInputEmail1" class="form-label">Add log</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
         
        </div>
        <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Need Attention</label>
  </div>
        <button type="submit" class="btn btn-outline-dark text-danger"><b> Add </b></button>
      </form>
            </div>
            <div className="col-md-3"></div>
        </div>
    )
}

export default AddLog
