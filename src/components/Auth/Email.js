import React, { Fragment } from 'react'
import Navbar from "../Pages/Navbar";

const Email = () => {
    return (
        <Fragment>
            <Navbar/>
           <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 op mt-5">

                        <span className="h1 d-flex justify-content-center mt-5 mb-3">Forgot<span className="text-danger mx-3">Password</span></span>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address <span className="text-danger">*</span></label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                           
                        </div>
                       
                       <p className="d-flex justify-content-center mt-3"> <button type="submit" className="btn btn-dark d-flex ">Send OTP</button></p>
                       
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                
               
        </Fragment>
    )
}

export default Email
