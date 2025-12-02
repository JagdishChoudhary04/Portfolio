export default function Projects() {
  const projects = [
    {
      name: "⚡SmartWatts",
      desc: "An IoT-based energy monitoring system that tracks real-time voltage and current using ESP32 and sensors, displaying data on an OLED and a cloud dashboard via Firebase. Built with Next.js, Node.js, and MongoDB, it features usage analytics, cost estimation, remote on/off control, and CSV export—empowering users to monitor and reduce energy consumption efficiently.",
      link: "#",
    },
    {
      name: "🛩️ Mini Drone Project",
      desc: "Agile, lightweight drone designed for indoor flight, powered by brushed motors and a custom-designed PCB. Features a 12-channel radio controller, Arduino Nano, MPU6050 for stabilization, and a LiPo battery for efficient power delivery—combining embedded control with wireless communication for hands-on flight experimentation.",
      link: "#",
    },
    {
      name: "💡 Smart Street Light Controller",
      desc: "The Smart Street Light Controller is an IoT-based system designed to automate and monitor street lighting for improved energy efficiency and urban management. Using ESP8266, LDR, and motion sensors, the system intelligently switches lights based on real-time ambient conditions and human presence. A cloud-based dashboard built with Firebase allows administrators to remotely monitor light status, control individual units, and receive alerts for faults or failures across the network.",
      link: "#",
    },
    {
      name: "🎮Remote Controller",
      desc: "12-Channel Radio Controller is a custom-built long-range wireless controller designed for drones and robotics applications. Built using Arduino Nano, NRF24L01 transceiver modules, and custom-designed PCB, it supports up to 12 independent channels for precise multi-axis control. The system ensures low-latency communication, is highly configurable, and includes features like joystick calibration and LED feedback for transmission status.",
      link: "#",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white m-6">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8 m-6">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            className="p-6 rounded-lg shadow-lg dark:bg-gray-800 bg-white hover:scale-105 transition transform">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              {p.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{p.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
