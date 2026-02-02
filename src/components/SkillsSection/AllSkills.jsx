import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandMysql } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
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

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
              </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;