import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, useNavigate } from 'react-router-dom';

function Header({ isAuthenticated, onSignOut }) {
  const navigate = useNavigate();

  const handleLogOut = () => {
    onSignOut();
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-b from-orange-400 to-orange-300 p-4 flex flex-wrap justify-between items-center">
      <div className="text-white text-2xl font-bold">
        <div className="flex flex-row">
        <Link to="/">
        <img className="w-[50px]" src="../../public/asset/logo.png"></img>
          Artisanship
        </Link>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center mt-2 md:mt-0">
        <div className="flex space-x-4 max-w-lg w-full">
          <input
            type="text"
            placeholder="Khilaf apa hari ini?"
            className="p-2 rounded w-full"
          />
          <button className="bg-white text-orange-600 p-2 rounded">Search</button>
        </div>
      </div>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <Link to="/cart" className="fa fa-shopping-cart flex items-center" style={{ fontSize: '30px', color: 'white' }}></Link>
        {isAuthenticated ? (
          <button
            onClick={handleLogOut}
            className="bg-white text-orange-600 p-2 rounded flex items-center"
          >
            Log Out
          </button>
        ) : (
          <Link to="/signin" className="bg-white text-orange-600 p-2 rounded flex items-center">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
