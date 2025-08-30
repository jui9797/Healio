const AiAssistant = () => {
  return (
    <section className="px-6 lg:px-20 my-10 lg:my-28 bg-gray-100 py-4 lg:py-8">
      <h2 className="text-2xl lg:text-4xl font-bold text-teal-900 mb-10">
        Healio AI Assistant
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* lottie */}
        <div className="border-2">image</div>
        {/* input box */}
        <div className=" flex flex-col gap-4 border-2 p-4">
          <input
            placeholder="I have a headache, which doctor should I see?"
            className="bg-white  p-2 lg:p-4 rounded-lg"
          />
          <button className=" text-white bg-[#005350] font-bold p-4  rounded-lg cursor-pointer">
            Ask Healio AI
          </button>
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;
