import ContactMeForm from "./ContactMeForm";
import ContactText from "./ContactText";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <ContactText />
      <ContactMeForm />
    </div>
  );
};

export default ContactMeLeft;