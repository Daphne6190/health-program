import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HealthProgram() {
    const [formData, setFormData] = useState({
        programid:'',
        name:'',
        description:'',
        startdate:'',
        enddate:''
   });

   const [error, setError] = useState(null);
   const [success, setSuccess] = useState(false);

   const handleChange = (e)=> {
    setFormData ({
        ...formData,
        [e.target.name]: e.target.value
    })
   }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        setSuccess(true);
        setError(null)

        try{
            const formattedData = {
                ...formData,
                programid: parseInt(formData.programid),
            };
            const response = await axios.post ('http://127.0.0.1:5000/api/healthprogram',
            formattedData,

            {
                headers: {
                    'Content-Type': 'aplication.json'
                },
            }
        )

            setSuccess(true);
            setFormData({
                programid:'',
                name:'',
                description:'',
                startdate:'',
                enddate:''
            });
        }
        
        catch (err) {
            console.error('Error submitting form:', err);
            setError(err.response?.data?.message || 'An error occurred while submitting the form.');
          } 
    }

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
                <div className='form'>
                    <form action="" method='POST'>
                        <input type="number"  name='programid'placeholder='Program ID' className='form-input' onChange={handleChange} />
                        <input type="text" name='name' placeholder='Program Name' className='form-input' onChange={handleChange} />
                        <input type="text" name='description' placeholder='Description' className='form-input' onChange={handleChange} />
                        <input type="date" name='startdate' placeholder='Start Date' className='form-input' onChange={handleChange} />
                        <input type="date" name='enddate' placeholder='End Date' className='form-input' onChange={handleChange} />
                        <button className='btn' type='submit'>Create Program</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HealthProgram;