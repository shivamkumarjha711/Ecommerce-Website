import {React, useState} from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import {useNavigate, useLocation} from 'react-router-dom';
import toast from 'react-hot-toast';
import '../../styles/AuthStyles.css';
import { useAuth } from '../../context/auth';

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

      // Form function
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {
              email, 
              password    // what you have to send in backend write in object->{}
            });   
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                });
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate(location.state || "/");
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
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
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
        <button 
            type="submit" className="btn btn-primary">Login</button>
        </form>
    </div>
</Layout>
  )
}

export default Login