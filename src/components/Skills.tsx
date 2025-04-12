export default function Skills() {
  const skills = [
    "C",
    "C++",
    "Python",
    "JavaScript",
    "MongoDB",
    "Express",
    "React",
    "Node.js",
    "Postman",
    "Tailwind CSS",
    "Firebase",
    "Git",
    "Arduino",
    "ESP32",
    "PCB Design"
  ];

  return (
    <div className="max-w-4xl mx-auto py-20 m-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white m-6">
        Skills
      </h2>
      <div className="flex flex-wrap gap-4 m-6">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
