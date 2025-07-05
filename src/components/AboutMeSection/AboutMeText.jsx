import { Link } from "react-scroll";

const links = [
  { link: "Projects", section: "projects" },
];

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        I am a final-year Computer Science Engineering student, deeply focused
        on mastering both Data Structures & Algorithms and the MERN stack. I
        believe in writing clean, optimized code and building meaningful,
        real-world applications. Through consistent learning and hands-on
        projects, I've developed strong problem-solving skills and a keen eye
        for full-stack architecture. I'm actively seeking opportunities where I
        can contribute, grow, and help build scalable, user-centric software
        solutions.
      </p>

      <Link
        to={links[0].section}
        spy={true}
        smooth={true}
        offset={-130}
        duration={500}
        className="md:self-start sm:self-center mt-10"
      >
        <button className="text-white border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center hover:bg-orange transition-all duration-500 cursor-pointer">
          {links[0].link}
        </button>
      </Link>
    </div>
  );
};

export default AboutMeText;

