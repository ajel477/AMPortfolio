import { LuNewspaper } from "react-icons/lu";

const HeroBtn = () => {
  return (
    <a href='https://drive.google.com/file/d/1QGZJmjdDmmzrbWmJnTonEQSyozSyDp5B/view?usp=sharing' className=' sm:justify-center md:justify-start flex items-center active:scale-95 active:shadow-inner transition-all duration-300'>
    <a href='https://drive.google.com/file/d/1QGZJmjdDmmzrbWmJnTonEQSyozSyDp5B/view?usp=sharing' className="flex items-center mt-1 md:pl-10 gap-2 px-12 py-2 rounded-full text-white font-bold border-cyan border bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-400 hover:shadow-cyanShadow ">
      My Resume
      <div>
        <LuNewspaper />
      </div>
    </a>
    </a>
    
  );
};

export default HeroBtn;
