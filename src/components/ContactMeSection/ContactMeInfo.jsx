import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactMeInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="ajelmathew04@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 6282 634 460" Image={FiPhone} />
      <SingleInfo text="Maharashtra, India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactMeInfo;