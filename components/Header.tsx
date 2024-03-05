import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="h-12 px-4 py-8 sm:p-8 flex justify-between items-center shadow">
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        className="flex items-center"
      >
        <Image
          src={"/food-logo.svg"}
          alt="logo"
          width={500}
          height={500}
          className="w-12 h-12"
        />
      </motion.div>

      <div className="flex items-center text-black text-sm sm:text-base gap-4 sm:gap-10">
        <Link href="/">Home</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <Link href="/">
          <Image
            src={"/shopping-cart.svg"}
            alt="cart"
            width={500}
            height={500}
            className="h-6 w-5 sm:w-8 sm:h-8"
          />
        </Link>

        <Link href={"#"}>
          <Image
            src={"/user.svg"}
            alt="user"
            width={500}
            height={500}
            className="h-6 w-5 sm:w-8 sm:h-8"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
