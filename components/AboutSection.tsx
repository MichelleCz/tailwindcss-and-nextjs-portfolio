import React from "react"
import Image from "next/image"

const backend = [
  { skill: "Laravel" },
  { skill: "PHP" },
  { skill: "C++" },
  { skill: "C#" },
  { skill: "Typescript" }
]

const frontend = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Bootstrap" },
  { skill: "Vue" },
  { skill: "React" }
]

const tools = [
  { skill: "AdobeXD" },
  { skill: "Figma" },
  { skill: "Webflow" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Michelle and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Software Developer & UI/UX Designer
              based in Pontianak, Indonesia.
            </p>
            <br />
            <p>
              I graduated from Swinburne University of Technology, Malaysia in 2025
              with a BS in Computer Science and have been working in the
              field ever since.
            </p>
            <br />
            <p>
            Creating captivating experiences for web and mobile platforms is something I'm enthusiastic about.  
            Although I have a strong grasp of back-end technology, my main areas of interest are front-end development and UI/UX design.  
            I'm constantly keen to learn new things and advance as a developer, and I've worked with a variety of tools and frameworks.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-3">Backend Development</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start mb-10">
              {backend.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <h1 className="text-2xl font-bold mb-3">Frontend Development</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start mb-10">
              {frontend.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <h1 className="text-2xl font-bold mb-3">Tools</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start mb-10">
              {tools.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
