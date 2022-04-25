import React, {useReducer} from "react";
import  LogContext  from "./logContext";
import logReducer from "./logReducer";

import{
    SET_USERNAME,CLEAR_USERNAME,SET_LOADING
  } from "../types";

const LogState=props=>{

    const initialState={
        username:null,
        loading:false
    }
    const [state,dispatch]=useReducer(logReducer,initialState);

    const setUser=(user)=>{

      dispatch({type:SET_USERNAME, payload:user});
    }
    
    const clearUser=()=>{

      dispatch({type:CLEAR_USERNAME});
    }

    const setLoading=(flag)=>{
      dispatch({type:SET_LOADING, payload:flag});
    }


 
    return <LogContext.Provider 
    value={
        {  username:state.username,
          loading:state.loading,
          setUser,clearUser,setLoading
        }
    } 
    >
      {props.children}

    </LogContext.Provider>
}

export default LogState;