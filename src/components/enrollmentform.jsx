import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import  axios from 'axios';

function EnrollmentForm () {
    const [formData, setFormData] = useState({
        clientid:'',
        programid:'',
        enrollmentdate:'',
        notes:''
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

            const response = await axios.post('http://127.0.0.1:5000/api/enrollment',
                formattedData,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
            )

            setSuccess(true);
            setFormData({
                clientid:'',
                programid:'',
                enrollmentdate:'',
                notes:''
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
                        <input type="number"  name='clientid'placeholder='Client Id' className='form-input' onChange={handleChange} />
                        <input type="number" name='programid' placeholder='Program Id' className='form-input' onChange={handleChange} />
                        <input type="date" name='enrollmentdate' placeholder='Enrollment Date' className='form-input' onChange={handleChange} />
                        <input type="text" name='notes' placeholder='Notes' className='form-input' onChange={handleChange} />
                        
                        <button type='submit' className='btn'>Enrol</button>
                    </form>
                </div>
            </div>
        </div>
     )
}
export default EnrollmentForm;