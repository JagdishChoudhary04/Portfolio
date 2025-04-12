
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur bg-white/70 dark:bg-black/70 z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          👨‍💻 Jagdish Choudhary
        </h1>
        <div className="flex items-center gap-4">
          <a
            href="#about"
            className="hover:text-blue-500 dark:hover:text-blue-400">
            About
          </a>
          <a
            href="#skills"
            className="hover:text-blue-500 dark:hover:text-blue-400">
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-blue-500 dark:hover:text-blue-400">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}
