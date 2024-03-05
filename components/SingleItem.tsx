

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {
  itemNum: string;
  burgerSrc: string;
  price: number;
  title: string;
};

const SingleItem = ({ itemNum, burgerSrc, price, title }:Props) => {
  return (
    <motion.div
      className="bg-white w-full sm:w-[30%] p-4 rounded-3xl shadow overflow-hidden my-4 sm:m-4"
      whileHover={{ scale: 1.1 }}
    >
      <div className="bg-[#272626] flex items-center justify-center py-4 text-white font-semibold rounded-t-lg">
        {title}
      </div>
      <main className="p-4">
        <Image
          src={burgerSrc}
          alt={itemNum}
          className="w-full h-56 object-cover"
          width={2000}
          height={2000}
        />
        <h5 className="text-xl font-bold mt-4">₹{price}</h5>
        <p className="text-base uppercase">{title}</p>
        <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded-lg w-full hover:bg-green-700">
          Buy Now
        </button>
      </main>
    </motion.div>
  );
};

export default SingleItem;

