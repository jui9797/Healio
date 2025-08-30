"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ClientReviews() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      review:
        "The doctors here are extremely professional and caring. I felt very comfortable throughout my treatment.",
    },
    {
      name: "Michael Smith",
      role: "Patient",
      review:
        "Amazing service! The staff was friendly, and I didn’t have to wait long. Highly recommended!",
    },
    {
      name: "Emily Davis",
      role: "Patient",
      review:
        "Best healthcare experience I’ve had. The facilities are modern, and the doctors listen carefully.",
    },
    {
      name: "David Lee",
      role: "Patient",
      review:
        "I really appreciate the quick response and excellent support from the staff. The environment is very welcoming.",
    },
    {
      name: "Sophia Martinez",
      role: "Patient",
      review:
        "From appointment booking to consultation, everything was smooth and hassle-free. Great experience overall!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section className="bg-gray-100 py-4 lg:py-8 my-10 lg:my-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl lg:text-4xl font-bold text-teal-900 mb-10">
          What Our Clients Say
        </h2>

        <Slider {...settings}>
          {reviews.map((item, index) => (
            <div key={index} className="px-6">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <p className="text-gray-600 italic mb-6">“{item.review}”</p>
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h4>
                <span className="text-sm text-gray-500">{item.role}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
