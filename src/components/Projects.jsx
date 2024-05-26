import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import hand_bill from "../assets/servicesImges/handBill.jpg";
import Banner_design from "../assets/servicesImges/BannerDesign.jpg";
import business_card from "../assets/servicesImges/businessCard.jpg";
import video_edition from "../assets/servicesImges/videoEdition.jpg";
import Social_media_post from "../assets/servicesImges/SocialMediaPost.jpg";
import Type_setting from "../assets/servicesImges/TypeSetting.jpg";
import websitedevelopment from "../assets/servicesImges/websitedevelopment.jpg";
import cvDesign from "../assets/servicesImges/cvDesign.jpg";
import businessCard from "../assets/servicesImges/businessCard.jpg";
import marketing from "../assets/servicesImges/marketing.jpg";
import Assigment from "../assets/servicesImges/Assigment.jpg";
import coverPages from "../assets/servicesImges/coverPages.jpg";

const Projects = () => {
  const services = [
    {
      title: "Banner Design",
      description:
        "We design eye-catching banners that effectively communicate your message and grab attention, perfect for events, promotions, and online campaigns, ensuring your brand stands out.",
      image: Banner_design,
    },
    {
      title: "Social Media Post Design",
      description:
        "Creating visually compelling social media posts that engage your audience, boost interaction, and enhance your brand's online presence with attractive and memorable designs tailored to each platform.",
      image: Social_media_post,
    },
    {
      title: "Cover Page Design",
      description:
        "Designing professional and creative cover pages for books, reports, and presentations that captivate readers, reflect the content's essence, and make a lasting first impression.",
      image: coverPages,
    },
    {
      title: "Handbill Design",
      description:
        "Crafting striking handbills for events, promotions, and advertising that convey your message clearly and attractively, designed to capture interest and generate buzz.",
      image: hand_bill,
    },
    {
      title: "All type of Cards Design",
      description:
        "Designing a variety of cards, including business cards, greeting cards, and invitations, with unique and personalized touches that leave a lasting impression.",
      image: business_card,
    },
    {
      title: "Type Setting",
      description:
        "Providing expert typesetting services to ensure your text is beautifully formatted, easy to read, and visually appealing, enhancing the overall quality of your documents.",
      image: Type_setting,
    },
    {
      title: "Video Editing",
      description:
        "Offering professional video editing services to create polished, engaging videos that tell your story effectively, with seamless transitions, sound enhancements, and visual effects.",
      image: video_edition,
    },
    {
      title: "Assignments Creating",
      description:
        "Developing well-designed and structured assignments tailored to meet educational goals, ensuring clarity, engagement, and a comprehensive approach to assessing student learning and skills.",
      image: Assigment,
    },
    {
      title: "Social Media Marketing",
      description:
        "Implementing strategic social media marketing campaigns to enhance brand visibility, engage your target audience, and drive growth. Utilizing content creation, targeted ads, and analytics to maximize reach and impact.",
      image: marketing,
    },
    {
      title: "CV Creating",
      description:
        "Implementing strategic social media marketing campaigns to enhance brand visibility, engage your target audience, and drive growth. Utilizing content creation, targeted ads, and analytics to maximize reach and impact.",
      image: cvDesign,
    },
    {
      title: "Web Design",
      description:
        "Implementing strategic social media marketing campaigns to enhance brand visibility, engage your target audience, and drive growth. Utilizing content creation, targeted ads, and analytics to maximize reach and impact.",
      image: websitedevelopment,
    },
    {
      title: "Business Card",
      description:
        "Implementing strategic social media marketing campaigns to enhance brand visibility, engage your target audience, and drive growth. Utilizing content creation, targeted ads, and analytics to maximize reach and impact.",
      image: businessCard,
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
        className=" relative grid grid-cols md:grid-cols-3 justify-center items-center gap-4 m-auto pt-8
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
