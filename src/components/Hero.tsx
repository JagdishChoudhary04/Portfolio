"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
        Hi, I&apos;m Jagdish Choudhary
      </h1>

      <p className="mt-4 text-lg md:text-2xl font-medium text-gray-700 dark:text-gray-300">
        <Typewriter
          words={[
            "Full-Stack Developer",
            "Aspiring Software Engineer",
            "Electronics & Telecommunication Engineer",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </p>

      <div className="flex gap-6 mt-8 items-center">
        <a
          href="https://drive.google.com/file/d/11lAXgy_ULuAiCMZFQmMPlB9dDEpZkKC8/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all">
          Download Resume
        </a>
        <a
          href="https://github.com/JagdishChoudhary04"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-pink-500 transition">
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/choudhary-jagdish"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-pink-500 transition">
          <FaLinkedin size={28} />
        </a>
      </div>
    </div>
  );
}