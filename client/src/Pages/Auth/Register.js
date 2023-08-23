import {React, useState} from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import '../../styles/AuthStyles.css'

function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [answer, setAnswer] = useState("")
    const navigate = useNavigate();

    // Form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {
                name, 
                email, 
                password, 
                phone,     // what you have to send in backend write in object->{}
                address,
                answer
            });   
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong')   // toast ek object carry karta jisse ham message bhej sakte hai
        }
    };

  return (
    <Layout title={"Register - Ecommerce App"}>
        <div className='form-container'>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter Your Name' 
                className="form-control" 
                id="exampleInputEmail1" 
                required
                />
            </div>
            <div className="mb-3">
            <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter Your Email' 
                className="form-control" 
                id="exampleInputEmail1" 
                required
                />
            </div>
            <div className="mb-3">
            <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter Your Password' 
                className="form-control" 
                id="exampleInputPassword1" 
                required
                />
            </div>
            <div className="mb-3">
            <input 
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder='Enter Your Phone' 
                className="form-control" 
                id="exampleInputEmail1" 
                required
                />
            </div>
            <div className="mb-3">
            <input 
                type="text" 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder='Enter Your Address' 
                className="form-control" 
                id="exampleInputEmail1" 
                required
                />
            </div>
            <div className="mb-3">
            <input 
                type="text" 
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder='What is your Favorire sports' 
                className="form-control" 
                id="exampleInputEmail1" 
                required
                />
            </div>
            <button 
                type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    </Layout>
  )
}

export default Register