import { useEffect, useState } from "react";
import Image from "next/image";

const certificates = [
  {
    title: "Computer Networks",
    src: "/certificate-cn.png",
    type: "image",
  },
  {
    title: "Full-Stack Web Development",
    src: "/udemy.jpg",
    type: "image",
  },
  {
    title: "Database Management System",
    src: "/certificate-dbms_page-0001.jpg",
    type: "image",
  },
  {
    title: "Object Oriented Programming",
    src: "/oops.jpg",
    type: "image",
  },
  
];

export default function CertificationsSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % certificates.length);
  };

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
      <div className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">
        {currentCert.title}
      </div>

      <div className="relative flex justify-center items-center">
        <div className="w-full h-auto sm:h-[500px] border rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-md relative">
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
              layout="responsive"
              width={800}
              height={600}
              className="object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
}
