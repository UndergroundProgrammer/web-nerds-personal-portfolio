import { BsFillSendFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export default function Contact() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container  py-24 mx-auto">
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary/50 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary/50 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  for="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary/50 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex items-center gap-2 mx-auto text-white border-0 py-2 px-8 focus:outline-none bg-primary rounded-full hover:bg-primary-dark text-lg">
                <span>Send</span>
                <BsFillSendFill />
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <span className="inline-flex gap-4">
                <a
                  href="mailto:mubasharali669266@gmail.com"
                  className="shadow-md p-2 cursor-pointer rounded-full focus:outline-none focus:outline-primary"
                >
                  <SiGmail className="w-6 h-6 hover:fill-primary" />
                </a>
                <a
                  href="https://github.com/UndergroundProgrammer"
                  className="shadow-md p-2 cursor-pointer rounded-full focus:outline-none focus:outline-primary"
                >
                  <AiFillGithub className="w-6 h-6 hover:fill-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mubashar-ali-33a9141bb/"
                  className="shadow-md p-2 cursor-pointer rounded-full focus:outline-none focus:outline-primary"
                >
                  <AiFillLinkedin className="w-6 h-6 hover:fill-primary" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
