import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_k8huwfl", "template_z9fqmid", form.current, {
        publicKey: "gYXpbunmidcCfc5du",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Succesfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="text-white h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="text-white h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          type="text"
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className="text-white rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl 
             hover:bg-darkCyan bg-cyan transition-all duration-150 
             active:scale-95 active:shadow-inner">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactMeForm;