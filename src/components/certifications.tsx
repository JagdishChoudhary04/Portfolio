import { useEffect, useState } from "react";
import Image from "next/image";

const certificates = [
  {
    title: "Computer Networks",
    src: "/certificate-cn.png",
    type: "image",
  },
  {
    title: "Introduction to Python OpenCV",
    src: "/OpenCV Python_page-0001.jpg",
    type: "image",
  },
  {
    title: "Database Management System",
    src: "/certificate-dbms_page-0001.jpg",
    type: "image",
  },
  // Add more certificates here
];

export default function CertificationsSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % certificates.length);
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentCert = certificates[current];

  return (
    <section className="max-w-3xl mx-auto py-1 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold m-1 text-gray-900 dark:text-white">
        Certifications
      </h2>

      {/* Title */}
      <div className="text-xl font-bold mb-8 text-gray-900 dark:text-white text-center">
        {currentCert.title}
      </div>
      <div className="relative flex justify-center items-center">
        <div className="w-full h-64 sm:h-[500px] border rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-md">
          {currentCert.type === "pdf" ? (
            <iframe
              title={currentCert.title}
              src={currentCert.src}
              className="w-full h-full"
            />
          ) : (
            <Image
              src={currentCert.src}
              alt={currentCert.title}
              layout="fill" // or "responsive", depending on use-case
              className="object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
}
