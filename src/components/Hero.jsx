import React from "react";
import TypewriterComponent from "typewriter-effect";
export default function Hero({}) {
  return (
    <section className="bg-blob">
      <div className="container bg-pattern py-24 mx-auto">
        <div className="flex py-10">
          <div className="w-full md:w-1/2 px-10 text-5xl font-body font-bold text-gray">
            <h1>Hi There!</h1>
            <h1>
              I'm{" "}
              <span className="text-primary font-code font-light">
                {" "}
                Mubbashar Ali
              </span>
            </h1>
            <h1>&</h1>
            <h1>
              I'm a
              <span className="font-code text-4xl font-light text-primary">
                <TypewriterComponent
                  options={{
                    strings: [
                      "Full Stack Developer",
                      "Mobile App Developer",
                      "Freelancer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
          </div>
          <div className="w-full md:w-1/2 px-10 text-5xl font-body font-bold text-gray">
            <img
              src="/images/profile.jpg"
              alt="Profile Photo"
              className="w-96 mx-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
