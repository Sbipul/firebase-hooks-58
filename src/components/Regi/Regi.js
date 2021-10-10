import React from 'react';
import { Link } from 'react-router-dom';

const Regi = () => {
    return (
        <div>
            <h1>Please Register</h1>
            <form>
                <input type="text" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Regi;