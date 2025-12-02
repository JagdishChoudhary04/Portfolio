"use client";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaCloud,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiPostman,
  SiExpress,
  SiC,
  SiCplusplus,
  SiFramer,
  SiShadcnui,
} from "react-icons/si";

export default function Skills() {
  const tools = [
    { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
    { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: "Java", icon: <FaJava className="text-[#007396]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
    { name: "Shadcn/UI", icon: <SiShadcnui className="text-white" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-[#0055FF]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#539E43]" /> },
    { name: "Express.js", icon: <SiExpress className="text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "JWT Auth", icon: <FaCloud className="text-[#0EA5E9]" /> },
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Postman API", icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: "Firebase Realtime DB", icon: <SiFirebase className="text-[#FFCA28]" /> },
    { name: "Vercel", icon: <FaCloud className="text-white" /> },
  ];

  return (
    <div className="max-w-4xl mx-auto py-14 m-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white m-6">
        Tools & Technologies
      </h2>

      <div className="flex flex-wrap gap-4 m-6">
        {tools.map((item, index) => (
          <div key={index} className="relative group">
            {/* Icon bubble */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-200 group-hover:-translate-y-1">
              <span className="text-2xl">{item.icon}</span>
            </div>

            {/* Tooltip ABOVE */}
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 rounded-full bg-gray-900 text-[11px] sm:text-xs text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 whitespace-nowrap">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}