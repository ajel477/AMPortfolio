import React, { use } from "react";
import NavbarBtn from "./NavbarBtn";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { motion } from "framer-motion";
import { useScroll, useMotionValueEvent, } from "framer-motion";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
const [hidden, setHidden] = useState(false);

useMotionValueEvent(scrollY, "change", (latest) => {
  const previous = scrollY.getPrevious();
  if (previous < latest) {
    setHidden(true);  // scroll down → hide
  } else {
    setHidden(false); // scroll up → show
  }
});


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
     className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-2 mt-2">
      <motion.div
        initial={{ y: -100 }} 
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 10 }}
        className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-5 rounded-r-full rounded-l-full border-[0.5px] border-orange"
      >
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </motion.div>
      <div className="flex p-6 lg:hidden sm:block bg-black items-center justify-center rounded-full border-[0.5px] border-orange">
        <button
          className="text-2xl p-2 border border-orange rounded-full"
          onClick={toggleMenu}
        >
          <RxHamburgerMenu className="text-white" />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
