import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";


const projects = [
  {
    name: "GitHub Profile Finder",
    year: "Mar 2024",
    align: "right",
    image: "./gitfindpic.png",
    link: "https://github.com/ajel477/github-profile-finder",
  },
  {
    name: "Todo List WebApp",
    year: "Nov 2023",
    align: "left",
    image: "./todopic.png",
    link: 'https://todo-list-app-lyart-nu.vercel.app',
  },
  {
    name: "FitGo Website",
    year: "Jan 2025",
    align: "right",
    image: "./fitgopic.png",
    link: "https://fit-go-theta.vercel.app",
  },
  {
    name: "CyberBullying Model",
    year: "April 2025",
    align: "left",
    image: "./mlpic.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <div>
        <ProjectsText />
      </div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;