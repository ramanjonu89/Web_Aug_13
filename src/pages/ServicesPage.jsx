import React, { useState } from "react";
import "./ServicesPageCSS.css";
import Accordion from "./Accordion";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState("Website Design");

  const accordionItemsForWebsiteDesign = [
    {
      number: "01",
      title: "Service design",
      content:
        "A perfect digital marketing strategy should be invisible to the audience. It should feel natural and orchestrate a rich, fun and learning experience for the visitors through all the sensory mediums. You can change human behavior by invoking emotional responses by creating an environment with design &amp; content. It’s the art of doing marketing without marketing.A perfect digital marketing strategy should be invisible to the audience. It should feel natural and orchestrate a rich, fun and learning experience for the visitors through all the sensory mediums. You can change human behavior by invoking emotional responses by creating an environment with design &amp; content. It’s the art of doing marketing without marketing.A perfect digital marketing strategy should be invisible to the audience. It should feel natural and orchestrate a rich, fun and learning experience for the visitors through all the sensory mediums. You can change human behavior by invoking emotional responses by creating an environment with design &amp; content. It’s the art of doing marketing without marketing.",
    },
    {
      number: "02",
      title: "Service design",
      content:
        "A perfect digital marketing strategy should be invisible to the audience. It should feel natural and orchestrate a rich, fun and learning experience for the visitors through all the sensory mediums. You can change human behavior by invoking emotional responses by creating an environment with design &amp; content. It’s the art of doing marketing without marketing.A perfect digital marketing strategy should be invisible to the audience. It should feel natural and orchestrate a rich, fun and learning experience for the visitors through all the sensory mediums. You can change human behavior by invoking emotional responses by creating an environment with design &amp; content. It’s the art of doing marketing without marketing.A perfect digital marketing strategy should be invisible to the audience. It should feel natural and orchestrate a rich, fun and learning experience for the visitors through all the sensory mediums. You can change human behavior by invoking emotional responses by creating an environment with design &amp; content. It’s the art of doing marketing without marketing.",
    },
    {
      number: "03",
      title: "Experience focused",
      content:
        "Lorem ipsum dolor sit amet. Non voluptatem sapiente cum fuga quod est maxime nemo vel autem amet vel ullam dolorum cum praesentium ipsam sit minus voluptatem.",
    },
    {
      number: "04",
      title: "UI & UX Design",
      content:
        "Lorem ipsum dolor sit amet. Non voluptatem sapiente cum fuga quod est maxime nemo vel autem amet vel ullam dolorum cum praesentium ipsam sit minus voluptatem.",
    },
    {
      number: "05",
      title: "Branding & Branding strategy",
      content:
        "Lorem ipsum dolor sit amet. Non voluptatem sapiente cum fuga quod est maxime nemo vel autem amet vel ullam dolorum cum praesentium ipsam sit minus voluptatem.",
    },
  ];
  const accordionItemsForDigitalMarketing = [
    {
      number: "01",
      title: "SEO – Search Engine Optimization",
      content:
        "Lorem ipsum dolor sit amet. Non voluptatem sapiente cum fuga quod est maxime nemo vel autem amet vel ullam dolorum cum praesentium ipsam sit minus voluptatem.",
    },
    {
      number: "02",
      title: "SEM – Search Engine Marketing",
      content:
        "Lorem ipsum dolor sit amet. Non voluptatem sapiente cum fuga quod est maxime nemo vel autem amet vel ullam dolorum cum praesentium ipsam sit minus voluptatem.",
    },
    {
      number: "03",
      title: "SMM – Social Media Marketing",
      content:
        "Lorem ipsum dolor sit amet. Non voluptatem sapiente cum fuga quod est maxime nemo vel autem amet vel ullam dolorum cum praesentium ipsam sit minus voluptatem.",
    },
    {
      number: "04",
      title: "GMB(GBP) – Google Business Profile",
      content:
        "Lorem ipsum dolor sit amet. Non voluptatem sapiente cum fuga quod est maxime nemo vel autem amet vel ullam dolorum cum praesentium ipsam sit minus voluptatem.",
    },
    {
      number: "05",
      title: "Content Marketing",
      content:
        "Lorem ipsum dolor sit amet. Non voluptatem sapiente cum fuga quod est maxime nemo vel autem amet vel ullam dolorum cum praesentium ipsam sit minus voluptatem.",
    },
    {
      number: "06",
      title: "Video Creation/Editing /Marketing",
      content:
        "Lorem ipsum dolor sit amet. Non voluptatem sapiente cum fuga quod est maxime nemo vel autem amet vel ullam dolorum cum praesentium ipsam sit minus voluptatem.",
    },
    {
      number: "07",
      title: "Influencer Marketing",
      content:
        "Lorem ipsum dolor sit amet. Non voluptatem sapiente cum fuga quod est maxime nemo vel autem amet vel ullam dolorum cum praesentium ipsam sit minus voluptatem.",
    },
    {
      number: "08",
      title: "NFT 360",
      content:
        "Lorem ipsum dolor sit amet. Non voluptatem sapiente cum fuga quod est maxime nemo vel autem amet vel ullam dolorum cum praesentium ipsam sit minus voluptatem.",
    },
  ];
  const accordionItemsForREPUTATIONMANAGEMENT = [
    {
      number: "01",
      title: "Content Removal",
      content:
        "Lorem ipsum dolor sit amet. Non voluptatem sapiente cum fuga quod est maxime nemo vel autem amet vel ullam dolorum cum praesentium ipsam sit minus voluptatem.",
    },
    {
      number: "02",
      title: "Review Management",
      content:
        "Lorem ipsum dolor sit amet. Non voluptatem sapiente cum fuga quod est maxime nemo vel autem amet vel ullam dolorum cum praesentium ipsam sit minus voluptatem.",
    },
    {
      number: "03",
      title: "Reputation Monitoring",
      content:
        "Lorem ipsum dolor sit amet. Non voluptatem sapiente cum fuga quod est maxime nemo vel autem amet vel ullam dolorum cum praesentium ipsam sit minus voluptatem.",
    },
    {
      number: "04",
      title: "Branding",
      content:
        "Lorem ipsum dolor sit amet. Non voluptatem sapiente cum fuga quod est maxime nemo vel autem amet vel ullam dolorum cum praesentium ipsam sit minus voluptatem.",
    },
  ];
  const accordionItemsForMobileApp = [
    {
      number: "01",
      title: "Service design",
      content:
        "Lorem ipsum dolor sit amet. Non voluptatem sapiente cum fuga quod est maxime nemo vel autem amet vel ullam dolorum cum praesentium ipsam sit minus voluptatem.",
    },
    {
      number: "02",
      title: "Service design",
      content:
        "Lorem ipsum dolor sit amet. Non voluptatem sapiente cum fuga quod est maxime nemo vel autem amet vel ullam dolorum cum praesentium ipsam sit minus voluptatem.",
    },
    {
      number: "03",
      title: "Service design",
      content:
        "Lorem ipsum dolor sit amet. Non voluptatem sapiente cum fuga quod est maxime nemo vel autem amet vel ullam dolorum cum praesentium ipsam sit minus voluptatem.",
    },
    {
      number: "04",
      title: "Service design",
      content:
        "Lorem ipsum dolor sit amet. Non voluptatem sapiente cum fuga quod est maxime nemo vel autem amet vel ullam dolorum cum praesentium ipsam sit minus voluptatem.",
    },
    {
      number: "05",
      title: "Service design",
      content:
        "Lorem ipsum dolor sit amet. Non voluptatem sapiente cum fuga quod est maxime nemo vel autem amet vel ullam dolorum cum praesentium ipsam sit minus voluptatem.",
    },
  ];

  const renderSideContent = () => {
    switch (selectedService) {
      case "Website Design":
        return (
          <div className="servicespage-sidecontent">
            <div className="sidecontent-heading">
              <h1>WEBSITE</h1>
              <h1>DESIGN</h1>
            </div>
            <p className="sidecontent-heading-content">
              Gone are the days when designers were not in meeting room for
              website building discussions. Today creative websites start with
              design and is the backbone of your online experience marketing.
            </p>
            <div className="sidecontent-accordion">
              <Accordion items={accordionItemsForWebsiteDesign} />
            </div>
          </div>
        );
      case "Digital Marketing":
        return (
          <div className="servicespage-sidecontent">
            <div className="sidecontent-heading">
              <h1>Digital</h1>
              <h1>Marketing</h1>
            </div>
            <p className="sidecontent-heading-content">
              A perfect digital marketing strategy should be invisible to the
              audience. It should feel natural and orchestrate a rich, fun and
              learning experience for the visitors through all the sensory
              mediums. You can change human behavior by invoking emotional
              responses by creating an environment with design &amp; content.
              It’s the art of doing marketing without marketing.
            </p>
            <div className="sidecontent-accordion">
              <Accordion items={accordionItemsForDigitalMarketing} />
            </div>
          </div>
        );
      case "Reputation Management":
        return (
          <div className="servicespage-sidecontent">
            <div className="sidecontent-heading">
              <h1>Reputation</h1>
              <h1>Management</h1>
            </div>
            <p className="sidecontent-heading-content1">
              Your reputation online, attributes to how successful your business
              will be in the marketplace. The twenty-four-seven digital
              environment today determines, how customers buy your products or
              services. 94% of the consumers do research online on search
              engines and social media sites before making a purchase.
              Therefore, the consensus of the public perception of your company
              online is of at most importance.
            </p>
            <p className="sidecontent-heading-content">
              Online reputation consists of your positive image on your website,
              social media sites, positive reviews on google and other review
              sites and positive news coverage. Building trust online is a
              long-term process and needs commitment. The wise invests on their
              reputation building and reap the benefits.
            </p>
            <div className="sidecontent-accordion">
              <Accordion items={accordionItemsForREPUTATIONMANAGEMENT} />
            </div>
          </div>
        );
      case "Mobile App":
        return (
          <div className="servicespage-sidecontent">
            <div className="sidecontent-heading">
              <h1>Mobile App</h1>
            </div>
            <p className="sidecontent-heading-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <div className="sidecontent-accordion">
              <Accordion items={accordionItemsForMobileApp} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="servicePage-container" id="services">
      <div className="servicespage-heading">
        <h1>SERVICES</h1>
      </div>
      <div className="main-wrapper">
        <div className="servicePage-content-wrapper">
          <div
            className="servicePage-content"
            onClick={() => setSelectedService("Website Design")}
          >
            <h1>01/</h1> <p>Website Design</p>
          </div>
          <div
            className="servicePage-content"
            onClick={() => setSelectedService("Digital Marketing")}
          >
            <h1>02/</h1> <p>Digital Marketing</p>
          </div>
          <div
            className="servicePage-content"
            onClick={() => setSelectedService("Reputation Management")}
          >
            <h1>03/</h1> <p>Reputation Management</p>
          </div>
          <div
            className="servicePage-content"
            onClick={() => setSelectedService("Mobile App")}
          >
            <h1>04/</h1> <p>Mobile App</p>
          </div>
        </div>
        {renderSideContent()}
      </div>
    </div>
  );
};

export default ServicesPage;
