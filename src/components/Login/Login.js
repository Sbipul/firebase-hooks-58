import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {googleSignIn,gitSignIn} = useAuth()
    return (
        <div>
            <h1>Please Login</h1>
            <button onClick={googleSignIn}>Google signin</button>
            <br />
            <button onClick={gitSignIn}>Github signin</button>
            <br />
            <Link to="/register">New user</Link>
        </div>
    );
};

export default Login;