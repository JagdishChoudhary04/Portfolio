"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen px-4">
      {/* Profile Image on top center */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-40">
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-gray-500 shadow-xl transition-transform duration-300 hover:scale-105">
          <Image
            src="/profile.jpg" // Image should be in /public/profile.jpg
            alt="Jagdish Choudhary"
            width={208}
            height={208}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Name and typing effect */}
      <h1 className="mt-56 text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
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

      {/* Resume and Social Icons */}
      <div className="flex gap-6 mt-8 items-center">
        <a
          href="https://drive.google.com/file/d/11lAXgy_ULuAiCMZFQmMPlB9dDEpZkKC8/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all"
        >
          Download Resume
        </a>
        <a
          href="https://github.com/JagdishChoudhary04"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-pink-500 transition"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/choudhary-jagdish"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-pink-500 transition"
        >
          <FaLinkedin size={28} />
        </a>
      </div>
    </div>
  );
}
