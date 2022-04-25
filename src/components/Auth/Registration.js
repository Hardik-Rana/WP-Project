import React,{Fragment,useState,useContext} from 'react'
import Alert from '../Pages/Alert';
import AlertContext from '../../context/alert/alertContext';
import LogContext from '../../context/log/logContext';
import Navbar from '../Pages/Navbar';
import $ from "jquery";

const Registration = (props) => {

    const  alertContext=useContext(AlertContext);
    const  logContext=useContext(LogContext);

    const {setAlert} =alertContext;
    const {setLoading,loading} = logContext;
    
    const [exampleInputEmail1, setMail] = useState("");
    const [exampleInputPassword1, setPass] = useState("");
    const [exampleInputPassword2, setPass2] = useState('');
    const [exampleInputUsername1, setUser] = useState("");
    const [result, setResult] = useState("");


    const handleChange = (e) => {
        setMail(e.target.value);
    };
    const handleChangePass = (e) => {
        setPass(e.target.value); 
    };
    const handleChangePass2 = (e) => {
        setPass2(e.target.value); 
    };
    const handleChangeUser = (e) => {
        setUser(e.target.value);
    };

    const handleSumbit = (e) => {
        e.preventDefault();
        setLoading(true);
        const form = $(e.target);

        if (exampleInputPassword1 !== exampleInputPassword2){
            setAlert("Password does not match!",'danger','fa fa-exclamation-triangle');
            setLoading(false);
        }
        else if(exampleInputUsername1 === '' || exampleInputEmail1 === '' || exampleInputPassword1 ==='' ){
            setAlert("Please enter all fields! ",'danger','fa fa-exclamation-triangle');
            setLoading(false);
        }
        else{
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                if(data === "User created Successfully")
                {
                    setAlert(data,'light','fa fa-check');
                    setTimeout(()=>props.history.push('/'),1800);
                    setLoading(false);
                    
                }

                else if( data === "Username is already taken"){
                    setAlert(data,'danger','fa fa-exclamation-triangle');
                    setLoading(false);
                }

                else {
                    setAlert("Something went wrong!",'danger','fa fa-exclamation-triangle');
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

                {loading &&  <div className="mt-5 d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>}

              { !loading &&
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 op mt-5">

                        <span className="h1 d-flex justify-content-center mt-5 mb-3">Account<span className="text-danger mx-3">Register</span></span>
                    <form
                        action="https://jk-diamonds.000webhostapp.com/wp_practicals/NewUser.php"
                        method="post"
                        onSubmit={(event) => handleSumbit(event)}
                    > 

                        <div className="mb-3">
                            <label htmlFor="username"  className="form-label">Username <span className="text-danger">*</span></label>
                            <input type="text" autoComplete='off' className="form-control" 
                                    id="exampleInputUsername1" name="exampleInputUsername1"
                                    value={exampleInputUsername1} aria-describedby="emailHelp" 
                                    onChange={(event) => handleChangeUser(event)}
                            />

                            </div>

                    
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address <span className="text-danger">*</span></label>
                            <input type="email" className="form-control" 
                                    id="exampleInputEmail1" name="exampleInputEmail1" 
                                    value={exampleInputEmail1} aria-describedby="emailHelp" 
                                    onChange={(event) => handleChange(event)}
                            />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password <span className="text-danger">*</span></label>
                            <input type="password" className="form-control" 
                                    id="exampleInputPassword1" name="exampleInputPassword1" 
                                    value={exampleInputPassword1} onChange={(event) => handleChangePass(event)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password <span className="text-danger">*</span></label>
                            <input type="password" className="form-control" id="exampleInputPassword2" 
                             name="exampleInputPassword2" value={exampleInputPassword2} onChange={(event) => handleChangePass2(event)} />
                        </div>
                        
                        <p className="d-flex justify-content-center"> <button type="submit" className="btn btn-dark d-flex ">Register</button></p>
                       
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                   
                </div>
                
               
              }
        </Fragment>
    )
}

export default Registration
