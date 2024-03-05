import React from "react";
import { motion } from "framer-motion";
import Items from "./Items";

const Main = () => {
  return (
    <>
      <section className="relative h-screen overflow-x-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center z-0"
          style={{
            backgroundImage: "url(./group-three-friends-enjoying-burgers.jpg)",
          }}
        ></div>
        <div className="sm:pl-32 pt-40 pl-8 sm:pt-60 relative z-10 ">
          <motion.h1
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="text-7xl uppercase text-white drop-shadow-2xl"
          >
            Food Shop
          </motion.h1>

          <motion.p
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white drop-shadow-2xl"
          >
            Give yourself a tasty treat.
          </motion.p>
        </div>

        <motion.a
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ delay: 0.4 }}
          href="#menu"
          className="block mx-8 my-8 sm:mx-32 sm:my-8 w-40 bg-green-500 text-white text-center border-none rounded-lg py-4 cursor-pointer transition-colors hover:bg-green-700"
        >
          Explore Menu
        </motion.a>
      </section>
          <Items />
    </>
  );
};

export default Main;
