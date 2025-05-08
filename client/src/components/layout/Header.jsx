import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-navy p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Magnificent Worldwide Marketing
        </Link>
        <nav className="space-x-4">
          <Link to="/login" className="text-gold hover:underline">Login</Link>
          <Link to="/register" className="text-white hover:underline">Register</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
