import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
  return (
    <nav className="bg-orange-400 p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">Artisanship</div>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Khilaf apa hari ini?"
          className="p-2 rounded"
        />
        <button className="bg-white text-orange-600 p-2 rounded">Search</button>
      </div>
      <div className="flex space-x-4">
      </div>
      <i className="fa fa-shopping-cart" style={{ fontSize: '36px', color: 'white' }}></i>
    </nav>
  );
}

export default Header;
