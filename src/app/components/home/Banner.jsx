import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-[#005350] py-10 lg:py-20">
      <div className=" grid grid-cols-1 px-2 md:px-8 lg:px-12 lg:grid-cols-2 items-center gap-10 ">
        <div className=" space-y-6">
          <h1 className="text-3xl lg:text-5xl font-bold text-white">
            Find the Right Doctor & Book Appointments Instantly
          </h1>
          <p className="text-lg text-white">
            Healio helps you connect with top specialists near you and book
            appointments with ease.
          </p>
          <button className=" bg-white text-[#005350] font-bold p-4 border-2 rounded-lg cursor-pointer">
            Find Doctors
          </button>
        </div>
        <div className="w-full relative h-[300px] lg:h-[450px]">
          <Image
            src="/healioBanner.jpg"
            alt="Doctor"
            fill
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
