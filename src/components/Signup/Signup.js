import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import google from '../../images/google-logo-icon.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    // const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate('/');
    }

    const handleCreateUser = (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            setError("Password Doesn't Match");
            // setSuccess('');
            return;
        }else{
            // setSuccess('Password Matched..!');
            setError('');
        };

        if(password.length < 8){
            setError('Password Must be At Least 8 Characters..!')
            return;
        }

        createUserWithEmailAndPassword(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
    }


    return (
        <div className="formContainer">
      <div className="">
        <h3 className="formTitle">Signup</h3>

        <form onSubmit={handleCreateUser} action="">
          <div className="inputGroup">
            <label htmlFor="email">Email</label> <br />
            <input onBlur={handleEmailBlur} type="email" required name="email" id="email" />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Password</label> <br />
            <input onBlur={handlePasswordBlur} type="password" required name="password" id="password" />
          </div>
          <div className="inputGroup">
            <label htmlFor="confirm-password">Confirm Password</label> <br />
            <input onBlur={handleConfirmPasswordBlur} type="password" required name="confirm-password" id="confirm-password" />
          </div>
            <p style={{color: 'red'}} className="">{error}</p>
            {/* <p style={{color: 'green'}} className="">{success}</p> */}
          <input type="submit" value="Signup" className="formSubmit" />
        </form>

        <p className="">
          Already Have an Account ?{" "}
          <Link to="/login" className="formLink">
            Login Here
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

export default Signup;