import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
        Hi, I&apos;m Jagdish Choudhary
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300">
        I Build Full Stack Web Applications
      </p>
      <div className="flex gap-4 mt-6">
        <a
          href="https://drive.google.com/file/d/11lAXgy_ULuAiCMZFQmMPlB9dDEpZkKC8/view?usp=drive_link"
          target="_blank"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Download Resume
        </a>
        <a href="https://github.com/JagdishChoudhary04" target="_blank">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/choudhary-jagdish" target="_blank">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}
