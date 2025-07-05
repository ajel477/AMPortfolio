import NavbarMain from "./components/Navbar/NavbarMain";
import HeroMain from "./components/HeroSection/HeroMain";
import HeroGradient from "./components/HeroSection/HeroGradient";
import SubHero from "./components/HeroSection/SubHero";
import AboutMeMain from "./components/AboutMeSection/AboutMeMain";
import SkillsMain from "./components/SkillsSection/SkillsMain";
import SubSkills from "./components/SkillsSection/SubSkills";
import ProjectsMain from "./components/ProjectsSection/ProjectsMain";
import ContactMeMain from "./components/ContactMeSection/ContactMeMain";
import FooterMain from "./components/FooterSection/FooterMain";

const App = () => {
  return ( 
  <main className='font-body overflow-hidden'>
    <NavbarMain />
    <HeroMain />
    <HeroGradient />
    <SubHero />
    <AboutMeMain />
    <SkillsMain />
    <SubSkills />
    <ProjectsMain />
    <ContactMeMain />
    <FooterMain />
  </main>
  );
};

export default App;