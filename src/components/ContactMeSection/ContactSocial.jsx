import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="  flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/ajel-mathew-41544a27a/"
         
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/ajel477"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.instagram.com/_ajelv.m_/"
        
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
