"use client";

import Banners from "@/components/Banners";
import Products from "@/components/Products";
import { setAllProducts } from "@/redux/nextSlice";
import { StateProps } from "@/types/type";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  // const product = getProduct();
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state: StateProps) => state.next);

  console.log("allProduct", allProducts);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://fakestoreapiserver.reactbd.com/tech', {
        cache: "no-cache"
      });

      const ProductJson = await data.json();

      dispatch(setAllProducts(ProductJson));
    }

    // call the function
    const result = fetchData()
      .catch(console.error);;
  }, [dispatch]);

  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banners />
        <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products productData={allProducts} />
        </div>
      </div>
    </main>
  )
}
