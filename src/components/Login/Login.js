import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='formContainer'>
            <div className="">
            <h3 className='formTitle'>Login</h3>

                <form action="">
                <div className="inputGroup">
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" name="password" id="password" />
                    </div>

                    <input type="submit" value="Login" className='formSubmit' />
                </form>

<p className="">New to Ema-John  ? <Link to='/signup' className='formLink'>Create an Account</Link></p>

            </div>
        </div>
    );
};

export default Login;