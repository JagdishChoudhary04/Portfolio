"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="py-35 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Left Column (Text) */}
        <div className="flex-1 text-center md:text-left space-y-6 mt-10 md:mt-0">
          <p className="text-md text-gray-500 dark:text-gray-400 tracking-widest uppercase">Hi,</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            I&apos;m <span className="text-pink-600">Jagdish Choudhary</span><br />
            <span className="mt-4 block text-lg md:text-2xl font-medium text-gray-700 dark:text-gray-300">
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
            </span>
          </h1>

          <p className="text-gray-700 dark:text-gray-300 max-w-xl">
            Combining electronics with code, I develop smart systems — from responsive web apps to real-time IoT devices, using tools like React, Node.js, and Firebase.
          </p>

          {/* CV Button & Socials for Desktop only */}
          <div className="hidden md:flex flex-wrap gap-4 items-center justify-start">
            <a
              href="https://drive.google.com/file/d/11lAXgy_ULuAiCMZFQmMPlB9dDEpZkKC8/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              Download Resume
            </a>

            <div className="flex gap-4 mt-0">
              <a href="https://github.com/JagdishChoudhary04" target="_blank"><FaGithub size={24} /></a>
              <a href="https://www.linkedin.com/in/choudhary-jagdish" target="_blank"><FaLinkedin size={24} /></a>
              <a href="https://x.com/Jagdish_Extc" target="_blank"><FaTwitter size={24} /></a>
              <a href="https://www.instagram.com/jagdishchoudhary9268/" target="_blank"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div className="relative flex-1 flex flex-col items-center mt-12 md:mt-0">
          <div className="relative w-[340px] h-[340px] md:w-[380px] md:h-[380px] rounded-full flex items-center justify-center border-[8px] border-gradient-to-r from-purple-500 to-pink-500 shadow-xl">
            <Image
              src="/profile.jpg"
              alt="Jagdish Choudhary"
              width={500}
              height={500}
              className="rounded-full object-cover"
            />
          </div>

          {/* CV Button & Socials for Mobile only */}
          <div className="flex flex-col items-center mt-6 gap-4 md:hidden">
            <a
              href="https://drive.google.com/file/d/11lAXgy_ULuAiCMZFQmMPlB9dDEpZkKC8/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition"
            >
              Download Resume
            </a>

            <div className="flex gap-4">
              <a href="https://github.com/JagdishChoudhary04" target="_blank"><FaGithub size={24} /></a>
              <a href="https://www.linkedin.com/in/choudhary-jagdish" target="_blank"><FaLinkedin size={24} /></a>
              <a href="https://twitter.com/" target="_blank"><FaTwitter size={24} /></a>
              <a href="https://instagram.com/" target="_blank"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
