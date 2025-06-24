"use client";
import React from "react";
import { FaGlobe, FaCodechef } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const CodingAchievements = () => {
  return (
    <section className="max-w-4xl mx-auto py-20">
      <div className="max-w-7xl mx-auto py-20" >
        <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white">
            Coding Progress
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto py-20">
          {/* Left: Total Questions Solved */}
          <div className="w-full bg-gray-100 dark:bg-gray-800 p-10 rounded-2xl shadow-md flex flex-col items-center justify-center">
            <h3 className="text-xl text-gray-700 dark:text-gray-300 font-medium mb-2">
              Total Questions Solved
            </h3>
            <p className="text-5xl font-bold text-indigo-600 dark:text-indigo-400">
              300+
            </p>
          </div>

          {/* Right: Coding Profiles */}
          <div className="w-full bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
              Coding Profiles
            </h3>
            <div className=" items-center flex flex-col space-y-4">
              {/* LeetCode */}
              <a
                href="https://leetcode.com/Jagdish_Choudhary/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-yellow-500 text-gray-700 dark:text-gray-200 transition"
              >
                <SiLeetcode className="text-2xl" />
                <span>LeetCode</span>
              </a>

              {/* GeeksforGeeks */}
              <a
                href="https://auth.geeksforgeeks.org/user/jagdish01/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-green-600 text-gray-700 dark:text-gray-200 transition"
              >
                <SiGeeksforgeeks className="text-2xl" />
                <span>GeeksforGeeks</span>
              </a>

              {/* Codeforces */}
              <a
                href="https://codeforces.com/profile/Jagdish-Choudhary"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-purple-600 text-gray-700 dark:text-gray-200 transition"
              >
                <FaGlobe className="text-2xl" />
                <span>Codeforces</span>
              </a>

              {/* CodeChef */}
              <a
                href="https://www.codechef.com/users/jagdsh01"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-[#5B4638] text-gray-700 dark:text-gray-200 transition"
              >
                <FaGlobe className="text-2xl" />
                <span>CodeChef</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingAchievements;
