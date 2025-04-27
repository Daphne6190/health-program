import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import  axios from 'axios';

function RegistrationForm () {
    const [formData, setFormData] = useState({
        fullname:'',
        age:'',
        phone:'',
        email:'',
        photo: null
    })

    const handleChange = (e) => {
        setFormData ({
            ...formData,
            [e.target.name]: e.target.value
    })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading (true);
        setError (null);
        setSuccess (true);

        try{
            const formattedData = {
                ...formData,
                phone: parseInt(formData.phone),
            };

            const response = await axios.post('http://127.0.0.1:5000/api/registrationform',
                formattedData,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
            )

            setSuccess(true);
            setFormData({
                fullname:'',
                age:'',
                phone:'',
                email:'',
                photo: null,
            });
        }

        catch (err) {
            console.error('Error submitting form:', err);
            setError(err.response?.data?.message || 'An error occurred while submitting the form.');
          } finally {
            setLoading(false);
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
                        <input type="text"  name='fullname'placeholder='Full Name' className='form-input' onChange={handleChange} />
                        <input type="number" name='age' placeholder='Age' className='form-input' onChange={handleChange} />
                        <input type="number" name='phone' placeholder='Phone Number' className='form-input' onChange={handleChange} />
                        <input type="email" name='email' placeholder='Email' className='form-input' onChange={handleChange} />
                        <input type="file" name='photo' className='form-input' onChange={handleChange} />
                        <button type='submit' className='btn'>Register</button>
                    </form>
                </div>
            </div>
        </div>
     )
}
export default RegistrationForm;