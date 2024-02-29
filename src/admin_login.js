import './admin_login.css';
import {useState} from "react";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import LoginToggle from './LoginToggle';
import {Link,Redirect} from 'react-router-dom';
import Ad_home from './admin_home';


const Login2 = () => {

    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault()  ;  
              //doesnt let page refresh on submitting

        if(username=='myadmin' && password=='Myadmin2024' && email=='myadmin@gmail.com'){
            alert('Admin logged in successfully');
            // Set loggedIn to true to trigger the redirect
            setLoggedIn(true);
            
        }
        else{
            setError('Incorrect credentials');
            setLoggedIn(false);
        }


    }
    return (  
        <div className="login_page">

        
        <div className="outer2">
            <div className="toggle2">
            <LoginToggle></LoginToggle>

            </div>
        
            <h2 className="head2">Admin Login</h2>
            
            <form className="login2" onSubmit={handleSubmit}>
                <div className="input-container2">
                    <input className="login_ip2"
                        type="text"
                        placeholder="  Username"
                        required
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                <LuUser2 className="icon2" />

                </div>
        <div className="input-container2">
                <input className="login_ip2"
                    type="email"
                    placeholder="  Email"
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <MdOutlineEmail className="icon2" />

                </div>
                <div className="input-container2">
                <input className="login_ip2"
                    type="password"
                    placeholder="  password"
                    required
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <RiLockPasswordLine className="icon2" />

                </div>
                <button className="login_btn2">Login</button>
                {error  && <p className="error-message">{error}</p>}
                
                
            </form>
            {loggedIn && <Redirect to="/Ad_home" />}

    
            
        </div>

        </div>
        

    );
}
 
export default Login2;