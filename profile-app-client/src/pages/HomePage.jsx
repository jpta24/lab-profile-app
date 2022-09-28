import React from 'react';
import { Link } from 'react-router-dom';



const HomePage = () => {
  return (
    <div>
      <Link to={"/signup"}> Sign Up</Link>
      <Link to={"/login"}> Login</Link>
      <Link to={"/profile"}> Profile</Link>
    </div>
  );
};

export default HomePage;
