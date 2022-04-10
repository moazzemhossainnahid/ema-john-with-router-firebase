import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import google from '../../images/google-logo-icon.png';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [signInWithEmailAndPassword, user, error, loading] = useSignInWithEmailAndPassword(auth);

const handleEmailBlur = (event) => {
    setEmail(event.target.value);
}

const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
}

if(user){
    navigate('/shop');
}

const handleUserSignIn = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
    })

}

  return (
    <div className="formContainer">
      <div className="">
        <h3 className="formTitle">Login</h3>

        <form onSubmit={handleUserSignIn} action="">
          <div className="inputGroup">
            <label htmlFor="email">Email</label> <br />
            <input onBlur={handleEmailBlur} type="email" required name="email" id="email" />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Password</label> <br />
            <input onBlur={handlePasswordBlur} type="password" required name="password" id="password" />
          </div>
        <p className="" style={{color: 'red'}}>{error?.message}</p>
        {
            loading && <p>Loading...</p>
        }
          <input type="submit" value="Login" className="formSubmit" />
        </form>

        <p className="">
          New to Ema-John ?{" "}
          <Link to="/signup" className="formLink">
            Create an Account
          </Link>
        </p>

        <div className="orSec">
          <div className="">------------------</div>
          <h4> &nbsp; or &nbsp; </h4>
          <div className="">------------------</div>
        </div>

        <div className="authentication">
            <div className="authDiv">
                <img src={google} alt="" />
                <h3>Continue With Google</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
