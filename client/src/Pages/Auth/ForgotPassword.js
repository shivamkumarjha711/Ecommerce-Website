import {React, useState} from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import '../../styles/AuthStyles.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [answer, setAnswer] = useState("")
    const navigate = useNavigate();
  
        // Form function
    const handleSubmit = async (e) => {
        e.preventDefault();
            try {
              const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`, {
                email, 
                newPassword,
                answer    // what you have to send in backend write in object->{}
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
    <Layout title={'Forgot Password'}>
        <div className='form-container'>
        <h1>Reset Password</h1>
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
            type="text" 
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder='Enter Your Faviort sports' 
            className="form-control" 
            id="exampleInputEmail1" 
            required
            />
        </div>
        <div className="mb-3">
        <input 
            type="password" 
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder='Enter Your New Password' 
            className="form-control" 
            id="exampleInputPassword1" 
            required
            />
        </div>
        <button 
            type="submit" className="btn btn-primary">
            Reset
        </button>
        </form>
        </div>
    </Layout>
  )
}

export default ForgotPassword