import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-40">
      <div className="w-45 h-45 sm:w-40 sm:h-40 md:w-70 md:h-70 lg:w-45 lg:h-45 xl:w-42 xl:h-42 rounded-full overflow-hidden border-4 border-gray-500 shadow-xl transition-transform duration-300 hover:scale-105"> 
        <Image
          src="/profile.jpg"
          alt="Jagdish Choudhary"
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}