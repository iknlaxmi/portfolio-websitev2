import { useRef } from "react";
import emailjs from "@emailjs/browser";
import arrow from "../assets/right.png";

import linkedin from "../assets/social.png";
import github from "../assets/github.png";
import twitter from "../assets/twitter.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("env data is", import.meta.env.VITE_SERVICE_ID);
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    );
    e.target.reset();
  };

  return (
    <div id="contact" className="bg-[#252934]">
      <div
        className="w-0 h-0 mt-10 
        border-l-[200px] 
  border-t-[40px]
  border-r-[210px] 
        md:border-l-[480px] 
  md:border-t-[100px]
  md:border-r-[530px] 
  xl:border-l-[680px] border-l-transparent
  xl:border-t-[100px] border-t-white
  xl:border-r-[800px] border-r-transparent"
      ></div>
      <div className="mt-10 -ml-12">
        <h1 className="text-5xl md:text-4xl text-center mt-20 mb-2 text-white">
          CONTACT
        </h1>
        <hr className="w-[60px]  border-white border-2 m-auto " />
        <p className="text-[#06C2C9] text-center mt-5 text-sm xl:text-md">
          Have a question or want to work together?
        </p>
      </div>
      <div>
        <form
          ref={form}
          className="ml-[1rem] md:ml-[20rem] xl:ml-[28rem] mt-10"
          onSubmit={sendEmail}
        >
          <input
            className="bg-[#1E242C] m-2 md:w-[46%]  w-[90%] h-8 p-2 block text-white"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="bg-[#1E242C] m-2 md:w-[46%]  w-[90%] h-8 p-2 block text-white"
            type="text"
            name="email"
            placeholder="Enter email"
          />
          <textarea
            name="message"
            rows={7}
            className="bg-[#1E242C] m-2 md:w-[46%]  w-[90%] p-2 block text-white"
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="border-2 border-white text-white p-2 mt-4 ml-[16rem] md:ml-[13rem] xl:ml-[21rem] w-[7rem]"
          >
            SUBMIT
          </button>
        </form>
      </div>
      <div className="bg-[#E21A6D] w-10 h-12  ml-[46%]  mt-24 -mb-12 relative">
        <a href="#home">
          <img src={arrow} alt="arrow to go home page" />
        </a>
      </div>
      <div className="block h-[15rem] bg-[#1B242F]  mt-10">
        <footer>
          <div className="flex xl:ml-[35rem] md:ml-[23rem] ml-[6rem] pt-10 flex-row space-x-8">
            <div className="w-14   h-14 bg-[#262F38]">
              <a href="https://www.linkedin.com/in/naglakshmikongara/">
                <img src={linkedin} />
              </a>
            </div>
            <div className="w-14 h-14 bg-[#262F38] p-2">
              <a href="https://github.com/iknlaxmi">
                {" "}
                <img src={github} />
              </a>
            </div>
            <div className="w-14 h-14 bg-[#262F38] p-4">
              <a href="https://twitter.com/NagaLaxmimit">
                <img src={twitter} />
              </a>
            </div>
          </div>
          <div className="ml-[6rem] md:ml-[35rem] text-[#3d4857] mt-8">
            <p>
              NAGALAKSHMI{" "}
              <span className="text-[#A02458]">No &#169; copyright</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
