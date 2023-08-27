import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast'
import axios from 'axios'

const Profile = () => {
    // context
    const [auth, setAuth] = useAuth()
    // state
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    // get user data
    useEffect(() => {
        const {email, name, phone, address} = auth.user
        setName(name)
        setPhone(phone)
        setEmail(email)
        setAddress(address)
    }, [auth?.user])

    // Form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.put(`${process.env.REACT_APP_API}/api/v1/auth/profile`, {
                name, 
                email, 
                password, 
                phone,     // what you have to send in backend write in object->{}
                address,
            });  
            if (data?.error) {
                toast.error(data?.error)
            } else {
                setAuth({...auth, user: data?.updatedUser})
                let ls = localStorage.getItem("auth")
                ls = JSON.parse(ls)
                ls.user = data.updatedUser
                localStorage.getItem("auth", JSON.stringify(ls))
                toast.success("Profile Updated Successfully")
            }

        } catch (error) {
            console.log(error);
            toast.error('Something went wrong')   // toast ek object carry karta jisse ham message bhej sakte hai
        }
    };    

  return (
    <Layout title={"Your Profile"}>
    <div className='container-fluid p-3 m-3'>
        <div className='row'>
            <div className='col-md-3'>
                <UserMenu />
            </div>
            <div className='col-md-9'>
                <div className='form-container'>
                <h1>User Profile</h1>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter Your Name' 
                    className="form-control" 
                    id="exampleInputEmail1" 
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
                    disabled
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
                    />
                </div>
                <button 
                    type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
            </div>
        </div>
    </div>
</Layout>
  )
}

export default Profile