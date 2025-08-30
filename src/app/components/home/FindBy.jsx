import Image from "next/image";

const FindBy = () => {
  return (
    <div className="my-10 lg:my-28 text-center">
      <h2 className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-8">
        Find by Speciality
      </h2>
      <p>
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:px-28 mt-4 lg:mt-8">
        <div className="flex flex-col items-center ">
          <Image
            src="/icons8-doctor-48.png"
            alt="icon-8"
            width={100}
            height={100}
            className="rounded-full border-2 border-gray-500 p-2"
          ></Image>
          <p>General physician</p>
        </div>
        <div className="flex flex-col items-center ">
          <Image
            src="/icons8-pediatrician-50.png"
            alt="icon-8"
            width={100}
            height={100}
            className="rounded-full border-2 border-gray-500 p-2"
          ></Image>
          <p>Pediatrician</p>
        </div>
        <div className="flex flex-col items-center ">
          <Image
            src="/icons8-dentist-64.png"
            alt="icon-8"
            width={100}
            height={100}
            className="rounded-full border-2 border-gray-500 p-2"
          ></Image>
          <p>Dentist</p>
        </div>
        <div className="flex flex-col items-center ">
          <Image
            src="/icons8-dermatologist-64.png"
            alt="icon-8"
            width={100}
            height={100}
            className="rounded-full border-2 border-gray-500 p-2"
          ></Image>
          <p>Dermatologist</p>
        </div>
        <div className="flex flex-col items-center ">
          <Image
            src="/icons8-gynecologist-64.png"
            alt="icon-8"
            width={100}
            height={100}
            className="rounded-full border-2 border-gray-500 p-2"
          ></Image>
          <p>Gynocologist</p>
        </div>
        <div className="flex flex-col items-center ">
          <Image
            src="/icons8-stomach-40.png"
            alt="icon-8"
            width={100}
            height={100}
            className="rounded-full border-2 border-gray-500 p-2"
          ></Image>
          <p>Gastroenterologist</p>
        </div>
      </div>
    </div>
  );
};

export default FindBy;
