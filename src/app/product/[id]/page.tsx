"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { HiShoppingCart } from 'react-icons/hi'
import { FaHeart } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { addToCart, addToFavorite } from '@/redux/nextSlice';
import FormattedPrice from '@/components/FormatterPrice';

const Page = ({ searchParams }: any) => {
  const [product, setProduct] = useState<any>({});
  const dispatch = useDispatch();
  // console.log(product);

  useEffect(() => {
    setProduct(searchParams);
  }, [searchParams]);
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-4 md:py-10">
      {product && (
        <div className='w-full grid md:grid-cols-3 gap-3 bg-gray-100 rounded-lg'>

          <div className="flex items-center justify-center bg-gray-200 rounded-lg relative group overflow-hidden">
            <Image
              src={product.image}
              alt="product image"
              width={500}
              height={500}
            />

            <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:-translate-x-2 transition-transform duration-300">
              <span
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: product._id,
                      brand: product.brand,
                      category: product.category,
                      description: product.description,
                      image: product.image,
                      isNew: product.isNew,
                      oldPrice: product.oldPrice,
                      price: product.price,
                      title: product.title,
                      quantity: 1,
                    })
                  )
                }
                className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300"
              >
                <HiShoppingCart />
              </span>

              <span
                onClick={() =>
                  dispatch(
                    addToFavorite({
                      _id: product._id,
                      brand: product.brand,
                      category: product.category,
                      description: product.description,
                      image: product.image,
                      isNew: product.isNew,
                      oldPrice: product.oldPrice,
                      price: product.price,
                      title: product.title,
                      quantity: 1,
                    })
                  )
                }
                className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300"
              >
                <FaHeart />
              </span>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-3 justify-center p-4">
            <p className="text-xs md:text-sm text-amazon_blue font-semibold -mb-3">
              {product.category}_{product.brand}
            </p>

            <h1 className="text-xl md:text-3xl tracking-wide font-semibold">
              {product.title}
            </h1>

            <p className="text-sm text-gray-600">
              {product.description}
            </p>

            <div>
              <p className="text-base text-gray-600 flex items-center gap-1">
                Price:
                <span className="text-lg text-amazon_blue font-semibold">
                  <FormattedPrice amount={product.price} />
                </span>

                <span className="ml-1 line-through">
                  <FormattedPrice amount={product.oldPrice} />
                </span>
              </p>

              <p className="text-sm text-gray-500 flex items-center gap-1">
                Your saved:{" "}
                <span>
                  <FormattedPrice amount={product.oldPrice - product.price} />
                </span>
              </p>

              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: product._id,
                      brand: product.brand,
                      category: product.category,
                      description: product.description,
                      image: product.image,
                      isNew: product.isNew,
                      oldPrice: product.oldPrice,
                      price: product.price,
                      title: product.title,
                      quantity: 1,
                    })
                  )
                }
                className="w-full md:w-96 h-12 bg-amazon_blue text-gray-200 hover:bg-amazon_yellow hover:text-amazon_blue duration-300 rounded-lg mt-5 text-base font-semibold"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Page