import React from 'react';
import logo from '../images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4'>
      <Image
        className='w-24'
        src={logo}
        alt='logo'
      />

      <p className='text-sm -mt-4'>
        All Rights Reserved {' '}
        <Link
          href='/'
          className='hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300'
        >
          @EccomerceApp
        </Link>
      </p>
    </div>
  )
}

export default Footer