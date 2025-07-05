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
      className="relative h-full flex items-center justify-center group"
    >
      {/* Profile Image */}
      <img
        src="/pic.png"
        alt="Ajel Mathew"
        className="relative left-4 z-10 md:h-[550px] sm:h-[550px] object-cover sm:translate-x-16 sm:-translate-y-4"
      />

      {/* Spinning Hexagon */}
      <div className="absolute -z-10 flex justify-center items-center">
        <div
          className="
            md:h-[400px] sm:h-[400px] w-auto text-cyan blur-md
            animate-[spin_10s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite]
          "
        >
          <PiHexagonThin className="w-full h-full text-cyan" />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroPic;

