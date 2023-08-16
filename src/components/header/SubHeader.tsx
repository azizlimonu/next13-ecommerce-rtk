"use client";

import React from 'react';
import { LuMenu } from "react-icons/lu";

const SubHeader = () => {
  const handleSignOut = () => {
    console.log("logout triggered");
  };

  const userInfo = null;

  return (
    <div className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center">

      <p className="flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        <LuMenu className="text-xl" /> All
      </p>

      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Todays Deals
      </p>

      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Customer Service
      </p>

      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Registry
      </p>

      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Gift Cards
      </p>

      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Sell
      </p>

      {userInfo && (
        <button
          onClick={handleSignOut}
          className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-red-600 hover:text-red-400 text-amazon_yellow cursor-pointer duration-300'
        >
          Sign Out
        </button>
      )}
    </div>
  )
}

export default SubHeader