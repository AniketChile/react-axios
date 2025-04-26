import React from 'react';

function Header({ username }) {
  return (
    <div className="flex justify-between items-center bg-cyan-500 p-4 text-white">
      <h1 className="text-2xl font-bold">WorkWatch</h1>
      <div className="text-lg">{username}</div>
    </div>
  );
}

export default Header;
