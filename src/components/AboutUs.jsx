import React from "react";
import CountUp from "react-countup";

const AboutUs = () => {
  return (
    <div
      id="AboutUs"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-300"
    >
      <div className="mx-auto p-4 md:p-8">
        <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 p-4 md:p-8">
            <h1 className="text-4xl font-bold mb-4">Banu Design</h1>
            <p className="text-gray-700 mb-8 text-lg">
              Welcome to Bhanu Design, your premier destination for cutting-edge
              graphic design solutions. With a passion for creativity and a
              commitment to excellence, we specialize in delivering captivating
              graphic designs tailored to your unique needs. At Bhanu Design, we
              understand the power of visual communication. Whether you're
              seeking eye-catching logos, striking branding materials, or
              captivating marketing collateral, our team of talented designers
              is dedicated to bringing your vision to life. With years of
              experience in the industry, we pride ourselves on our ability to
              blend innovation with professionalism. From concept to execution,
              we work closely with our clients to ensure every design reflects
              their brand identity and resonates with their target audience. Our
              comprehensive graphic design services encompass a wide range of
              areas, including logo design, branding, print design, digital
              graphics, and more. Whatever your design requirements may be, you
              can trust Bhanu Design to deliver exceptional results that exceed
              your expectations. Discover the transformative power of graphic
              design with Bhanu Design. Contact us today to embark on a journey
              of creativity, innovation, and visual excellence.
            </p>
            <a href="#Service" className="text-red-500 font-semibold">
              OUR SERVICES &rarr;
            </a>
          </div>

          <div className="w-full md:w-1/2 bg-red-500 text-white flex flex-col items-center justify-center p-4 md:p-8">
            <div className="mb-4 md:mb-8 text-center">
              <div className="text-4xl md:text-7xl font-bold text-white mt-2">
                <CountUp end={100} duration={5} />+
              </div>
              <p className="text-xl md:text-3xl">Years in Business</p>
            </div>
            <div className="mb-4 md:mb-8 text-center">
              <div className="text-4xl md:text-7xl font-bold text-white mt-2">
                <CountUp end={100} duration={5} />+
              </div>
              <p className="text-xl md:text-3xl">Corporate Clients</p>
            </div>
            <div className="mb-4 md:mb-8 text-center">
              <div className="text-4xl md:text-7xl font-bold text-white mt-2">
                <CountUp end={100} duration={5} />+
              </div>
              <p className="text-xl md:text-3xl">Services</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-7xl font-bold text-white mt-2">
                <CountUp end={100} duration={5} />+
              </div>
              <p className="text-xl md:text-3xl">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
