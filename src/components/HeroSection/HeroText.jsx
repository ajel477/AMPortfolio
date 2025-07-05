import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/variants";
import { useEffect, useState } from "react";
import HeroBtn from "./HeroBtn";

const TypingText = ({ text, speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.p
      className="text-white mt-3 text-lg font-medium font-mono"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.p>
  );
};

const HeroText = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
      className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center lg:pl-9"
    >
      <h2 className="lg:text-2xl sm:text-xl uppercase text-cyan">
        Full Stack React Developer
      </h2>
      <h1 className="md:text-[2.5rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange">
        Ajel Varghese Mathew
      </h1>
      
      {/* Typing effect starts here */}
      <TypingText text="“Mastering logic, crafting experiences — one line of code at a time.”" />
      
      <HeroBtn />
    </motion.div>
  );
};

export default HeroText;

