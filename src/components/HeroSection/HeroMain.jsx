import HeroGradient from "./HeroGradient";
import HeroPic from "./HeroPic";
import HeroText from "./HeroText";
import HeroBtn from "./HeroBtn";

const HeroMain = () => {
  return (
    <section className="w-full">
  <div className="max-w-[1280px] mx-auto px-5 sm:px-8 pt-32 md:pt-40 pb-16">
    <div className='flex md:flex-row sm:flex-col  max-w-[1200px] mx-auto justify-between items-center relative px-4'>
    <HeroText />
    <HeroPic />
    </div>
    <HeroGradient />
  </div>
</section>

  );
};
export default HeroMain;