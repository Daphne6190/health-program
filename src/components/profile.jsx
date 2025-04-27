import React, {useState}from 'react';
import { Link } from 'react-router-dom';

function Profile (){
    const [searchQuery, setSearchQeury] = useState('');
    const [clientData, setClientData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const NavBar = [
        {label: 'Home', path: '/'},
        {label: 'Logout', path:'/home'}
     ]
    
    return(
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
            <div className='searchbar'>
                <input type="text"
                className='searchbar-input'
                placeholder='Search a Client...'
                 />
            </div>

            <div className='profile-card'>
                
            </div>
        </div>
        </div>

        
    )
}

export default Profile;