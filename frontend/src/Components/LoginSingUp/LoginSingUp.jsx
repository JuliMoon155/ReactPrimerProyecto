import React, { useState }from 'react';
import './LoginSingUp.css';

//imagenes
import mail_icon from '../Assets/mail.png';
import padlock_icon from '../Assets/padlock.png';
import user_icon from '../Assets/user.png';

const LoginSingUp = () => {

    const [action, setAction] = useState("Sign Up");


  return (
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="Name"/>
            </div>}
            <div className="input">
                <img src={mail_icon} alt="" />
                <input type="email" placeholder="Email"/>
            </div>
            <div className="input">
                <img src={padlock_icon} alt="" />
                <input type="password" placeholder="Password"/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSingUp