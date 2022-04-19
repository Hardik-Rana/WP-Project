import React,{Fragment} from 'react'
import Navbar from '../Pages/Navbar';

const Registration = () => {
    
    return (
        <Fragment >
            <Navbar/>
            
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 op mt-5">

                        <span className="h1 d-flex justify-content-center mt-5 mb-3">Account<span className="text-danger mx-3">Register</span></span>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address <span className="text-danger">*</span></label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password <span className="text-danger">*</span></label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password <span className="text-danger">*</span></label>
                            <input type="password" className="form-control" id="exampleInputPassword2"/>
                        </div>
                        
                        <p className="d-flex justify-content-center"> <button type="submit" className="btn btn-dark d-flex ">Register</button></p>
                       
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                
               
                
        </Fragment>
    )
}

export default Registration
