import React,{Fragment,useContext} from 'react'
import Alert from '../Pages/Alert';
import Navbar from '../Pages/Navbar';
import AlertContext from '../../context/alert/alertContext';
import LogContext from '../../context/log/logContext';
import {Link} from 'react-router-dom';
import { useState } from "react";
import $ from "jquery";

const Login = (props) => {
   
    const  alertContext=useContext(AlertContext);
    const  logContext=useContext(LogContext);
    const {setAlert} =alertContext;
    const {setUser, setLoading,loading} = logContext;

    const [exampleInputEmail1, setMail] = useState("");
    const [exampleInputPassword1, setPass] = useState("");
    const [result, setResult] = useState("");


    const handleChange = (e) => {
        setMail(e.target.value);
    };
    const handleChangePass = (e) => {
        setPass(e.target.value);
    };

    const handleSumbit = (e) => {
        e.preventDefault();

        setLoading(true);

        const form = $(e.target);

        if(exampleInputEmail1 === '' || exampleInputPassword1 === ''){
            setAlert("Please enter all fields! ",'danger','fa fa-exclamation-triangle');
            setLoading(false);
        }
        else{
            
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                if( data === "Invalid Credentials"){
                    setAlert(data,'danger','fa fa-exclamation-triangle');
                    setLoading(false);
                }

                else if( data === "Invalid Email")
                {
                    setAlert(data,'danger','fa fa-exclamation-triangle');
                    setLoading(false);
                }
                else{
                    setUser(data);
                    props.history.push('/log');
                    setLoading(false);
                }
            },
        });
    }
    
        };

    return (
        <Fragment >
        
        <Navbar/>
        <Alert/>

            { loading &&
                <div className="mt-5 d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }
           
                { !loading &&
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 op mt-5">

                        <span className="h1 d-flex justify-content-center mt-5 mb-3">Account<span className="text-danger mx-3">Login</span></span>
                    <form
                        action="https://jk-diamonds.000webhostapp.com/wp_practicals/Login.php"
                        method="post"
                        onSubmit={(event) => handleSumbit(event)}
                        >
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address <span className="text-danger">*</span></label>
                            <input type="email" className="form-control" 
                                    id="exampleInputEmail1" name="exampleInputEmail1" 
                                    value={exampleInputEmail1} aria-describedby="emailHelp" 
                                    onChange={(event) => handleChange(event)}
                                    />
                           
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password <span className="text-danger">*</span></label>
                            <input type="password" className="form-control" 
                                    id="exampleInputPassword1" name="exampleInputPassword1" 
                                    value={exampleInputPassword1} onChange={(event) => handleChangePass(event)}
                                    />
                        </div>

                       <p className="d-flex justify-content-center mt-3"> <button type="submit" className="btn btn-dark d-flex ">Login</button></p>
                       
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                
               
                
            }
        </Fragment>
    )
}
export default Login
