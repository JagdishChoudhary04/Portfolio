// components/Footer.tsx
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-400 dark:text-gray-500">
      <div className="flex justify-center gap-6 mb-2">
       <a href="https://github.com/JagdishChoudhary04" target="_blank">
          <FaGithub size={24} />
       </a>
        <a href="https://www.linkedin.com/in/choudhary-jagdish" target="_blank">
          <FaLinkedin size={24} />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Jagdish Choudhary. Built with ❤️ using Next.js</p>
    </footer>
  );
}
