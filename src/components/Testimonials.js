import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "Buyer",
      text:
        "Working with XYZ Realty was an absolute pleasure. They helped me find my dream home and made the entire process stress-free. I couldn't be happier with the results.",
    },
    {
      name: "Jenna Smith",
      role: "Seller",
      text:
        "I had the best experience selling my property through XYZ Realty. They truly understood my needs and guided me through every step of the way.",
    },
    {
      name: "Mike Johnson",
      role: "Investor",
      text:
        "XYZ Realty exceeded my expectations with their expertise and dedication. They helped me build a strong real estate portfolio that has proven to be a smart investment.",
    },
    {
      name: "Emily Williams",
      role: "Renter",
      text:
        "Renting through XYZ Realty was a breeze. They found me the perfect apartment within my budget, and the entire process was smooth and hassle-free.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-2 text-black">
            <span className="text-primary">Client Testimonials</span>
          </h2>
          <p className="text-lg md:text-xl font-light text-gray-600">
            What our clients are saying.
          </p>
        </div>

        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mb-4">
              <div className="p-6  rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <p className="text-gray-800 text-lg md:text-xl">
                  "{testimonial.text}"
                </p>
                <p className="mt-4 text-primary font-bold text-xl text-blue-900">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 font-extrabold">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
