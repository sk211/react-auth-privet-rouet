import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import "./Header.css"
const Header = () => {
    const {user, logOut } = useAuth()
    return (
        
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/shiping">Shiping</Link>
            <Link to="./regester">regester</Link>
            <Link to="./order">Order</Link>
            <Link to="./login">Login</Link>
            <span className="text-light">{user.displayName}</span>
            {
                user?.email &&
                <button  onClick={logOut}>Logout</button> 
                
                    

            }
            
        </div>
    );
};

export default Header;