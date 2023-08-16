"use client";

import logo from '../../images/logo.png';
import cartIcon from '../../images/cartIcon.png';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SlLocationPin } from 'react-icons/sl';
import { HiOutlineSearch } from 'react-icons/hi';
import { BiCaretDown } from 'react-icons/bi';

const Header = () => {
  // Get User Session soon with next-auth
  const [allData, setAllData] = useState([]);
  // get selector from redux 

  // setAllData side-effect
  // sideeffect for session user

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    console.log("query", searchQuery);
  };

  // useEffect(() => {
  //   const filtered = allData.filter((item: StoreProduct) =>
  //     item.title.toLocaleLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setFilteredProducts(filtered);
  // }, [searchQuery]);

  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        {/* Logo */}
        <Link
          href='/'
          className='px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]'
        >
          <Image
            className='w-28 object-cover mt-1'
            src={logo}
            alt='logo'
          />
        </Link>

        {/* Delivery */}
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
          <SlLocationPin />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">
              Indonesia
            </p>
          </div>
        </div>

        {/* SearchBar */}
        <div className='flex-1 h-10 hidden md:inline-flex items-center justify-between relative'>
          <input
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
            type="text"
            placeholder="Search Here"
            onChange={handleSearch}
            value={searchQuery}
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>

          {/* Search Field */}
          {searchQuery && (
            <div className="absolute left-0 top-12 w-full mx-auto max-h-96 bg-gray-200 rounded-lg overflow-y-scroll cursor-pointer text-black">
              {filteredProducts.length > 0 ? (
                <div>
                  {/* {searchQuery && filteredProducts?.map((item) => (
                    <Link
                      key={item._id}
                      className="w-full border-b-[1px] border-b-gray-400 flex items-center gap-4"
                      href={{
                        pathname: `/product/${item._id}`,
                        query: {
                          _id: item._id,
                          brand: item.brand,
                          category: item.category,
                          description: item.description,
                          image: item.image,
                          isNew: item.isNew,
                          oldPrice: item.oldPrice,
                          price: item.price,
                          title: item.title,
                        },
                      }}
                      onClick={() => setSearchQuery("")}
                    >
                      <SearchProducts item={item} />
                    </Link>
                  ))} */}
                </div>
              ) : (
                <div className="bg-gray-50 flex items-center justify-center py-10 rounded-lg shadow-lg">
                  <p className="text-xl font-semibold animate-bounce">
                    Nothing is matches with your search keywords. Please try
                    again!
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* User Sign */}
        <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
          <p>Hello, Sign In</p>
          <p className="text-white font-bold flex items-center">
            Account & Lists{" "}
            <span>
              <BiCaretDown />
            </span>
          </p>
        </div>

        {/* Favorite */}
        <Link
          href='/favorite'
          className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <p>Marked</p>
          <p className="text-white font-bold">& Favorite</p>
        </Link>

        {/* Cart */}
        <Link
          href="/cart"
          className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <Image
            className="w-auto object-cover h-8"
            src={cartIcon}
            alt="cartImg"
          />
          <p className="text-xs text-white font-bold mt-3">Cart</p>
          <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
            0
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Header;