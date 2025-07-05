import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <a href="mailto:ajelmathew04@gmail.com" className='px-4 py-2 rounded-full text-white font-bold border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-400 hover:shadow-cyanShadow'>
        Hire Me
        <div className='sm:hidden md:block'>
        <LuArrowDownRight />
        </div>
    </a>
    
  );
};
export default NavbarBtn;