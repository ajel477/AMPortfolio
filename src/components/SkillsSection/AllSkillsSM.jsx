import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandMysql } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/variants";

const skills = [
  {
    skill: "HTML/CSS",
    icon: FaHtml5,
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
    skill: "Node.js",
    icon: FaNodeJs,
  },
  {
    skill: "Express.js",
    icon: SiExpress,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "Python",
    icon: AiOutlinePython,
  },
  {
    skill: "MySQL",
    icon: TbBrandMysql,
  },
  {
    skill: "Git/GitHub",
    icon: FaGithub,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 my-12 lg:hidden">
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
            <item.icon className="text-6xl sm:text-7xl text-orange" />
            <p className="text-white text-center mt-4 text-sm sm:text-base">{item.skill}</p>
          </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;