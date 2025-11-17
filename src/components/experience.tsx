export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-extrabold mb-12 text-gray-900 dark:text-white">
        Experience
      </h2>

      {/* Nurture Xcel */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Software Developer Intern at Nurture Xcel — Oct 2025 – Present
        </h3>
        <ul className="list-disc list-inside space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <li>
            Designed and implemented a <strong>computer-vision detection pipeline</strong> using Python, OpenCV, and deep-learning models. Analyzed requirements, built modular vision components, and optimized detection logic to deliver a scalable and reliable solution.
          </li>
          <li>
            Developed a <strong>full-stack monitoring dashboard</strong> using Next.js, Tailwind CSS, and the MERN stack. Built dynamic UI components and backend APIs, improving system usability and enabling smoother data visualization.
          </li>
        </ul>
      </div>

      {/* Robokart */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Robotics Trainer Intern at Robokart — Dec 2024
        </h3>
        <ul className="list-disc list-inside space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <li>
            Led hands-on training sessions for <strong>100+ students</strong> under a government STEM initiative in Gujarat. Conducted engaging workshops on electronics, robotics, and innovation.
          </li>
          <li>
            Trained students on <strong>drones, digital microscopes, and microcontrollers</strong> through live demonstrations, fostering curiosity and building technical confidence.
          </li>
          <li>
            Conducted practical robotics and electronics training for school-level students, simplifying technical concepts using hands-on kits and real-time demonstrations.
          </li>
          <li>
            Guided learners in understanding microcontrollers, sensors, and basic robotics, helping them build foundational problem-solving and innovation skills.
          </li>
        </ul>
      </div>
    </div>
  );
}