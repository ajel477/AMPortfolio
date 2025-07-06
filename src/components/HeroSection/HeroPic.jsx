import { PiHexagonThin } from "react-icons/pi";
import { fadeIn } from "../../framermotion/variants";
import { motion } from "framer-motion";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative flex items-center group justify-center w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] sm:mt-10 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] mx-auto"
    >
      {/* Profile Image inside hexagon */}
      <div className="absolute w-full h-full overflow-hidden clip-hexagon sm:left-14 sm:-bottom-10 sm:h-[400px] md:-bottom-4 md:left-14 md:h-[400px]  lg:left-20 lg:-bottom-14 lg:h-[550px]">
        <img
          src="/pic.png"
          alt="Ajel Mathew"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Spinning Hexagon Border */}
      <div className="absolute w-full h-full -z-10 animate-[spin_10s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite] blur-md">
        <PiHexagonThin className="w-full h-full text-cyan" />
      </div>
    </motion.div>
  );
};

export default HeroPic;

