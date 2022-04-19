import React,{Fragment}from 'react'
import Login from '../Auth/Login';
import Navbar from './Navbar';
const Home = () => {
    return (
        <Fragment>
            <Navbar/>
            <Login/>
        </Fragment>
    )
}

export default Home
