import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import { useEffect } from "react";

const projects = [
  {
    title: "Expense Manager",
    description:
      "Crafted with ReactJS, Bootstrap, Sass, NodeJS, ExpressJS, and MongoDB, this project delivers a dynamic web experience.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Blog Content Management system",
    description:
      "Engineered a responsive CMS with Node.js, Express.js, and EJS templating. Seamlessly integrated MongoDB for efficient data management",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "ECommerce Store",
    description:
      "Crafted a responsive E-commerce platform with NextJS, TailwindCSS, NodeJS, and ExpressJS, integrating MySQL and PostgreSQL.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  useEffect(() => {
    projects.forEach((project) => {
      const image = new Image();
      image.src = project.getImageSrc();
    });
  }, []);
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
