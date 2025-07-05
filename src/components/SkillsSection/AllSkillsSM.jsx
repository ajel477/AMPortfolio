import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandMysql } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "React",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Python",
    icon: AiOutlinePython,
  },
  {
    skill: "MySQL",
    icon: TbBrandMysql,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12 lg:hidden">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
          <div className="flex flex-col items-center"  >
            <item.icon className="text-7xl text-orange" />
            <p className="text-white text-center mt-4">{item.skill}</p>
          </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;