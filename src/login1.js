import './login1.css';
import SignUp from './Signup';
import {useState} from "react";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import {Link} from 'react-router-dom';
import LoginToggle from './LoginToggle';

const Login1 = () => {
    
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault()  ;        //doesnt let page refresh on submitting
    }
    return (  
        <div className="login_page">

        
        <div className="outer">
            <div className="toggle1">
            <LoginToggle></LoginToggle>

            </div>
        
            <h2 className="head1">Login</h2>
            
            
            <form className="login1" onSubmit={handleSubmit}>
                <div className="input-container1">
                    <input className="login_ip1"
                        type="number"
                        placeholder="  MIS"
                        required
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                <LuUser2 className="icon1" />

                </div>
        <div className="input-container1">
                <input className="login_ip1"
                    type="email"
                    placeholder="  Email"
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <MdOutlineEmail className="icon1" />

                </div>
                <div className="input-container1">
                <input className="login_ip1"
                    type="password"
                    placeholder="  password"
                    required
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <RiLockPasswordLine className="icon1" />

                </div>
                <button className="login_btn1">Login</button>
                
            </form>
            

            <div className="already1">
            <Link to="/Signup"><p>Not yet registered?Sign UP</p></Link>
            

            </div>
            
            
        </div>

        </div>
        


    );
}
 
export default Login1;