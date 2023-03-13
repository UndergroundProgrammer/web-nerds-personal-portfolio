import { BsGlobe2, BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
export default function Portfolio() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap">
          <div className="lg:w-1/3 sm:w-1/2 p-4 ">
            <div className="flex relative shadow-md hover:shadow-lg trasition-all duration-200">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/images/projects/getwork-app.png"
              />
              <div className="px-8 py-10 relative z-10 transition duration-200 w-full  bg-primary/90 opacity-0 hover:opacity-100 text-white">
                <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                  GetWork Freelance Marketplace
                </h1>
                <p>
                  A fully functional and trusted freelance marketplace with
                  payment protection.
                </p>

                <div className="mt-4">
                  <div className="flex shadow-md hover:shadow-lg trasition-all duration-200">
                    <a
                      href="https://getworkapp.vercel.app/"
                      className=" w-1/2 inline-flex items-center gap-2"
                      target={"_blank"}
                    >
                      <BsGlobe2 className="w-6 h-6" />
                      <span>Website</span>
                      <BiLinkExternal />
                    </a>
                    <a
                      href="https://github.com/UndergroundProgrammer/FYP-Freelance-Market-Place-main"
                      target={"_blank"}
                      className=" w-1/2 inline-flex items-center gap-2"
                    >
                      <BsGithub className="w-6 h-6" />
                      <span>Github</span>
                      <BiLinkExternal />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 ">
            <div className="flex relative shadow-md hover:shadow-lg trasition-all duration-200">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/images/projects/easy-transport.png"
              />
              <div className="px-8 py-10 relative z-10 transition duration-200 w-full  bg-primary/90 opacity-0 hover:opacity-100 text-white">
                <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                  EasyTransport Vehicle Rental Service
                </h1>
                <p>
                  A fully functional and trusted freelance marketplace with
                  payment protection.
                </p>

                <div className="mt-4">
                  <div className="flex">
                    <a
                      href="https://easy-transport.vercel.app/"
                      className=" w-1/2 inline-flex items-center gap-2"
                      target={"_blank"}
                    >
                      <BsGlobe2 className="w-6 h-6" />
                      <span>Website</span>
                      <BiLinkExternal />
                    </a>
                    <a
                      href="https://github.com/arslanahmadvirk/Easy-Transport"
                      target={"_blank"}
                      className=" w-1/2 inline-flex items-center gap-2"
                    >
                      <BsGithub className="w-6 h-6" />
                      <span>Github</span>
                      <BiLinkExternal />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative shadow-md hover:shadow-lg trasition-all duration-200">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/images/projects/travel-app.png"
              />
              <div className="px-8 py-10 relative z-10 transition duration-200 w-full  bg-primary/90 opacity-0 hover:opacity-100 text-white">
                <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                  TripFriend Mobile Application
                </h1>
                <p>
                  A fully functional and trusted freelance marketplace with
                  payment protection.
                </p>

                <div className="mt-4">
                  <div className="flex">
                    <a
                      href="https://travel-app-flash.vercel.app/"
                      className=" w-1/2 inline-flex items-center gap-2"
                      target={"_blank"}
                    >
                      <BsGlobe2 className="w-6 h-6" />
                      <span>Website</span>
                      <BiLinkExternal />
                    </a>
                    <a
                      href="https://github.com/UndergroundProgrammer/travel-app"
                      target={"_blank"}
                      className=" w-1/2 inline-flex items-center gap-2"
                    >
                      <BsGithub className="w-6 h-6" />
                      <span>Github</span>
                      <BiLinkExternal />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
