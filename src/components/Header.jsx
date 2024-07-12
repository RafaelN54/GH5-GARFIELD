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
    <nav className="bg-gradient-to-b from-orange-400 to-orange-300 p-4 flex flex-wrap justify-between items-center fixed top-0 left-0 right-0 z-50">
      <div className="text-white text-2xl font-bold">
      <Link to="/">
        <div className="flex flex-row">
        <div className='mx-2'>
          <img className="w-[50px]" src="/asset/logo.png"></img>
        </div>
        <div className='flex items-center ms-2'> Artisanship </div>
        </div>
        </Link>
      </div>
      <div className="flex flex-1 justify-center items-center mt-2 md:mt-0">
        <div className="flex space-x-2 w-[600px]">
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
        <Link to="/favorite" className="bg-white text-orange-600 p-2 rounded flex items-center">
            Favorites
          </Link>
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
