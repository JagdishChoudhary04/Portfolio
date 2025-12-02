import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";

export default function CodingProgress() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          Coding Progress
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch py-10">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6 h-full justify-between">

            {/* Total Questions Solved */}
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-md flex flex-col items-center justify-center text-center h-full">
              <h3 className="text-xl text-gray-700 dark:text-gray-300 font-medium mb-2">
                Total Questions Solved
              </h3>
              <p className="text-5xl font-bold text-indigo-600 dark:text-indigo-400">
                700+
              </p>
            </div>

            {/* Contests Given */}
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-md flex flex-col items-center justify-center text-center h-full">
              <h3 className="text-xl text-gray-700 dark:text-gray-300 font-medium mb-2">
                Total Contests Given
              </h3>
              <p className="text-5xl font-bold text-indigo-600 dark:text-indigo-400">
                15
              </p>
            </div>
          </div>

          {/* RIGHT: Coding Profiles */}
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-md text-center h-full flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
              Coding Profiles
            </h3>
            <div className="flex flex-col space-y-4 items-center text-base">
              <a
                href="https://leetcode.com/Jagdish_Choudhary/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-yellow-500 text-gray-700 dark:text-gray-200 transition"
              >
                <SiLeetcode className="text-xl" />
                <span>LeetCode</span>
              </a>

              <a
                href="https://auth.geeksforgeeks.org/user/jagdish01/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-green-600 text-gray-700 dark:text-gray-200 transition"
              >
                <SiGeeksforgeeks className="text-xl" />
                <span>GeeksforGeeks</span>
              </a>

              <a
                href="https://codeforces.com/profile/Jagdish-Choudhary"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-purple-600 text-gray-700 dark:text-gray-200 transition"
              >
                <FaGlobe className="text-xl" />
                <span>Codeforces</span>
              </a>

              <a
                href="https://www.codechef.com/users/jagdsh01"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-[#5B4638] text-gray-700 dark:text-gray-200 transition"
              >
                <FaGlobe className="text-xl" />
                <span>CodeChef</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}