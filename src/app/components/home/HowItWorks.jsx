import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="px-6 lg:px-20 py-12 bg-white lg:py-28">
      <h2 className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-8 text-center">
        How Healio Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-100 rounded-lg flex flex-col items-center text-center shadow-xl">
          <Image
            src="/search-doctor.png"
            alt="icon-8"
            width={50}
            height={50}
          ></Image>
          <h3 className="font-bold text-[20px] text-teal-900 my-2 lg:my-4">
            Search Doctor
          </h3>
          <p>Find doctors by specialty, location, and available date.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg flex flex-col items-center text-center shadow-xl">
          <Image src="/slot.png" alt="icon-8" width={50} height={50}></Image>
          <h3 className="font-bold text-[20px] text-teal-900 my-2 lg:my-4">
            Book Slot
          </h3>
          <p>Choose an available time slot and reserve your appointment.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg flex flex-col items-center text-center shadow-xl">
          <Image src="/consult.png" alt="icon-8" width={50} height={50}></Image>
          <h3 className="font-bold text-[20px] text-teal-900 my-2 lg:my-4">
            Visit & Consult
          </h3>
          <p>Visit the doctor and get professional consultation.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
