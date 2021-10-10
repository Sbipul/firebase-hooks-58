import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const {user} = useAuth()
    return (
        <div>
            <h1>{user?.displayName}</h1>
            <h1>Spiderman no way home</h1>
        </div>
    );
};

export default Home;