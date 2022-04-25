import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar bg-dark links'>
         <h1 className='text-white'> &nbsp;&nbsp;IT Logger</h1>
       
         <ul>
            <li>
               <Link to='/registration'>Registration</Link>
            </li>

            <li>
              <Link to='/'>Login</Link>
            </li>

            <li>
              <Link to='/about'>About</Link>
            </li>
        </ul>
    </div>
    )
}

export default Navbar
