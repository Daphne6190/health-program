import React from 'react';
import {Link} from 'react-router-dom';



function HomePage () {
 const NavBar = [
    {label: 'Home', path: '/'},
    {label: 'Logout', path:'/home'}
 ]

 return (
    <div className='container'>
        {/*Navbar*/}
        <nav className='navbar'>
            <div className='heading'>
                <h1>Health Program and Client Management</h1>
            </div>

            <div>
                {NavBar.map((item, index)=>(
                    <Link
                    key = {index}
                    to = {item.path}>
                        <span>{item.label}</span>
                    </Link>
                ))}
            </div>
        </nav>
       <div className='main-area'>
        <div className='card-health'>
            <Link 
            to = '/healthprogram'>
                <h2>Create Health Program</h2>
            </Link>
        </div>

        <div className='card-register'>
            <Link 
            to = '/registrationform'>
                <h2>Register Clients</h2>
            </Link>
        </div>

        <div className='card-enrol'>
            <Link 
            to = '/enrollmentform'>
                <h2>Enrol Clients</h2>
            </Link>
        </div>

    </div>
    </div>
 )
}

export default HomePage;