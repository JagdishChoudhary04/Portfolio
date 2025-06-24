"use client";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava, FaCloud } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiJavascript, SiTypescript, SiFirebase, SiPostman, SiExpress, SiC, SiCplusplus, SiFramer, SiShadcnui } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { SiArduino, SiEagle } from "react-icons/si";

export default function Skills() {
  const skills = {
    "Programming Languages": [
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
    "Frontend Technologies": [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Shadcn/UI", icon: <SiShadcnui /> },
      { name: "Framer Motion", icon: <SiFramer /> },
    ],
    "Backend Technologies": [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "JWT Auth", icon: <FaCloud /> },
    ],
    "More Tools": [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman API", icon: <SiPostman /> },
      { name: "Firebase Realtime DB", icon: <SiFirebase /> },
      { name: "Vercel", icon: <FaCloud /> },
    ],
    "Embedded Systems / Hardware": [
      { name: "Arduino", icon: <SiArduino /> },
      { name: "ESP32", icon: <SiArduino /> },
      { name: "STM32", icon: <SiArduino /> },
      { name: "PCB Design", icon: <SiEagle /> },
      { name: "Eagle", icon: <SiEagle /> },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto py-20 m-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white m-6">
        Skills
      </h2>

      {Object.entries(skills).map(([category, items], index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 m-6">
            {category}
          </h3>
          <div className="flex flex-wrap gap-4 m-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full shadow hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm sm:text-base">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
