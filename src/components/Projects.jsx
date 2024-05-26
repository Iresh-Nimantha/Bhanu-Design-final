import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import Tution from "../assets/servicesImges/a.jpg";
import AAA from "../assets/servicesImges/b.jpg";
import bbb from "../assets/servicesImges/c.jpg";
import ccc from "../assets/servicesImges/d.jpg";
import ddd from "../assets/servicesImges/e.jpg";
import eee from "../assets/servicesImges/f.jpg";
const Projects = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "Transform your online presence with our stunning web design services. Our expert designers create visually appealing and user-friendly websites that engage and captivate your audience.",
      image: eee,
    },
    {
      title: "Logo Design",
      description:
        "Make a lasting impression with a unique and memorable logo. Our creative team designs logos that perfectly reflect your brand identity and resonate with your target market.",
      image: Tution,
    },
    {
      title: "Branding",
      description:
        "Elevate your brand with our comprehensive branding services. From brand strategy to visual identity, we ensure your brand stands out and communicates your values effectively.",
      image: AAA,
    },
    {
      title: "Print Design",
      description:
        "Bring your ideas to life with high-quality print design. Whether it's brochures, business cards, or posters, our designs leave a lasting impact and convey your message clearly.",
      image: bbb,
    },
    {
      title: "Social Media Graphics",
      description:
        "Enhance your social media presence with eye-catching graphics. Our custom designs help you engage your followers and promote your brand across all social media platforms.",
      image: ccc,
    },
    {
      title: "Marketing Collateral",
      description:
        "Boost your marketing efforts with professionally designed collateral. From flyers to banners, we create materials that support your campaigns and drive results.",
      image: ddd,
    },
  ];

  return (
    <div id="Service" className="mt-8 mb-8 pb-8 bg-gray-200 ">
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full ">
        <div className=" flex flex-col w-full p-4 md:p-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-700 mb-8 text-lg relative">
            "Our services epitomize quality. With a keen eye for detail and a
            dedication to excellence, we deliver exceptional results that
            surpass expectations. Trust us to elevate your project with
            unmatched quality and professionalism."
          </p>
        </div>
      </div>
      <div
        className=" grid grid-cols md:grid-cols-3 justify-center gap-4 m-auto pt-8
"
      >
        {services.map((service, index) => (
          <Card
            key={index}
            className="w-80 md:w-96 h-[30em] mb-8  m-auto border-2 border-black"
          >
            <CardHeader
              color="blue-gray"
              className="relative m-auto  w-full t h-full r "
            >
              <img
                src={service.image}
                alt={`${service.title}-image`}
                className="object-cover w-full h-full"
              />
            </CardHeader>
            <CardBody className=" relative top-6 mb-8">
              <Typography variant="h5" color="blue-gray" className="mb-4 ">
                {service.title}
              </Typography>
              <Typography>{service.description}</Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
