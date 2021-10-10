import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user,logOut} = useAuth()
    return (
        <div>
            <Link to="/home">--Home--</Link>
            <Link to="/register">--Register--</Link>
            <Link to="/shipping">--Shipping--</Link>
            <Link to="/login">--Login--</Link>
            <span>{user.displayName}</span>
            {user?.email && <button onClick={logOut}>Log out</button>}
        </div>
    );
};

export default Header;