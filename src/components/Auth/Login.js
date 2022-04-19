import React,{Fragment} from 'react'
import {Link} from 'react-router-dom';

const Login = () => {
   
    return (
        <Fragment >
        
            
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 op mt-5">

                        <span className="h1 d-flex justify-content-center mt-5 mb-3">Account<span className="text-danger mx-3">Login</span></span>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address <span className="text-danger">*</span></label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                           
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password <span className="text-danger">*</span></label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>

                        <div className="forgot_pass" >
                      <Link to="/password" > <p className="text-center text-muted">Forgot Password?</p> </Link>
                      </div>

                       <p className="d-flex justify-content-center mt-3"> <button type="submit" className="btn btn-dark d-flex ">Login</button></p>
                       
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                
               
                
        </Fragment>
    )
}
export default Login
